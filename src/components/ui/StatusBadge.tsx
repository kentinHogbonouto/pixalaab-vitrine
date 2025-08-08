import {
  Badge,
  DangerBadge,
  PrimaryBadge,
  SuccessBadge,
  WarningBadge,
} from "@/components/ui/Badge";
import { TOrder } from "@/shared/types/order.types";

interface IOrderStatusBadgeProps {
  status: Pick<TOrder, "status">;
  className?: string;
}

export const OrderStatusBadge = (props: IOrderStatusBadgeProps) => {
  const { status, className } = props;

  const statusLabel = { id: `orders.status.${status.status}` };

  switch (status.status) {
    case "pending":
      return (
        <WarningBadge className={className}>{statusLabel.id}</WarningBadge>
      );
    case "inProgress":
      return (
        <PrimaryBadge className={className}>{statusLabel.id}</PrimaryBadge>
      );
    case "confirmed":
      return (
        <SuccessBadge className={className}>{statusLabel.id}</SuccessBadge>
      );
    case "cancelled":
      return <DangerBadge className={className}>{statusLabel.id}</DangerBadge>;
    case "sampleTaken":
      return (
        <PrimaryBadge className={className}>{statusLabel.id}</PrimaryBadge>
      );
    case "waitingForResults":
      return (
        <WarningBadge className={className}>{statusLabel.id}</WarningBadge>
      );
    case "resultsReady":
      return (
        <SuccessBadge className={className}>{statusLabel.id}</SuccessBadge>
      );
    case "resultsSent":
      return (
        <PrimaryBadge className={className}>{statusLabel.id}</PrimaryBadge>
      );
    default:
      return (
        <Badge variant="outline" className={className}>
          {statusLabel.id}
        </Badge>
      );
  }
};
