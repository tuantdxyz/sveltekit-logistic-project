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
}
