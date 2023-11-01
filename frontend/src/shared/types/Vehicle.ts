export type Vehicle = {
  id?: number;
  name?: string;
  icon?: string;
  year?: number;
  color?: string;
  manufacturer?: string;
  approvedDate?: Date;
  approved?: boolean;
  proposedDate?: Date;
  proposalUserId?: number;
  annotation?: string;
  purchasePrice?: number;
  salePrice?: number;
  sold?: boolean;
  saleDate?: Date;
  saleAnnotation?: string;
  saleUserId?: number;
};
