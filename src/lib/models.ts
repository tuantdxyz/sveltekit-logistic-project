export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  pricings?: Pricing[];
}

export interface Pricing {
  id: number;
  serviceId: number;
  price: number;
  currency: string;
  service?: Service;
}

export interface Shipping {
  id: number;
  orderId: string;
  status: string;
}

export interface Tracking {
  id: number;
  trackingId: string;
  status: string;
  location?: string;
  updatedAt?: Date;
  notes?: string;
}

export interface VendorProduct {
  rank: number;
  avatar: string;
  name: string;
  description: string;
  points: number;
}

export interface Product {
  rank: number;
  image: string;
  name: string;
  sold: number;
}

export interface ServiceDiscount {
  serviceName: string;
  originalPrice: string;
  discountedPrice: string;
}

export interface PotentialProduct {
  name: string;
  category: string;
  potentialScore: number;
  image: string;
}

export interface SupplierDiscount {
  supplierName: string;
  discountRate: string;
  description: string;
  logo: string;
}
