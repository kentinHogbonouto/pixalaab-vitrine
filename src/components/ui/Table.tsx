import { useState, useMemo, JSX } from "react";
import {
  FaSort,
  FaSortUp,
  FaSortDown,
  FaSearch,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

/**
 * Composant DataTable réutilisable
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.data - Les données à afficher
 * @param {Array} props.columns - Configuration des colonnes
 * @param {string} props.title - Titre du tableau (optionnel)
 * @param {number} props.rowsPerPage - Nombre de lignes par page (défaut: 5)
 * @param {boolean} props.showSearch - Afficher la barre de recherche (défaut: true)
 * @param {boolean} props.showCheckboxes - Afficher les cases à cocher (défaut: true)
 * @param {Function} props.onRowSelect - Fonction appelée lors de la sélection des lignes
 * @param {Function} props.onRowClick - Fonction appelée lors du clic sur une ligne
 * @returns {JSX.Element} Composant DataTable
 */
interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (row: T) => JSX.Element;
}

interface IDataTableProps<
  T extends { id?: string | number; _id?: string | number }
> {
  data: T[];
  columns: Column<T>[];
  title?: string;
  rowsPerPage?: number;
  showSearch?: boolean;
  showCheckboxes?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  onRowClick?: (row: T) => void;
}

export default function DataTable<
  T extends { id?: string | number; _id?: string | number }
>(props: IDataTableProps<T>) {
  const {
    data,
    columns,
    title,
    rowsPerPage = 5,
    showSearch = true,
    showCheckboxes = true,
    onRowSelect = () => {},
    onRowClick = () => {},
  } = props;
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<
    (string | number | boolean | null)[]
  >([]);
  const [selectAll, setSelectAll] = useState(false);

  const sortData = (key: string | null) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredData = useMemo(() => {
    let result = data;
    if (searchQuery) {
      result = data.filter((item) =>
        columns.some((column) => {
          const value = (item as Record<string, unknown>)[column.key];
          return (
            value &&
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          );
        })
      );
    }

    if (sortConfig.key) {
      result = [...result].sort((a, b) => {
        const aValue = sortConfig.key
          ? (a as Record<string, unknown>)[sortConfig.key]
          : null;
        const bValue = sortConfig.key
          ? (b as Record<string, unknown>)[sortConfig.key]
          : null;

        if (aValue == null) return sortConfig.direction === "asc" ? -1 : 1;
        if (bValue == null) return sortConfig.direction === "asc" ? 1 : -1;

        if (typeof aValue === "string") {
          return sortConfig.direction === "asc"
            ? aValue.toString().localeCompare(bValue.toString())
            : typeof bValue === "string" && typeof aValue === "string"
            ? bValue.localeCompare(aValue)
            : 0;
        }

        return sortConfig.direction === "asc"
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      });
    }

    return result;
  }, [data, columns, searchQuery, sortConfig]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = useMemo(() => {
    return filteredData.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  }, [filteredData, currentPage, rowsPerPage]);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const ids = filteredData
        .map((row) => row.id ?? row._id)
        .filter((id) => id !== undefined);
      setSelectedRows(ids);
    }
    setSelectAll(!selectAll);
    onRowSelect(selectAll ? [] : filteredData);
  };

  const toggleSelectRow = (id: string | number | boolean | null) => {
    let updatedSelection;
    if (selectedRows.includes(id)) {
      updatedSelection = selectedRows.filter((rowId) => rowId !== id);
      setSelectedRows(updatedSelection);
      setSelectAll(false);
    } else {
      updatedSelection = [...selectedRows, id];
      setSelectedRows(updatedSelection);
    }
    onRowSelect(
      data.filter((row) => {
        const rowId = row.id ?? row._id;
        return rowId !== undefined && updatedSelection.includes(rowId);
      })
    );
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
      {(title || showSearch) && (
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-200">
          {title && (
            <h2 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
              {title}
            </h2>
          )}

          {showSearch && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-white border-b-2 border-gray-300 text-gray-500 uppercase text-xs tracking-wider">
            <tr>
              {showCheckboxes && (
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      checked={selectAll}
                      onChange={toggleSelectAll}
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
              )}

              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={`px-6 py-3 ${
                    column.sortable ? "cursor-pointer" : ""
                  }`}
                  onClick={() => column.sortable && sortData(column.key)}
                >
                  <div className="flex items-center">
                    {column.label}
                    {column.sortable && (
                      <span className="ml-1">
                        {sortConfig.key === column.key ? (
                          sortConfig.direction === "asc" ? (
                            <FaSortUp className="h-4 w-4" />
                          ) : (
                            <FaSortDown className="h-4 w-4" />
                          )
                        ) : (
                          <FaSort className="h-4 w-4 opacity-30" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => {
                const rowId = row.id || row._id || index;
                return (
                  <tr
                    key={String(rowId)}
                    className={`hover:bg-gray-50 ${selectedRows.includes(rowId) ? "bg-blue-50" : ""}`}
                    onClick={() => onRowClick(row)}
                  >
                    {showCheckboxes && (
                      <td
                        className="w-4 p-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            checked={selectedRows.includes(rowId)}
                            onChange={() => toggleSelectRow(rowId)}
                          />
                          <label className="sr-only">checkbox</label>
                        </div>
                      </td>
                    )}

                    {columns.map((column) => (
                      <td key={`${rowId}-${column.key}`} className="px-6 py-4">
                        {column.render
                          ? column.render(row)
                          : (row as Record<string, React.ReactNode>)[
                              column.key
                            ]}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (showCheckboxes ? 1 : 0)}
                  className="px-6 py-4 text-center text-gray-500"
                >
                  Aucun résultat trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filteredData.length > 0 && (
        <div className="p-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-700">
            <span className="font-medium">{filteredData.length}</span> résultats
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className={`p-1 rounded border ${
                currentPage === 1
                  ? "text-gray-300 border-gray-200"
                  : "text-gray-500 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <FaAngleDoubleLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-1 rounded border ${
                currentPage === 1
                  ? "text-gray-300 border-gray-200"
                  : "text-gray-500 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <FaAngleLeft className="h-4 w-4" />
            </button>

            <span className="px-3 py-1 text-sm">
              Page <span className="font-medium">{currentPage}</span> sur{" "}
              <span className="font-medium">{totalPages || 1}</span>
            </span>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`p-1 rounded border ${
                currentPage === totalPages || totalPages === 0
                  ? "text-gray-300 border-gray-200"
                  : "text-gray-500 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <FaAngleRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`p-1 rounded border ${
                currentPage === totalPages || totalPages === 0
                  ? "text-gray-300 border-gray-200"
                  : "text-gray-500 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <FaAngleDoubleRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
