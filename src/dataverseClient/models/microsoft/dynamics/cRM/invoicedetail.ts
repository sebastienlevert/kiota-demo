import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyinstanceFromDiscriminatorValue} from './createDynamicpropertyinstanceFromDiscriminatorValue';
import {createInvoicedetailFromDiscriminatorValue} from './createInvoicedetailFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_agreementinvoiceproductFromDiscriminatorValue} from './createMsdyn_agreementinvoiceproductFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_orderinvoicingproductFromDiscriminatorValue} from './createMsdyn_orderinvoicingproductFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderproductFromDiscriminatorValue} from './createMsdyn_workorderproductFromDiscriminatorValue';
import {createMsdyn_workorderserviceFromDiscriminatorValue} from './createMsdyn_workorderserviceFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductassociationFromDiscriminatorValue} from './createProductassociationFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicpropertyinstance, Invoice, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_agreementinvoiceproduct, Msdyn_invoicelinetransaction, Msdyn_orderinvoicingproduct, Msdyn_project, Msdyn_workorder, Msdyn_workorderproduct, Msdyn_workorderservice, Principalobjectattributeaccess, Processsession, Product, Productassociation, Salesorderdetail, Syncerror, Systemuser, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Invoicedetail extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __invoiceid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_agreementinvoiceproduct_value?: string | undefined;
    private __msdyn_currency_value?: string | undefined;
    private __msdyn_orderinvoicingproduct_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_workorderid_value?: string | undefined;
    private __msdyn_workorderproductid_value?: string | undefined;
    private __msdyn_workorderserviceid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentbundleidref_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __salesorderdetailid_value?: string | undefined;
    private __salesrepid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __uomid_value?: string | undefined;
    private _actualdeliveryon?: Date | undefined;
    private _baseamount?: number | undefined;
    private _baseamount_base?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _extendedamount?: number | undefined;
    private _extendedamount_base?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _invoiceDetail_AsyncOperations?: Asyncoperation[] | undefined;
    private _invoiceDetail_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _invoiceDetail_Dynamicpropertyinstance?: Dynamicpropertyinstance[] | undefined;
    private _invoicedetail_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _invoicedetail_parent_invoicedetail?: Invoicedetail[] | undefined;
    private _invoicedetail_parentref_invoicedetail?: Invoicedetail[] | undefined;
    private _invoicedetail_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _invoiceDetail_ProcessSessions?: Processsession[] | undefined;
    private _invoiceDetail_SyncErrors?: Syncerror[] | undefined;
    private _invoicedetailid?: string | undefined;
    private _invoicedetailname?: string | undefined;
    private _invoiceid?: Invoice | undefined;
    private _invoiceispricelocked?: boolean | undefined;
    private _invoicestatecode?: number | undefined;
    private _iscopied?: boolean | undefined;
    private _ispriceoverridden?: boolean | undefined;
    private _isproductoverridden?: boolean | undefined;
    private _lineitemnumber?: number | undefined;
    private _manualdiscountamount?: number | undefined;
    private _manualdiscountamount_base?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_agreement?: Msdyn_agreement | undefined;
    private _msdyn_agreementinvoiceproduct?: Msdyn_agreementinvoiceproduct | undefined;
    private _msdyn_billingmethod?: number | undefined;
    private _msdyn_chargeableamount?: number | undefined;
    private _msdyn_chargeableamount_base?: number | undefined;
    private _msdyn_complimentaryamount?: number | undefined;
    private _msdyn_complimentaryamount_base?: number | undefined;
    private _msdyn_contractline?: string | undefined;
    private _msdyn_contractlineamount?: number | undefined;
    private _msdyn_contractlineamount_base?: number | undefined;
    private _msdyn_currency?: Transactioncurrency | undefined;
    private _msdyn_invoicedetail_msdyn_invoicelinetransactio?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_invoicedtilldate?: number | undefined;
    private _msdyn_invoicedtilldate_base?: number | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_linetype?: number | undefined;
    private _msdyn_nonchargeableamount?: number | undefined;
    private _msdyn_nonchargeableamount_base?: number | undefined;
    private _msdyn_OrderInvoicingProduct?: Msdyn_orderinvoicingproduct | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_workorderid?: Msdyn_workorder | undefined;
    private _msdyn_workorderproductid?: Msdyn_workorderproduct | undefined;
    private _msdyn_workorderserviceid?: Msdyn_workorderservice | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentbundleid?: string | undefined;
    private _parentbundleid_invoicedetail?: Invoicedetail | undefined;
    private _parentbundleidref_invoicedetail?: Invoicedetail | undefined;
    private _priceperunit?: number | undefined;
    private _priceperunit_base?: number | undefined;
    private _pricingerrorcode?: number | undefined;
    private _productassociationid?: string | undefined;
    private _productassociationid_productassociation?: Productassociation | undefined;
    private _productdescription?: string | undefined;
    private _productid?: Product | undefined;
    private _productname?: string | undefined;
    private _productnumber?: string | undefined;
    private _producttypecode?: number | undefined;
    private _propertyconfigurationstatus?: number | undefined;
    private _quantity?: number | undefined;
    private _quantitybackordered?: number | undefined;
    private _quantitycancelled?: number | undefined;
    private _quantityshipped?: number | undefined;
    private _salesOrderDetailId?: Salesorderdetail | undefined;
    private _salesrepid?: Systemuser | undefined;
    private _sequencenumber?: number | undefined;
    private _shippingtrackingnumber?: string | undefined;
    private _shipto_city?: string | undefined;
    private _shipto_country?: string | undefined;
    private _shipto_fax?: string | undefined;
    private _shipto_freighttermscode?: number | undefined;
    private _shipto_line1?: string | undefined;
    private _shipto_line2?: string | undefined;
    private _shipto_line3?: string | undefined;
    private _shipto_name?: string | undefined;
    private _shipto_postalcode?: string | undefined;
    private _shipto_stateorprovince?: string | undefined;
    private _shipto_telephone?: string | undefined;
    private _skippricecalculation?: number | undefined;
    private _tax?: number | undefined;
    private _tax_base?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _uomid?: Uom | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _volumediscountamount?: number | undefined;
    private _volumediscountamount_base?: number | undefined;
    private _willcall?: boolean | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _invoiceid_value property value. 
     * @returns a string
     */
    public get _invoiceid_value() {
        return this.__invoiceid_value;
    };
    /**
     * Sets the _invoiceid_value property value. 
     * @param value Value to set for the _invoiceid_value property.
     */
    public set _invoiceid_value(value: string | undefined) {
        this.__invoiceid_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_agreement_value property value. 
     * @returns a string
     */
    public get _msdyn_agreement_value() {
        return this.__msdyn_agreement_value;
    };
    /**
     * Sets the _msdyn_agreement_value property value. 
     * @param value Value to set for the _msdyn_agreement_value property.
     */
    public set _msdyn_agreement_value(value: string | undefined) {
        this.__msdyn_agreement_value = value;
    };
    /**
     * Gets the _msdyn_agreementinvoiceproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementinvoiceproduct_value() {
        return this.__msdyn_agreementinvoiceproduct_value;
    };
    /**
     * Sets the _msdyn_agreementinvoiceproduct_value property value. 
     * @param value Value to set for the _msdyn_agreementinvoiceproduct_value property.
     */
    public set _msdyn_agreementinvoiceproduct_value(value: string | undefined) {
        this.__msdyn_agreementinvoiceproduct_value = value;
    };
    /**
     * Gets the _msdyn_currency_value property value. 
     * @returns a string
     */
    public get _msdyn_currency_value() {
        return this.__msdyn_currency_value;
    };
    /**
     * Sets the _msdyn_currency_value property value. 
     * @param value Value to set for the _msdyn_currency_value property.
     */
    public set _msdyn_currency_value(value: string | undefined) {
        this.__msdyn_currency_value = value;
    };
    /**
     * Gets the _msdyn_orderinvoicingproduct_value property value. 
     * @returns a string
     */
    public get _msdyn_orderinvoicingproduct_value() {
        return this.__msdyn_orderinvoicingproduct_value;
    };
    /**
     * Sets the _msdyn_orderinvoicingproduct_value property value. 
     * @param value Value to set for the _msdyn_orderinvoicingproduct_value property.
     */
    public set _msdyn_orderinvoicingproduct_value(value: string | undefined) {
        this.__msdyn_orderinvoicingproduct_value = value;
    };
    /**
     * Gets the _msdyn_project_value property value. 
     * @returns a string
     */
    public get _msdyn_project_value() {
        return this.__msdyn_project_value;
    };
    /**
     * Sets the _msdyn_project_value property value. 
     * @param value Value to set for the _msdyn_project_value property.
     */
    public set _msdyn_project_value(value: string | undefined) {
        this.__msdyn_project_value = value;
    };
    /**
     * Gets the _msdyn_workorderid_value property value. 
     * @returns a string
     */
    public get _msdyn_workorderid_value() {
        return this.__msdyn_workorderid_value;
    };
    /**
     * Sets the _msdyn_workorderid_value property value. 
     * @param value Value to set for the _msdyn_workorderid_value property.
     */
    public set _msdyn_workorderid_value(value: string | undefined) {
        this.__msdyn_workorderid_value = value;
    };
    /**
     * Gets the _msdyn_workorderproductid_value property value. 
     * @returns a string
     */
    public get _msdyn_workorderproductid_value() {
        return this.__msdyn_workorderproductid_value;
    };
    /**
     * Sets the _msdyn_workorderproductid_value property value. 
     * @param value Value to set for the _msdyn_workorderproductid_value property.
     */
    public set _msdyn_workorderproductid_value(value: string | undefined) {
        this.__msdyn_workorderproductid_value = value;
    };
    /**
     * Gets the _msdyn_workorderserviceid_value property value. 
     * @returns a string
     */
    public get _msdyn_workorderserviceid_value() {
        return this.__msdyn_workorderserviceid_value;
    };
    /**
     * Sets the _msdyn_workorderserviceid_value property value. 
     * @param value Value to set for the _msdyn_workorderserviceid_value property.
     */
    public set _msdyn_workorderserviceid_value(value: string | undefined) {
        this.__msdyn_workorderserviceid_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _parentbundleidref_value property value. 
     * @returns a string
     */
    public get _parentbundleidref_value() {
        return this.__parentbundleidref_value;
    };
    /**
     * Sets the _parentbundleidref_value property value. 
     * @param value Value to set for the _parentbundleidref_value property.
     */
    public set _parentbundleidref_value(value: string | undefined) {
        this.__parentbundleidref_value = value;
    };
    /**
     * Gets the _productid_value property value. 
     * @returns a string
     */
    public get _productid_value() {
        return this.__productid_value;
    };
    /**
     * Sets the _productid_value property value. 
     * @param value Value to set for the _productid_value property.
     */
    public set _productid_value(value: string | undefined) {
        this.__productid_value = value;
    };
    /**
     * Gets the _salesorderdetailid_value property value. 
     * @returns a string
     */
    public get _salesorderdetailid_value() {
        return this.__salesorderdetailid_value;
    };
    /**
     * Sets the _salesorderdetailid_value property value. 
     * @param value Value to set for the _salesorderdetailid_value property.
     */
    public set _salesorderdetailid_value(value: string | undefined) {
        this.__salesorderdetailid_value = value;
    };
    /**
     * Gets the _salesrepid_value property value. 
     * @returns a string
     */
    public get _salesrepid_value() {
        return this.__salesrepid_value;
    };
    /**
     * Sets the _salesrepid_value property value. 
     * @param value Value to set for the _salesrepid_value property.
     */
    public set _salesrepid_value(value: string | undefined) {
        this.__salesrepid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the _uomid_value property value. 
     * @returns a string
     */
    public get _uomid_value() {
        return this.__uomid_value;
    };
    /**
     * Sets the _uomid_value property value. 
     * @param value Value to set for the _uomid_value property.
     */
    public set _uomid_value(value: string | undefined) {
        this.__uomid_value = value;
    };
    /**
     * Gets the actualdeliveryon property value. 
     * @returns a Date
     */
    public get actualdeliveryon() {
        return this._actualdeliveryon;
    };
    /**
     * Sets the actualdeliveryon property value. 
     * @param value Value to set for the actualdeliveryon property.
     */
    public set actualdeliveryon(value: Date | undefined) {
        this._actualdeliveryon = value;
    };
    /**
     * Gets the baseamount property value. 
     * @returns a int64
     */
    public get baseamount() {
        return this._baseamount;
    };
    /**
     * Sets the baseamount property value. 
     * @param value Value to set for the baseamount property.
     */
    public set baseamount(value: number | undefined) {
        this._baseamount = value;
    };
    /**
     * Gets the baseamount_base property value. 
     * @returns a int64
     */
    public get baseamount_base() {
        return this._baseamount_base;
    };
    /**
     * Sets the baseamount_base property value. 
     * @param value Value to set for the baseamount_base property.
     */
    public set baseamount_base(value: number | undefined) {
        this._baseamount_base = value;
    };
    /**
     * Instantiates a new invoicedetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the extendedamount property value. 
     * @returns a int64
     */
    public get extendedamount() {
        return this._extendedamount;
    };
    /**
     * Sets the extendedamount property value. 
     * @param value Value to set for the extendedamount property.
     */
    public set extendedamount(value: number | undefined) {
        this._extendedamount = value;
    };
    /**
     * Gets the extendedamount_base property value. 
     * @returns a int64
     */
    public get extendedamount_base() {
        return this._extendedamount_base;
    };
    /**
     * Sets the extendedamount_base property value. 
     * @param value Value to set for the extendedamount_base property.
     */
    public set extendedamount_base(value: number | undefined) {
        this._extendedamount_base = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Invoicedetail)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Invoicedetail)._createdonbehalfby_value = n.getStringValue(); },
            "_invoiceid_value": (o, n) => { (o as unknown as Invoicedetail)._invoiceid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Invoicedetail)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Invoicedetail)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_agreementinvoiceproduct_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_agreementinvoiceproduct_value = n.getStringValue(); },
            "_msdyn_currency_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_currency_value = n.getStringValue(); },
            "_msdyn_orderinvoicingproduct_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_orderinvoicingproduct_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_workorderid_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_workorderid_value = n.getStringValue(); },
            "_msdyn_workorderproductid_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_workorderproductid_value = n.getStringValue(); },
            "_msdyn_workorderserviceid_value": (o, n) => { (o as unknown as Invoicedetail)._msdyn_workorderserviceid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Invoicedetail)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Invoicedetail)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Invoicedetail)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Invoicedetail)._owninguser_value = n.getStringValue(); },
            "_parentbundleidref_value": (o, n) => { (o as unknown as Invoicedetail)._parentbundleidref_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Invoicedetail)._productid_value = n.getStringValue(); },
            "_salesorderdetailid_value": (o, n) => { (o as unknown as Invoicedetail)._salesorderdetailid_value = n.getStringValue(); },
            "_salesrepid_value": (o, n) => { (o as unknown as Invoicedetail)._salesrepid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Invoicedetail)._transactioncurrencyid_value = n.getStringValue(); },
            "_uomid_value": (o, n) => { (o as unknown as Invoicedetail)._uomid_value = n.getStringValue(); },
            "actualdeliveryon": (o, n) => { (o as unknown as Invoicedetail).actualdeliveryon = n.getDateValue(); },
            "baseamount": (o, n) => { (o as unknown as Invoicedetail).baseamount = n.getNumberValue(); },
            "baseamount_base": (o, n) => { (o as unknown as Invoicedetail).baseamount_base = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Invoicedetail).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Invoicedetail).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Invoicedetail).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Invoicedetail).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Invoicedetail).exchangerate = n.getNumberValue(); },
            "extendedamount": (o, n) => { (o as unknown as Invoicedetail).extendedamount = n.getNumberValue(); },
            "extendedamount_base": (o, n) => { (o as unknown as Invoicedetail).extendedamount_base = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Invoicedetail).importsequencenumber = n.getNumberValue(); },
            "invoiceDetail_AsyncOperations": (o, n) => { (o as unknown as Invoicedetail).invoiceDetail_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "invoiceDetail_BulkDeleteFailures": (o, n) => { (o as unknown as Invoicedetail).invoiceDetail_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "invoiceDetail_Dynamicpropertyinstance": (o, n) => { (o as unknown as Invoicedetail).invoiceDetail_Dynamicpropertyinstance = n.getCollectionOfObjectValues<Dynamicpropertyinstance>(createDynamicpropertyinstanceFromDiscriminatorValue); },
            "invoicedetail_MailboxTrackingFolders": (o, n) => { (o as unknown as Invoicedetail).invoicedetail_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "invoicedetail_parent_invoicedetail": (o, n) => { (o as unknown as Invoicedetail).invoicedetail_parent_invoicedetail = n.getCollectionOfObjectValues<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "invoicedetail_parentref_invoicedetail": (o, n) => { (o as unknown as Invoicedetail).invoicedetail_parentref_invoicedetail = n.getCollectionOfObjectValues<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "invoicedetail_principalobjectattributeaccess": (o, n) => { (o as unknown as Invoicedetail).invoicedetail_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "invoiceDetail_ProcessSessions": (o, n) => { (o as unknown as Invoicedetail).invoiceDetail_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "invoiceDetail_SyncErrors": (o, n) => { (o as unknown as Invoicedetail).invoiceDetail_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "invoicedetailid": (o, n) => { (o as unknown as Invoicedetail).invoicedetailid = n.getStringValue(); },
            "invoicedetailname": (o, n) => { (o as unknown as Invoicedetail).invoicedetailname = n.getStringValue(); },
            "invoiceid": (o, n) => { (o as unknown as Invoicedetail).invoiceid = n.getObjectValue<Invoice>(createInvoiceFromDiscriminatorValue); },
            "invoiceispricelocked": (o, n) => { (o as unknown as Invoicedetail).invoiceispricelocked = n.getBooleanValue(); },
            "invoicestatecode": (o, n) => { (o as unknown as Invoicedetail).invoicestatecode = n.getNumberValue(); },
            "iscopied": (o, n) => { (o as unknown as Invoicedetail).iscopied = n.getBooleanValue(); },
            "ispriceoverridden": (o, n) => { (o as unknown as Invoicedetail).ispriceoverridden = n.getBooleanValue(); },
            "isproductoverridden": (o, n) => { (o as unknown as Invoicedetail).isproductoverridden = n.getBooleanValue(); },
            "lineitemnumber": (o, n) => { (o as unknown as Invoicedetail).lineitemnumber = n.getNumberValue(); },
            "manualdiscountamount": (o, n) => { (o as unknown as Invoicedetail).manualdiscountamount = n.getNumberValue(); },
            "manualdiscountamount_base": (o, n) => { (o as unknown as Invoicedetail).manualdiscountamount_base = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Invoicedetail).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Invoicedetail).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Invoicedetail).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreement": (o, n) => { (o as unknown as Invoicedetail).msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_agreementinvoiceproduct": (o, n) => { (o as unknown as Invoicedetail).msdyn_agreementinvoiceproduct = n.getObjectValue<Msdyn_agreementinvoiceproduct>(createMsdyn_agreementinvoiceproductFromDiscriminatorValue); },
            "msdyn_billingmethod": (o, n) => { (o as unknown as Invoicedetail).msdyn_billingmethod = n.getNumberValue(); },
            "msdyn_chargeableamount": (o, n) => { (o as unknown as Invoicedetail).msdyn_chargeableamount = n.getNumberValue(); },
            "msdyn_chargeableamount_base": (o, n) => { (o as unknown as Invoicedetail).msdyn_chargeableamount_base = n.getNumberValue(); },
            "msdyn_complimentaryamount": (o, n) => { (o as unknown as Invoicedetail).msdyn_complimentaryamount = n.getNumberValue(); },
            "msdyn_complimentaryamount_base": (o, n) => { (o as unknown as Invoicedetail).msdyn_complimentaryamount_base = n.getNumberValue(); },
            "msdyn_contractline": (o, n) => { (o as unknown as Invoicedetail).msdyn_contractline = n.getStringValue(); },
            "msdyn_contractlineamount": (o, n) => { (o as unknown as Invoicedetail).msdyn_contractlineamount = n.getNumberValue(); },
            "msdyn_contractlineamount_base": (o, n) => { (o as unknown as Invoicedetail).msdyn_contractlineamount_base = n.getNumberValue(); },
            "msdyn_currency": (o, n) => { (o as unknown as Invoicedetail).msdyn_currency = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "msdyn_invoicedetail_msdyn_invoicelinetransactio": (o, n) => { (o as unknown as Invoicedetail).msdyn_invoicedetail_msdyn_invoicelinetransactio = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_invoicedtilldate": (o, n) => { (o as unknown as Invoicedetail).msdyn_invoicedtilldate = n.getNumberValue(); },
            "msdyn_invoicedtilldate_base": (o, n) => { (o as unknown as Invoicedetail).msdyn_invoicedtilldate_base = n.getNumberValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Invoicedetail).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_linetype": (o, n) => { (o as unknown as Invoicedetail).msdyn_linetype = n.getNumberValue(); },
            "msdyn_nonchargeableamount": (o, n) => { (o as unknown as Invoicedetail).msdyn_nonchargeableamount = n.getNumberValue(); },
            "msdyn_nonchargeableamount_base": (o, n) => { (o as unknown as Invoicedetail).msdyn_nonchargeableamount_base = n.getNumberValue(); },
            "msdyn_OrderInvoicingProduct": (o, n) => { (o as unknown as Invoicedetail).msdyn_OrderInvoicingProduct = n.getObjectValue<Msdyn_orderinvoicingproduct>(createMsdyn_orderinvoicingproductFromDiscriminatorValue); },
            "msdyn_Project": (o, n) => { (o as unknown as Invoicedetail).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_workorderid": (o, n) => { (o as unknown as Invoicedetail).msdyn_workorderid = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_workorderproductid": (o, n) => { (o as unknown as Invoicedetail).msdyn_workorderproductid = n.getObjectValue<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "msdyn_workorderserviceid": (o, n) => { (o as unknown as Invoicedetail).msdyn_workorderserviceid = n.getObjectValue<Msdyn_workorderservice>(createMsdyn_workorderserviceFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Invoicedetail).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Invoicedetail).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Invoicedetail).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentbundleid": (o, n) => { (o as unknown as Invoicedetail).parentbundleid = n.getStringValue(); },
            "parentbundleid_invoicedetail": (o, n) => { (o as unknown as Invoicedetail).parentbundleid_invoicedetail = n.getObjectValue<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "parentbundleidref_invoicedetail": (o, n) => { (o as unknown as Invoicedetail).parentbundleidref_invoicedetail = n.getObjectValue<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "priceperunit": (o, n) => { (o as unknown as Invoicedetail).priceperunit = n.getNumberValue(); },
            "priceperunit_base": (o, n) => { (o as unknown as Invoicedetail).priceperunit_base = n.getNumberValue(); },
            "pricingerrorcode": (o, n) => { (o as unknown as Invoicedetail).pricingerrorcode = n.getNumberValue(); },
            "productassociationid": (o, n) => { (o as unknown as Invoicedetail).productassociationid = n.getStringValue(); },
            "productassociationid_productassociation": (o, n) => { (o as unknown as Invoicedetail).productassociationid_productassociation = n.getObjectValue<Productassociation>(createProductassociationFromDiscriminatorValue); },
            "productdescription": (o, n) => { (o as unknown as Invoicedetail).productdescription = n.getStringValue(); },
            "productid": (o, n) => { (o as unknown as Invoicedetail).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productname": (o, n) => { (o as unknown as Invoicedetail).productname = n.getStringValue(); },
            "productnumber": (o, n) => { (o as unknown as Invoicedetail).productnumber = n.getStringValue(); },
            "producttypecode": (o, n) => { (o as unknown as Invoicedetail).producttypecode = n.getNumberValue(); },
            "propertyconfigurationstatus": (o, n) => { (o as unknown as Invoicedetail).propertyconfigurationstatus = n.getNumberValue(); },
            "quantity": (o, n) => { (o as unknown as Invoicedetail).quantity = n.getNumberValue(); },
            "quantitybackordered": (o, n) => { (o as unknown as Invoicedetail).quantitybackordered = n.getNumberValue(); },
            "quantitycancelled": (o, n) => { (o as unknown as Invoicedetail).quantitycancelled = n.getNumberValue(); },
            "quantityshipped": (o, n) => { (o as unknown as Invoicedetail).quantityshipped = n.getNumberValue(); },
            "salesOrderDetailId": (o, n) => { (o as unknown as Invoicedetail).salesOrderDetailId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "salesrepid": (o, n) => { (o as unknown as Invoicedetail).salesrepid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "sequencenumber": (o, n) => { (o as unknown as Invoicedetail).sequencenumber = n.getNumberValue(); },
            "shippingtrackingnumber": (o, n) => { (o as unknown as Invoicedetail).shippingtrackingnumber = n.getStringValue(); },
            "shipto_city": (o, n) => { (o as unknown as Invoicedetail).shipto_city = n.getStringValue(); },
            "shipto_country": (o, n) => { (o as unknown as Invoicedetail).shipto_country = n.getStringValue(); },
            "shipto_fax": (o, n) => { (o as unknown as Invoicedetail).shipto_fax = n.getStringValue(); },
            "shipto_freighttermscode": (o, n) => { (o as unknown as Invoicedetail).shipto_freighttermscode = n.getNumberValue(); },
            "shipto_line1": (o, n) => { (o as unknown as Invoicedetail).shipto_line1 = n.getStringValue(); },
            "shipto_line2": (o, n) => { (o as unknown as Invoicedetail).shipto_line2 = n.getStringValue(); },
            "shipto_line3": (o, n) => { (o as unknown as Invoicedetail).shipto_line3 = n.getStringValue(); },
            "shipto_name": (o, n) => { (o as unknown as Invoicedetail).shipto_name = n.getStringValue(); },
            "shipto_postalcode": (o, n) => { (o as unknown as Invoicedetail).shipto_postalcode = n.getStringValue(); },
            "shipto_stateorprovince": (o, n) => { (o as unknown as Invoicedetail).shipto_stateorprovince = n.getStringValue(); },
            "shipto_telephone": (o, n) => { (o as unknown as Invoicedetail).shipto_telephone = n.getStringValue(); },
            "skippricecalculation": (o, n) => { (o as unknown as Invoicedetail).skippricecalculation = n.getNumberValue(); },
            "tax": (o, n) => { (o as unknown as Invoicedetail).tax = n.getNumberValue(); },
            "tax_base": (o, n) => { (o as unknown as Invoicedetail).tax_base = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Invoicedetail).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Invoicedetail).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uomid": (o, n) => { (o as unknown as Invoicedetail).uomid = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Invoicedetail).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Invoicedetail).versionnumber = n.getNumberValue(); },
            "volumediscountamount": (o, n) => { (o as unknown as Invoicedetail).volumediscountamount = n.getNumberValue(); },
            "volumediscountamount_base": (o, n) => { (o as unknown as Invoicedetail).volumediscountamount_base = n.getNumberValue(); },
            "willcall": (o, n) => { (o as unknown as Invoicedetail).willcall = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the invoiceDetail_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get invoiceDetail_AsyncOperations() {
        return this._invoiceDetail_AsyncOperations;
    };
    /**
     * Sets the invoiceDetail_AsyncOperations property value. 
     * @param value Value to set for the InvoiceDetail_AsyncOperations property.
     */
    public set invoiceDetail_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._invoiceDetail_AsyncOperations = value;
    };
    /**
     * Gets the invoiceDetail_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get invoiceDetail_BulkDeleteFailures() {
        return this._invoiceDetail_BulkDeleteFailures;
    };
    /**
     * Sets the invoiceDetail_BulkDeleteFailures property value. 
     * @param value Value to set for the InvoiceDetail_BulkDeleteFailures property.
     */
    public set invoiceDetail_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._invoiceDetail_BulkDeleteFailures = value;
    };
    /**
     * Gets the invoiceDetail_Dynamicpropertyinstance property value. 
     * @returns a dynamicpropertyinstance
     */
    public get invoiceDetail_Dynamicpropertyinstance() {
        return this._invoiceDetail_Dynamicpropertyinstance;
    };
    /**
     * Sets the invoiceDetail_Dynamicpropertyinstance property value. 
     * @param value Value to set for the InvoiceDetail_Dynamicpropertyinstance property.
     */
    public set invoiceDetail_Dynamicpropertyinstance(value: Dynamicpropertyinstance[] | undefined) {
        this._invoiceDetail_Dynamicpropertyinstance = value;
    };
    /**
     * Gets the invoicedetail_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get invoicedetail_MailboxTrackingFolders() {
        return this._invoicedetail_MailboxTrackingFolders;
    };
    /**
     * Sets the invoicedetail_MailboxTrackingFolders property value. 
     * @param value Value to set for the invoicedetail_MailboxTrackingFolders property.
     */
    public set invoicedetail_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._invoicedetail_MailboxTrackingFolders = value;
    };
    /**
     * Gets the invoicedetail_parent_invoicedetail property value. 
     * @returns a invoicedetail
     */
    public get invoicedetail_parent_invoicedetail() {
        return this._invoicedetail_parent_invoicedetail;
    };
    /**
     * Sets the invoicedetail_parent_invoicedetail property value. 
     * @param value Value to set for the invoicedetail_parent_invoicedetail property.
     */
    public set invoicedetail_parent_invoicedetail(value: Invoicedetail[] | undefined) {
        this._invoicedetail_parent_invoicedetail = value;
    };
    /**
     * Gets the invoicedetail_parentref_invoicedetail property value. 
     * @returns a invoicedetail
     */
    public get invoicedetail_parentref_invoicedetail() {
        return this._invoicedetail_parentref_invoicedetail;
    };
    /**
     * Sets the invoicedetail_parentref_invoicedetail property value. 
     * @param value Value to set for the invoicedetail_parentref_invoicedetail property.
     */
    public set invoicedetail_parentref_invoicedetail(value: Invoicedetail[] | undefined) {
        this._invoicedetail_parentref_invoicedetail = value;
    };
    /**
     * Gets the invoicedetail_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get invoicedetail_principalobjectattributeaccess() {
        return this._invoicedetail_principalobjectattributeaccess;
    };
    /**
     * Sets the invoicedetail_principalobjectattributeaccess property value. 
     * @param value Value to set for the invoicedetail_principalobjectattributeaccess property.
     */
    public set invoicedetail_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._invoicedetail_principalobjectattributeaccess = value;
    };
    /**
     * Gets the invoiceDetail_ProcessSessions property value. 
     * @returns a processsession
     */
    public get invoiceDetail_ProcessSessions() {
        return this._invoiceDetail_ProcessSessions;
    };
    /**
     * Sets the invoiceDetail_ProcessSessions property value. 
     * @param value Value to set for the InvoiceDetail_ProcessSessions property.
     */
    public set invoiceDetail_ProcessSessions(value: Processsession[] | undefined) {
        this._invoiceDetail_ProcessSessions = value;
    };
    /**
     * Gets the invoiceDetail_SyncErrors property value. 
     * @returns a syncerror
     */
    public get invoiceDetail_SyncErrors() {
        return this._invoiceDetail_SyncErrors;
    };
    /**
     * Sets the invoiceDetail_SyncErrors property value. 
     * @param value Value to set for the InvoiceDetail_SyncErrors property.
     */
    public set invoiceDetail_SyncErrors(value: Syncerror[] | undefined) {
        this._invoiceDetail_SyncErrors = value;
    };
    /**
     * Gets the invoicedetailid property value. 
     * @returns a string
     */
    public get invoicedetailid() {
        return this._invoicedetailid;
    };
    /**
     * Sets the invoicedetailid property value. 
     * @param value Value to set for the invoicedetailid property.
     */
    public set invoicedetailid(value: string | undefined) {
        this._invoicedetailid = value;
    };
    /**
     * Gets the invoicedetailname property value. 
     * @returns a string
     */
    public get invoicedetailname() {
        return this._invoicedetailname;
    };
    /**
     * Sets the invoicedetailname property value. 
     * @param value Value to set for the invoicedetailname property.
     */
    public set invoicedetailname(value: string | undefined) {
        this._invoicedetailname = value;
    };
    /**
     * Gets the invoiceid property value. 
     * @returns a invoice
     */
    public get invoiceid() {
        return this._invoiceid;
    };
    /**
     * Sets the invoiceid property value. 
     * @param value Value to set for the invoiceid property.
     */
    public set invoiceid(value: Invoice | undefined) {
        this._invoiceid = value;
    };
    /**
     * Gets the invoiceispricelocked property value. 
     * @returns a boolean
     */
    public get invoiceispricelocked() {
        return this._invoiceispricelocked;
    };
    /**
     * Sets the invoiceispricelocked property value. 
     * @param value Value to set for the invoiceispricelocked property.
     */
    public set invoiceispricelocked(value: boolean | undefined) {
        this._invoiceispricelocked = value;
    };
    /**
     * Gets the invoicestatecode property value. 
     * @returns a integer
     */
    public get invoicestatecode() {
        return this._invoicestatecode;
    };
    /**
     * Sets the invoicestatecode property value. 
     * @param value Value to set for the invoicestatecode property.
     */
    public set invoicestatecode(value: number | undefined) {
        this._invoicestatecode = value;
    };
    /**
     * Gets the iscopied property value. 
     * @returns a boolean
     */
    public get iscopied() {
        return this._iscopied;
    };
    /**
     * Sets the iscopied property value. 
     * @param value Value to set for the iscopied property.
     */
    public set iscopied(value: boolean | undefined) {
        this._iscopied = value;
    };
    /**
     * Gets the ispriceoverridden property value. 
     * @returns a boolean
     */
    public get ispriceoverridden() {
        return this._ispriceoverridden;
    };
    /**
     * Sets the ispriceoverridden property value. 
     * @param value Value to set for the ispriceoverridden property.
     */
    public set ispriceoverridden(value: boolean | undefined) {
        this._ispriceoverridden = value;
    };
    /**
     * Gets the isproductoverridden property value. 
     * @returns a boolean
     */
    public get isproductoverridden() {
        return this._isproductoverridden;
    };
    /**
     * Sets the isproductoverridden property value. 
     * @param value Value to set for the isproductoverridden property.
     */
    public set isproductoverridden(value: boolean | undefined) {
        this._isproductoverridden = value;
    };
    /**
     * Gets the lineitemnumber property value. 
     * @returns a integer
     */
    public get lineitemnumber() {
        return this._lineitemnumber;
    };
    /**
     * Sets the lineitemnumber property value. 
     * @param value Value to set for the lineitemnumber property.
     */
    public set lineitemnumber(value: number | undefined) {
        this._lineitemnumber = value;
    };
    /**
     * Gets the manualdiscountamount property value. 
     * @returns a int64
     */
    public get manualdiscountamount() {
        return this._manualdiscountamount;
    };
    /**
     * Sets the manualdiscountamount property value. 
     * @param value Value to set for the manualdiscountamount property.
     */
    public set manualdiscountamount(value: number | undefined) {
        this._manualdiscountamount = value;
    };
    /**
     * Gets the manualdiscountamount_base property value. 
     * @returns a int64
     */
    public get manualdiscountamount_base() {
        return this._manualdiscountamount_base;
    };
    /**
     * Sets the manualdiscountamount_base property value. 
     * @param value Value to set for the manualdiscountamount_base property.
     */
    public set manualdiscountamount_base(value: number | undefined) {
        this._manualdiscountamount_base = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_agreement property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_agreement() {
        return this._msdyn_agreement;
    };
    /**
     * Sets the msdyn_agreement property value. 
     * @param value Value to set for the msdyn_agreement property.
     */
    public set msdyn_agreement(value: Msdyn_agreement | undefined) {
        this._msdyn_agreement = value;
    };
    /**
     * Gets the msdyn_agreementinvoiceproduct property value. 
     * @returns a msdyn_agreementinvoiceproduct
     */
    public get msdyn_agreementinvoiceproduct() {
        return this._msdyn_agreementinvoiceproduct;
    };
    /**
     * Sets the msdyn_agreementinvoiceproduct property value. 
     * @param value Value to set for the msdyn_agreementinvoiceproduct property.
     */
    public set msdyn_agreementinvoiceproduct(value: Msdyn_agreementinvoiceproduct | undefined) {
        this._msdyn_agreementinvoiceproduct = value;
    };
    /**
     * Gets the msdyn_billingmethod property value. 
     * @returns a integer
     */
    public get msdyn_billingmethod() {
        return this._msdyn_billingmethod;
    };
    /**
     * Sets the msdyn_billingmethod property value. 
     * @param value Value to set for the msdyn_billingmethod property.
     */
    public set msdyn_billingmethod(value: number | undefined) {
        this._msdyn_billingmethod = value;
    };
    /**
     * Gets the msdyn_chargeableamount property value. 
     * @returns a int64
     */
    public get msdyn_chargeableamount() {
        return this._msdyn_chargeableamount;
    };
    /**
     * Sets the msdyn_chargeableamount property value. 
     * @param value Value to set for the msdyn_chargeableamount property.
     */
    public set msdyn_chargeableamount(value: number | undefined) {
        this._msdyn_chargeableamount = value;
    };
    /**
     * Gets the msdyn_chargeableamount_base property value. 
     * @returns a int64
     */
    public get msdyn_chargeableamount_base() {
        return this._msdyn_chargeableamount_base;
    };
    /**
     * Sets the msdyn_chargeableamount_base property value. 
     * @param value Value to set for the msdyn_chargeableamount_base property.
     */
    public set msdyn_chargeableamount_base(value: number | undefined) {
        this._msdyn_chargeableamount_base = value;
    };
    /**
     * Gets the msdyn_complimentaryamount property value. 
     * @returns a int64
     */
    public get msdyn_complimentaryamount() {
        return this._msdyn_complimentaryamount;
    };
    /**
     * Sets the msdyn_complimentaryamount property value. 
     * @param value Value to set for the msdyn_complimentaryamount property.
     */
    public set msdyn_complimentaryamount(value: number | undefined) {
        this._msdyn_complimentaryamount = value;
    };
    /**
     * Gets the msdyn_complimentaryamount_base property value. 
     * @returns a int64
     */
    public get msdyn_complimentaryamount_base() {
        return this._msdyn_complimentaryamount_base;
    };
    /**
     * Sets the msdyn_complimentaryamount_base property value. 
     * @param value Value to set for the msdyn_complimentaryamount_base property.
     */
    public set msdyn_complimentaryamount_base(value: number | undefined) {
        this._msdyn_complimentaryamount_base = value;
    };
    /**
     * Gets the msdyn_contractline property value. 
     * @returns a string
     */
    public get msdyn_contractline() {
        return this._msdyn_contractline;
    };
    /**
     * Sets the msdyn_contractline property value. 
     * @param value Value to set for the msdyn_contractline property.
     */
    public set msdyn_contractline(value: string | undefined) {
        this._msdyn_contractline = value;
    };
    /**
     * Gets the msdyn_contractlineamount property value. 
     * @returns a int64
     */
    public get msdyn_contractlineamount() {
        return this._msdyn_contractlineamount;
    };
    /**
     * Sets the msdyn_contractlineamount property value. 
     * @param value Value to set for the msdyn_contractlineamount property.
     */
    public set msdyn_contractlineamount(value: number | undefined) {
        this._msdyn_contractlineamount = value;
    };
    /**
     * Gets the msdyn_contractlineamount_base property value. 
     * @returns a int64
     */
    public get msdyn_contractlineamount_base() {
        return this._msdyn_contractlineamount_base;
    };
    /**
     * Sets the msdyn_contractlineamount_base property value. 
     * @param value Value to set for the msdyn_contractlineamount_base property.
     */
    public set msdyn_contractlineamount_base(value: number | undefined) {
        this._msdyn_contractlineamount_base = value;
    };
    /**
     * Gets the msdyn_currency property value. 
     * @returns a transactioncurrency
     */
    public get msdyn_currency() {
        return this._msdyn_currency;
    };
    /**
     * Sets the msdyn_currency property value. 
     * @param value Value to set for the msdyn_currency property.
     */
    public set msdyn_currency(value: Transactioncurrency | undefined) {
        this._msdyn_currency = value;
    };
    /**
     * Gets the msdyn_invoicedetail_msdyn_invoicelinetransactio property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_invoicedetail_msdyn_invoicelinetransactio() {
        return this._msdyn_invoicedetail_msdyn_invoicelinetransactio;
    };
    /**
     * Sets the msdyn_invoicedetail_msdyn_invoicelinetransactio property value. 
     * @param value Value to set for the msdyn_invoicedetail_msdyn_invoicelinetransactio property.
     */
    public set msdyn_invoicedetail_msdyn_invoicelinetransactio(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_invoicedetail_msdyn_invoicelinetransactio = value;
    };
    /**
     * Gets the msdyn_invoicedtilldate property value. 
     * @returns a int64
     */
    public get msdyn_invoicedtilldate() {
        return this._msdyn_invoicedtilldate;
    };
    /**
     * Sets the msdyn_invoicedtilldate property value. 
     * @param value Value to set for the msdyn_invoicedtilldate property.
     */
    public set msdyn_invoicedtilldate(value: number | undefined) {
        this._msdyn_invoicedtilldate = value;
    };
    /**
     * Gets the msdyn_invoicedtilldate_base property value. 
     * @returns a int64
     */
    public get msdyn_invoicedtilldate_base() {
        return this._msdyn_invoicedtilldate_base;
    };
    /**
     * Sets the msdyn_invoicedtilldate_base property value. 
     * @param value Value to set for the msdyn_invoicedtilldate_base property.
     */
    public set msdyn_invoicedtilldate_base(value: number | undefined) {
        this._msdyn_invoicedtilldate_base = value;
    };
    /**
     * Gets the msdyn_lineorder property value. 
     * @returns a integer
     */
    public get msdyn_lineorder() {
        return this._msdyn_lineorder;
    };
    /**
     * Sets the msdyn_lineorder property value. 
     * @param value Value to set for the msdyn_lineorder property.
     */
    public set msdyn_lineorder(value: number | undefined) {
        this._msdyn_lineorder = value;
    };
    /**
     * Gets the msdyn_linetype property value. 
     * @returns a integer
     */
    public get msdyn_linetype() {
        return this._msdyn_linetype;
    };
    /**
     * Sets the msdyn_linetype property value. 
     * @param value Value to set for the msdyn_linetype property.
     */
    public set msdyn_linetype(value: number | undefined) {
        this._msdyn_linetype = value;
    };
    /**
     * Gets the msdyn_nonchargeableamount property value. 
     * @returns a int64
     */
    public get msdyn_nonchargeableamount() {
        return this._msdyn_nonchargeableamount;
    };
    /**
     * Sets the msdyn_nonchargeableamount property value. 
     * @param value Value to set for the msdyn_nonchargeableamount property.
     */
    public set msdyn_nonchargeableamount(value: number | undefined) {
        this._msdyn_nonchargeableamount = value;
    };
    /**
     * Gets the msdyn_nonchargeableamount_base property value. 
     * @returns a int64
     */
    public get msdyn_nonchargeableamount_base() {
        return this._msdyn_nonchargeableamount_base;
    };
    /**
     * Sets the msdyn_nonchargeableamount_base property value. 
     * @param value Value to set for the msdyn_nonchargeableamount_base property.
     */
    public set msdyn_nonchargeableamount_base(value: number | undefined) {
        this._msdyn_nonchargeableamount_base = value;
    };
    /**
     * Gets the msdyn_OrderInvoicingProduct property value. 
     * @returns a msdyn_orderinvoicingproduct
     */
    public get msdyn_OrderInvoicingProduct() {
        return this._msdyn_OrderInvoicingProduct;
    };
    /**
     * Sets the msdyn_OrderInvoicingProduct property value. 
     * @param value Value to set for the msdyn_OrderInvoicingProduct property.
     */
    public set msdyn_OrderInvoicingProduct(value: Msdyn_orderinvoicingproduct | undefined) {
        this._msdyn_OrderInvoicingProduct = value;
    };
    /**
     * Gets the msdyn_Project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_Project() {
        return this._msdyn_Project;
    };
    /**
     * Sets the msdyn_Project property value. 
     * @param value Value to set for the msdyn_Project property.
     */
    public set msdyn_Project(value: Msdyn_project | undefined) {
        this._msdyn_Project = value;
    };
    /**
     * Gets the msdyn_workorderid property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_workorderid() {
        return this._msdyn_workorderid;
    };
    /**
     * Sets the msdyn_workorderid property value. 
     * @param value Value to set for the msdyn_workorderid property.
     */
    public set msdyn_workorderid(value: Msdyn_workorder | undefined) {
        this._msdyn_workorderid = value;
    };
    /**
     * Gets the msdyn_workorderproductid property value. 
     * @returns a msdyn_workorderproduct
     */
    public get msdyn_workorderproductid() {
        return this._msdyn_workorderproductid;
    };
    /**
     * Sets the msdyn_workorderproductid property value. 
     * @param value Value to set for the msdyn_workorderproductid property.
     */
    public set msdyn_workorderproductid(value: Msdyn_workorderproduct | undefined) {
        this._msdyn_workorderproductid = value;
    };
    /**
     * Gets the msdyn_workorderserviceid property value. 
     * @returns a msdyn_workorderservice
     */
    public get msdyn_workorderserviceid() {
        return this._msdyn_workorderserviceid;
    };
    /**
     * Sets the msdyn_workorderserviceid property value. 
     * @param value Value to set for the msdyn_workorderserviceid property.
     */
    public set msdyn_workorderserviceid(value: Msdyn_workorderservice | undefined) {
        this._msdyn_workorderserviceid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the parentbundleid property value. 
     * @returns a string
     */
    public get parentbundleid() {
        return this._parentbundleid;
    };
    /**
     * Sets the parentbundleid property value. 
     * @param value Value to set for the parentbundleid property.
     */
    public set parentbundleid(value: string | undefined) {
        this._parentbundleid = value;
    };
    /**
     * Gets the parentbundleid_invoicedetail property value. 
     * @returns a invoicedetail
     */
    public get parentbundleid_invoicedetail() {
        return this._parentbundleid_invoicedetail;
    };
    /**
     * Sets the parentbundleid_invoicedetail property value. 
     * @param value Value to set for the parentbundleid_invoicedetail property.
     */
    public set parentbundleid_invoicedetail(value: Invoicedetail | undefined) {
        this._parentbundleid_invoicedetail = value;
    };
    /**
     * Gets the parentbundleidref_invoicedetail property value. 
     * @returns a invoicedetail
     */
    public get parentbundleidref_invoicedetail() {
        return this._parentbundleidref_invoicedetail;
    };
    /**
     * Sets the parentbundleidref_invoicedetail property value. 
     * @param value Value to set for the parentbundleidref_invoicedetail property.
     */
    public set parentbundleidref_invoicedetail(value: Invoicedetail | undefined) {
        this._parentbundleidref_invoicedetail = value;
    };
    /**
     * Gets the priceperunit property value. 
     * @returns a int64
     */
    public get priceperunit() {
        return this._priceperunit;
    };
    /**
     * Sets the priceperunit property value. 
     * @param value Value to set for the priceperunit property.
     */
    public set priceperunit(value: number | undefined) {
        this._priceperunit = value;
    };
    /**
     * Gets the priceperunit_base property value. 
     * @returns a int64
     */
    public get priceperunit_base() {
        return this._priceperunit_base;
    };
    /**
     * Sets the priceperunit_base property value. 
     * @param value Value to set for the priceperunit_base property.
     */
    public set priceperunit_base(value: number | undefined) {
        this._priceperunit_base = value;
    };
    /**
     * Gets the pricingerrorcode property value. 
     * @returns a integer
     */
    public get pricingerrorcode() {
        return this._pricingerrorcode;
    };
    /**
     * Sets the pricingerrorcode property value. 
     * @param value Value to set for the pricingerrorcode property.
     */
    public set pricingerrorcode(value: number | undefined) {
        this._pricingerrorcode = value;
    };
    /**
     * Gets the productassociationid property value. 
     * @returns a string
     */
    public get productassociationid() {
        return this._productassociationid;
    };
    /**
     * Sets the productassociationid property value. 
     * @param value Value to set for the productassociationid property.
     */
    public set productassociationid(value: string | undefined) {
        this._productassociationid = value;
    };
    /**
     * Gets the productassociationid_productassociation property value. 
     * @returns a productassociation
     */
    public get productassociationid_productassociation() {
        return this._productassociationid_productassociation;
    };
    /**
     * Sets the productassociationid_productassociation property value. 
     * @param value Value to set for the productassociationid_productassociation property.
     */
    public set productassociationid_productassociation(value: Productassociation | undefined) {
        this._productassociationid_productassociation = value;
    };
    /**
     * Gets the productdescription property value. 
     * @returns a string
     */
    public get productdescription() {
        return this._productdescription;
    };
    /**
     * Sets the productdescription property value. 
     * @param value Value to set for the productdescription property.
     */
    public set productdescription(value: string | undefined) {
        this._productdescription = value;
    };
    /**
     * Gets the productid property value. 
     * @returns a product
     */
    public get productid() {
        return this._productid;
    };
    /**
     * Sets the productid property value. 
     * @param value Value to set for the productid property.
     */
    public set productid(value: Product | undefined) {
        this._productid = value;
    };
    /**
     * Gets the productname property value. 
     * @returns a string
     */
    public get productname() {
        return this._productname;
    };
    /**
     * Sets the productname property value. 
     * @param value Value to set for the productname property.
     */
    public set productname(value: string | undefined) {
        this._productname = value;
    };
    /**
     * Gets the productnumber property value. 
     * @returns a string
     */
    public get productnumber() {
        return this._productnumber;
    };
    /**
     * Sets the productnumber property value. 
     * @param value Value to set for the productnumber property.
     */
    public set productnumber(value: string | undefined) {
        this._productnumber = value;
    };
    /**
     * Gets the producttypecode property value. 
     * @returns a integer
     */
    public get producttypecode() {
        return this._producttypecode;
    };
    /**
     * Sets the producttypecode property value. 
     * @param value Value to set for the producttypecode property.
     */
    public set producttypecode(value: number | undefined) {
        this._producttypecode = value;
    };
    /**
     * Gets the propertyconfigurationstatus property value. 
     * @returns a integer
     */
    public get propertyconfigurationstatus() {
        return this._propertyconfigurationstatus;
    };
    /**
     * Sets the propertyconfigurationstatus property value. 
     * @param value Value to set for the propertyconfigurationstatus property.
     */
    public set propertyconfigurationstatus(value: number | undefined) {
        this._propertyconfigurationstatus = value;
    };
    /**
     * Gets the quantity property value. 
     * @returns a int64
     */
    public get quantity() {
        return this._quantity;
    };
    /**
     * Sets the quantity property value. 
     * @param value Value to set for the quantity property.
     */
    public set quantity(value: number | undefined) {
        this._quantity = value;
    };
    /**
     * Gets the quantitybackordered property value. 
     * @returns a int64
     */
    public get quantitybackordered() {
        return this._quantitybackordered;
    };
    /**
     * Sets the quantitybackordered property value. 
     * @param value Value to set for the quantitybackordered property.
     */
    public set quantitybackordered(value: number | undefined) {
        this._quantitybackordered = value;
    };
    /**
     * Gets the quantitycancelled property value. 
     * @returns a int64
     */
    public get quantitycancelled() {
        return this._quantitycancelled;
    };
    /**
     * Sets the quantitycancelled property value. 
     * @param value Value to set for the quantitycancelled property.
     */
    public set quantitycancelled(value: number | undefined) {
        this._quantitycancelled = value;
    };
    /**
     * Gets the quantityshipped property value. 
     * @returns a int64
     */
    public get quantityshipped() {
        return this._quantityshipped;
    };
    /**
     * Sets the quantityshipped property value. 
     * @param value Value to set for the quantityshipped property.
     */
    public set quantityshipped(value: number | undefined) {
        this._quantityshipped = value;
    };
    /**
     * Gets the salesOrderDetailId property value. 
     * @returns a salesorderdetail
     */
    public get salesOrderDetailId() {
        return this._salesOrderDetailId;
    };
    /**
     * Sets the salesOrderDetailId property value. 
     * @param value Value to set for the SalesOrderDetailId property.
     */
    public set salesOrderDetailId(value: Salesorderdetail | undefined) {
        this._salesOrderDetailId = value;
    };
    /**
     * Gets the salesrepid property value. 
     * @returns a systemuser
     */
    public get salesrepid() {
        return this._salesrepid;
    };
    /**
     * Sets the salesrepid property value. 
     * @param value Value to set for the salesrepid property.
     */
    public set salesrepid(value: Systemuser | undefined) {
        this._salesrepid = value;
    };
    /**
     * Gets the sequencenumber property value. 
     * @returns a integer
     */
    public get sequencenumber() {
        return this._sequencenumber;
    };
    /**
     * Sets the sequencenumber property value. 
     * @param value Value to set for the sequencenumber property.
     */
    public set sequencenumber(value: number | undefined) {
        this._sequencenumber = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_invoiceid_value", this._invoiceid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_agreement_value", this._msdyn_agreement_value);
        writer.writeStringValue("_msdyn_agreementinvoiceproduct_value", this._msdyn_agreementinvoiceproduct_value);
        writer.writeStringValue("_msdyn_currency_value", this._msdyn_currency_value);
        writer.writeStringValue("_msdyn_orderinvoicingproduct_value", this._msdyn_orderinvoicingproduct_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_workorderid_value", this._msdyn_workorderid_value);
        writer.writeStringValue("_msdyn_workorderproductid_value", this._msdyn_workorderproductid_value);
        writer.writeStringValue("_msdyn_workorderserviceid_value", this._msdyn_workorderserviceid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentbundleidref_value", this._parentbundleidref_value);
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_salesorderdetailid_value", this._salesorderdetailid_value);
        writer.writeStringValue("_salesrepid_value", this._salesrepid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_uomid_value", this._uomid_value);
        writer.writeDateValue("actualdeliveryon", this.actualdeliveryon);
        writer.writeNumberValue("baseamount", this.baseamount);
        writer.writeNumberValue("baseamount_base", this.baseamount_base);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("extendedamount", this.extendedamount);
        writer.writeNumberValue("extendedamount_base", this.extendedamount_base);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeCollectionOfObjectValues<Asyncoperation>("invoiceDetail_AsyncOperations", this.invoiceDetail_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("invoiceDetail_BulkDeleteFailures", this.invoiceDetail_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Dynamicpropertyinstance>("invoiceDetail_Dynamicpropertyinstance", this.invoiceDetail_Dynamicpropertyinstance);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("invoicedetail_MailboxTrackingFolders", this.invoicedetail_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Invoicedetail>("invoicedetail_parent_invoicedetail", this.invoicedetail_parent_invoicedetail);
        writer.writeCollectionOfObjectValues<Invoicedetail>("invoicedetail_parentref_invoicedetail", this.invoicedetail_parentref_invoicedetail);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("invoicedetail_principalobjectattributeaccess", this.invoicedetail_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("invoiceDetail_ProcessSessions", this.invoiceDetail_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("invoiceDetail_SyncErrors", this.invoiceDetail_SyncErrors);
        writer.writeStringValue("invoicedetailid", this.invoicedetailid);
        writer.writeStringValue("invoicedetailname", this.invoicedetailname);
        writer.writeObjectValue<Invoice>("invoiceid", this.invoiceid);
        writer.writeBooleanValue("invoiceispricelocked", this.invoiceispricelocked);
        writer.writeNumberValue("invoicestatecode", this.invoicestatecode);
        writer.writeBooleanValue("iscopied", this.iscopied);
        writer.writeBooleanValue("ispriceoverridden", this.ispriceoverridden);
        writer.writeBooleanValue("isproductoverridden", this.isproductoverridden);
        writer.writeNumberValue("lineitemnumber", this.lineitemnumber);
        writer.writeNumberValue("manualdiscountamount", this.manualdiscountamount);
        writer.writeNumberValue("manualdiscountamount_base", this.manualdiscountamount_base);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_agreement>("msdyn_agreement", this.msdyn_agreement);
        writer.writeObjectValue<Msdyn_agreementinvoiceproduct>("msdyn_agreementinvoiceproduct", this.msdyn_agreementinvoiceproduct);
        writer.writeNumberValue("msdyn_billingmethod", this.msdyn_billingmethod);
        writer.writeNumberValue("msdyn_chargeableamount", this.msdyn_chargeableamount);
        writer.writeNumberValue("msdyn_chargeableamount_base", this.msdyn_chargeableamount_base);
        writer.writeNumberValue("msdyn_complimentaryamount", this.msdyn_complimentaryamount);
        writer.writeNumberValue("msdyn_complimentaryamount_base", this.msdyn_complimentaryamount_base);
        writer.writeStringValue("msdyn_contractline", this.msdyn_contractline);
        writer.writeNumberValue("msdyn_contractlineamount", this.msdyn_contractlineamount);
        writer.writeNumberValue("msdyn_contractlineamount_base", this.msdyn_contractlineamount_base);
        writer.writeObjectValue<Transactioncurrency>("msdyn_currency", this.msdyn_currency);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_invoicedetail_msdyn_invoicelinetransactio", this.msdyn_invoicedetail_msdyn_invoicelinetransactio);
        writer.writeNumberValue("msdyn_invoicedtilldate", this.msdyn_invoicedtilldate);
        writer.writeNumberValue("msdyn_invoicedtilldate_base", this.msdyn_invoicedtilldate_base);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeNumberValue("msdyn_linetype", this.msdyn_linetype);
        writer.writeNumberValue("msdyn_nonchargeableamount", this.msdyn_nonchargeableamount);
        writer.writeNumberValue("msdyn_nonchargeableamount_base", this.msdyn_nonchargeableamount_base);
        writer.writeObjectValue<Msdyn_orderinvoicingproduct>("msdyn_OrderInvoicingProduct", this.msdyn_OrderInvoicingProduct);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_workorderid", this.msdyn_workorderid);
        writer.writeObjectValue<Msdyn_workorderproduct>("msdyn_workorderproductid", this.msdyn_workorderproductid);
        writer.writeObjectValue<Msdyn_workorderservice>("msdyn_workorderserviceid", this.msdyn_workorderserviceid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("parentbundleid", this.parentbundleid);
        writer.writeObjectValue<Invoicedetail>("parentbundleid_invoicedetail", this.parentbundleid_invoicedetail);
        writer.writeObjectValue<Invoicedetail>("parentbundleidref_invoicedetail", this.parentbundleidref_invoicedetail);
        writer.writeNumberValue("priceperunit", this.priceperunit);
        writer.writeNumberValue("priceperunit_base", this.priceperunit_base);
        writer.writeNumberValue("pricingerrorcode", this.pricingerrorcode);
        writer.writeStringValue("productassociationid", this.productassociationid);
        writer.writeObjectValue<Productassociation>("productassociationid_productassociation", this.productassociationid_productassociation);
        writer.writeStringValue("productdescription", this.productdescription);
        writer.writeObjectValue<Product>("productid", this.productid);
        writer.writeStringValue("productname", this.productname);
        writer.writeStringValue("productnumber", this.productnumber);
        writer.writeNumberValue("producttypecode", this.producttypecode);
        writer.writeNumberValue("propertyconfigurationstatus", this.propertyconfigurationstatus);
        writer.writeNumberValue("quantity", this.quantity);
        writer.writeNumberValue("quantitybackordered", this.quantitybackordered);
        writer.writeNumberValue("quantitycancelled", this.quantitycancelled);
        writer.writeNumberValue("quantityshipped", this.quantityshipped);
        writer.writeObjectValue<Salesorderdetail>("salesOrderDetailId", this.salesOrderDetailId);
        writer.writeObjectValue<Systemuser>("salesrepid", this.salesrepid);
        writer.writeNumberValue("sequencenumber", this.sequencenumber);
        writer.writeStringValue("shippingtrackingnumber", this.shippingtrackingnumber);
        writer.writeStringValue("shipto_city", this.shipto_city);
        writer.writeStringValue("shipto_country", this.shipto_country);
        writer.writeStringValue("shipto_fax", this.shipto_fax);
        writer.writeNumberValue("shipto_freighttermscode", this.shipto_freighttermscode);
        writer.writeStringValue("shipto_line1", this.shipto_line1);
        writer.writeStringValue("shipto_line2", this.shipto_line2);
        writer.writeStringValue("shipto_line3", this.shipto_line3);
        writer.writeStringValue("shipto_name", this.shipto_name);
        writer.writeStringValue("shipto_postalcode", this.shipto_postalcode);
        writer.writeStringValue("shipto_stateorprovince", this.shipto_stateorprovince);
        writer.writeStringValue("shipto_telephone", this.shipto_telephone);
        writer.writeNumberValue("skippricecalculation", this.skippricecalculation);
        writer.writeNumberValue("tax", this.tax);
        writer.writeNumberValue("tax_base", this.tax_base);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeObjectValue<Uom>("uomid", this.uomid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeNumberValue("volumediscountamount", this.volumediscountamount);
        writer.writeNumberValue("volumediscountamount_base", this.volumediscountamount_base);
        writer.writeBooleanValue("willcall", this.willcall);
    };
    /**
     * Gets the shippingtrackingnumber property value. 
     * @returns a string
     */
    public get shippingtrackingnumber() {
        return this._shippingtrackingnumber;
    };
    /**
     * Sets the shippingtrackingnumber property value. 
     * @param value Value to set for the shippingtrackingnumber property.
     */
    public set shippingtrackingnumber(value: string | undefined) {
        this._shippingtrackingnumber = value;
    };
    /**
     * Gets the shipto_city property value. 
     * @returns a string
     */
    public get shipto_city() {
        return this._shipto_city;
    };
    /**
     * Sets the shipto_city property value. 
     * @param value Value to set for the shipto_city property.
     */
    public set shipto_city(value: string | undefined) {
        this._shipto_city = value;
    };
    /**
     * Gets the shipto_country property value. 
     * @returns a string
     */
    public get shipto_country() {
        return this._shipto_country;
    };
    /**
     * Sets the shipto_country property value. 
     * @param value Value to set for the shipto_country property.
     */
    public set shipto_country(value: string | undefined) {
        this._shipto_country = value;
    };
    /**
     * Gets the shipto_fax property value. 
     * @returns a string
     */
    public get shipto_fax() {
        return this._shipto_fax;
    };
    /**
     * Sets the shipto_fax property value. 
     * @param value Value to set for the shipto_fax property.
     */
    public set shipto_fax(value: string | undefined) {
        this._shipto_fax = value;
    };
    /**
     * Gets the shipto_freighttermscode property value. 
     * @returns a integer
     */
    public get shipto_freighttermscode() {
        return this._shipto_freighttermscode;
    };
    /**
     * Sets the shipto_freighttermscode property value. 
     * @param value Value to set for the shipto_freighttermscode property.
     */
    public set shipto_freighttermscode(value: number | undefined) {
        this._shipto_freighttermscode = value;
    };
    /**
     * Gets the shipto_line1 property value. 
     * @returns a string
     */
    public get shipto_line1() {
        return this._shipto_line1;
    };
    /**
     * Sets the shipto_line1 property value. 
     * @param value Value to set for the shipto_line1 property.
     */
    public set shipto_line1(value: string | undefined) {
        this._shipto_line1 = value;
    };
    /**
     * Gets the shipto_line2 property value. 
     * @returns a string
     */
    public get shipto_line2() {
        return this._shipto_line2;
    };
    /**
     * Sets the shipto_line2 property value. 
     * @param value Value to set for the shipto_line2 property.
     */
    public set shipto_line2(value: string | undefined) {
        this._shipto_line2 = value;
    };
    /**
     * Gets the shipto_line3 property value. 
     * @returns a string
     */
    public get shipto_line3() {
        return this._shipto_line3;
    };
    /**
     * Sets the shipto_line3 property value. 
     * @param value Value to set for the shipto_line3 property.
     */
    public set shipto_line3(value: string | undefined) {
        this._shipto_line3 = value;
    };
    /**
     * Gets the shipto_name property value. 
     * @returns a string
     */
    public get shipto_name() {
        return this._shipto_name;
    };
    /**
     * Sets the shipto_name property value. 
     * @param value Value to set for the shipto_name property.
     */
    public set shipto_name(value: string | undefined) {
        this._shipto_name = value;
    };
    /**
     * Gets the shipto_postalcode property value. 
     * @returns a string
     */
    public get shipto_postalcode() {
        return this._shipto_postalcode;
    };
    /**
     * Sets the shipto_postalcode property value. 
     * @param value Value to set for the shipto_postalcode property.
     */
    public set shipto_postalcode(value: string | undefined) {
        this._shipto_postalcode = value;
    };
    /**
     * Gets the shipto_stateorprovince property value. 
     * @returns a string
     */
    public get shipto_stateorprovince() {
        return this._shipto_stateorprovince;
    };
    /**
     * Sets the shipto_stateorprovince property value. 
     * @param value Value to set for the shipto_stateorprovince property.
     */
    public set shipto_stateorprovince(value: string | undefined) {
        this._shipto_stateorprovince = value;
    };
    /**
     * Gets the shipto_telephone property value. 
     * @returns a string
     */
    public get shipto_telephone() {
        return this._shipto_telephone;
    };
    /**
     * Sets the shipto_telephone property value. 
     * @param value Value to set for the shipto_telephone property.
     */
    public set shipto_telephone(value: string | undefined) {
        this._shipto_telephone = value;
    };
    /**
     * Gets the skippricecalculation property value. 
     * @returns a integer
     */
    public get skippricecalculation() {
        return this._skippricecalculation;
    };
    /**
     * Sets the skippricecalculation property value. 
     * @param value Value to set for the skippricecalculation property.
     */
    public set skippricecalculation(value: number | undefined) {
        this._skippricecalculation = value;
    };
    /**
     * Gets the tax property value. 
     * @returns a int64
     */
    public get tax() {
        return this._tax;
    };
    /**
     * Sets the tax property value. 
     * @param value Value to set for the tax property.
     */
    public set tax(value: number | undefined) {
        this._tax = value;
    };
    /**
     * Gets the tax_base property value. 
     * @returns a int64
     */
    public get tax_base() {
        return this._tax_base;
    };
    /**
     * Sets the tax_base property value. 
     * @param value Value to set for the tax_base property.
     */
    public set tax_base(value: number | undefined) {
        this._tax_base = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the uomid property value. 
     * @returns a uom
     */
    public get uomid() {
        return this._uomid;
    };
    /**
     * Sets the uomid property value. 
     * @param value Value to set for the uomid property.
     */
    public set uomid(value: Uom | undefined) {
        this._uomid = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
    /**
     * Gets the volumediscountamount property value. 
     * @returns a int64
     */
    public get volumediscountamount() {
        return this._volumediscountamount;
    };
    /**
     * Sets the volumediscountamount property value. 
     * @param value Value to set for the volumediscountamount property.
     */
    public set volumediscountamount(value: number | undefined) {
        this._volumediscountamount = value;
    };
    /**
     * Gets the volumediscountamount_base property value. 
     * @returns a int64
     */
    public get volumediscountamount_base() {
        return this._volumediscountamount_base;
    };
    /**
     * Sets the volumediscountamount_base property value. 
     * @param value Value to set for the volumediscountamount_base property.
     */
    public set volumediscountamount_base(value: number | undefined) {
        this._volumediscountamount_base = value;
    };
    /**
     * Gets the willcall property value. 
     * @returns a boolean
     */
    public get willcall() {
        return this._willcall;
    };
    /**
     * Sets the willcall property value. 
     * @param value Value to set for the willcall property.
     */
    public set willcall(value: boolean | undefined) {
        this._willcall = value;
    };
}
