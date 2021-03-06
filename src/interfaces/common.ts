export interface IClientConfig {
	url: string;
	user: string;
	password: string;
	userAgent: string;
}

export interface IProductId {
	product_id: string;
	type: string;
	label: string;
	operator: string;
	nominal: string;
	price: string;
	enabled: string;
	field_denom?: string;
	field_paket_data?: boolean;
}

export interface IBalanceResponse {
	balance: number | null;
	error?: string;
}

export interface IProductListResponse {
	data: Array<IProductId>;
	error?: string;
}

export enum StatusEnum {
	"success" = "success",
	"failed" = "failed",
	"pending" = "pending",
	"cancel" = "cancel"
}

export enum ResponseCodeEnum {
	"Success" = "00",
	"Pending" = "10",
	"Wrong number/ number blocked/ number expired" = "20",
	"Product Issue" = "21",
	"Duplicate Transaction" = "22",
	"Connection Timeout" = "23",
	"Provider Cut Off" = "24",
	"KWH is Overlimit" = "25",
	"Payment Overlimit" = "26",
	"Bill Already Paid/ Not Available" = "50",
	"Invalid Inquiry Amount or No inquiry" = "51",
	"Order Canceled by Ops" = "98",
	"General Error" = "99",
	"failed" = "99"
}

export enum ProductTypeEnum {
	"mobile" = "mobile",
	"electricity" = "electricity",
	"electricity_postpaid" = "electricity_postpaid",
	"bpjs_kesehatan" = "bpjs_kesehatan",
	"game" = "game",
	"multi" = "multi",
	"telkom_postpaid" = "telkom_postpaid",
	"pdam" = "pdam"
}
