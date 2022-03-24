import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyinstanceFromDiscriminatorValue} from './createDynamicpropertyinstanceFromDiscriminatorValue';
import {createInvoicedetailFromDiscriminatorValue} from './createInvoicedetailFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue} from './createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue';
import {createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue} from './createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue';
import {createMsdyn_contractperformanceFromDiscriminatorValue} from './createMsdyn_contractperformanceFromDiscriminatorValue';
import {createMsdyn_factFromDiscriminatorValue} from './createMsdyn_factFromDiscriminatorValue';
import {createMsdyn_invoicefrequencyFromDiscriminatorValue} from './createMsdyn_invoicefrequencyFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_orderlineresourcecategoryFromDiscriminatorValue} from './createMsdyn_orderlineresourcecategoryFromDiscriminatorValue';
import {createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue} from './createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionclassificationFromDiscriminatorValue} from './createMsdyn_orderlinetransactionclassificationFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionFromDiscriminatorValue} from './createMsdyn_orderlinetransactionFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductassociationFromDiscriminatorValue} from './createProductassociationFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicpropertyinstance, Invoicedetail, Mailboxtrackingfolder, Msdyn_actual, Msdyn_agreement, Msdyn_contractlineinvoiceschedule, Msdyn_contractlinescheduleofvalue, Msdyn_contractperformance, Msdyn_fact, Msdyn_invoicefrequency, Msdyn_invoicelinetransaction, Msdyn_journalline, Msdyn_orderlineresourcecategory, Msdyn_orderlinetransaction, Msdyn_orderlinetransactioncategory, Msdyn_orderlinetransactionclassification, Msdyn_project, Principalobjectattributeaccess, Processsession, Product, Productassociation, Quotedetail, Salesorder, Syncerror, Systemuser, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Salesorderdetail extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_invoicefrequency_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentbundleidref_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __quotedetailid_value?: string | undefined;
    private __salesorderid_value?: string | undefined;
    private __salesrepid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __uomid_value?: string | undefined;
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
    private _msdyn_billingmethod?: number | undefined;
    private _msdyn_billingstartdate?: Date | undefined;
    private _msdyn_billingstatus?: number | undefined;
    private _msdyn_budgetamount?: number | undefined;
    private _msdyn_budgetamount_base?: number | undefined;
    private _msdyn_costamount?: number | undefined;
    private _msdyn_costamount_base?: number | undefined;
    private _msdyn_costpriceperunit?: number | undefined;
    private _msdyn_costpriceperunit_base?: number | undefined;
    private _msdyn_includeexpense?: boolean | undefined;
    private _msdyn_includefee?: boolean | undefined;
    private _msdyn_includematerial?: boolean | undefined;
    private _msdyn_includetime?: boolean | undefined;
    private _msdyn_invoicefrequency?: Msdyn_invoicefrequency | undefined;
    private _msdyn_linetype?: number | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_quoteline?: string | undefined;
    private _msdyn_salesorderdetail_invoicedetail?: Invoicedetail[] | undefined;
    private _msdyn_salesorderdetail_msdyn_actual?: Msdyn_actual[] | undefined;
    private _msdyn_salesorderdetail_msdyn_contractlineinvoic?: Msdyn_contractlineinvoiceschedule[] | undefined;
    private _msdyn_salesorderdetail_msdyn_contractlineschedu?: Msdyn_contractlinescheduleofvalue[] | undefined;
    private _msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId?: Msdyn_contractperformance[] | undefined;
    private _msdyn_salesorderdetail_msdyn_fact?: Msdyn_fact[] | undefined;
    private _msdyn_salesorderdetail_msdyn_invoicelinetransac?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_salesorderdetail_msdyn_journalline?: Msdyn_journalline[] | undefined;
    private _msdyn_salesorderdetail_msdyn_orderlineresourcec?: Msdyn_orderlineresourcecategory[] | undefined;
    private _msdyn_salesorderdetail_msdyn_orderlinetransacti?: Msdyn_orderlinetransaction[] | undefined;
    private _msdyn_salesorderdetail_msdyn_orderlinetranscat?: Msdyn_orderlinetransactioncategory[] | undefined;
    private _msdyn_salesorderdetail_msdyn_orderlinetransclas?: Msdyn_orderlinetransactionclassification[] | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentbundleid?: string | undefined;
    private _parentbundleid_salesorderdetail?: Salesorderdetail | undefined;
    private _parentbundleidref_salesorderdetail?: Salesorderdetail | undefined;
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
    private _quoteDetailId?: Quotedetail | undefined;
    private _requestdeliveryby?: Date | undefined;
    private _salesOrderDetail_AsyncOperations?: Asyncoperation[] | undefined;
    private _salesOrderDetail_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _salesOrderDetail_Dynamicpropertyinstance?: Dynamicpropertyinstance[] | undefined;
    private _salesorderdetail_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _salesorderdetail_parent_salesorderdetail?: Salesorderdetail[] | undefined;
    private _salesorderdetail_parentref_salesorderdetail?: Salesorderdetail[] | undefined;
    private _salesorderdetail_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _salesOrderDetail_ProcessSessions?: Processsession[] | undefined;
    private _salesOrderDetail_SyncErrors?: Syncerror[] | undefined;
    private _salesorderdetailid?: string | undefined;
    private _salesorderdetailname?: string | undefined;
    private _salesorderid?: Salesorder | undefined;
    private _salesorderispricelocked?: boolean | undefined;
    private _salesorderstatecode?: number | undefined;
    private _salesrepid?: Systemuser | undefined;
    private _sequencenumber?: number | undefined;
    private _shipto_addressid?: string | undefined;
    private _shipto_city?: string | undefined;
    private _shipto_contactname?: string | undefined;
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
     * Gets the _msdyn_invoicefrequency_value property value. 
     * @returns a string
     */
    public get _msdyn_invoicefrequency_value() {
        return this.__msdyn_invoicefrequency_value;
    };
    /**
     * Sets the _msdyn_invoicefrequency_value property value. 
     * @param value Value to set for the _msdyn_invoicefrequency_value property.
     */
    public set _msdyn_invoicefrequency_value(value: string | undefined) {
        this.__msdyn_invoicefrequency_value = value;
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
     * Gets the _quotedetailid_value property value. 
     * @returns a string
     */
    public get _quotedetailid_value() {
        return this.__quotedetailid_value;
    };
    /**
     * Sets the _quotedetailid_value property value. 
     * @param value Value to set for the _quotedetailid_value property.
     */
    public set _quotedetailid_value(value: string | undefined) {
        this.__quotedetailid_value = value;
    };
    /**
     * Gets the _salesorderid_value property value. 
     * @returns a string
     */
    public get _salesorderid_value() {
        return this.__salesorderid_value;
    };
    /**
     * Sets the _salesorderid_value property value. 
     * @param value Value to set for the _salesorderid_value property.
     */
    public set _salesorderid_value(value: string | undefined) {
        this.__salesorderid_value = value;
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
     * Instantiates a new salesorderdetail and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Salesorderdetail)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Salesorderdetail)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Salesorderdetail)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Salesorderdetail)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Salesorderdetail)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_invoicefrequency_value": (o, n) => { (o as unknown as Salesorderdetail)._msdyn_invoicefrequency_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Salesorderdetail)._msdyn_project_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Salesorderdetail)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Salesorderdetail)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Salesorderdetail)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Salesorderdetail)._owninguser_value = n.getStringValue(); },
            "_parentbundleidref_value": (o, n) => { (o as unknown as Salesorderdetail)._parentbundleidref_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Salesorderdetail)._productid_value = n.getStringValue(); },
            "_quotedetailid_value": (o, n) => { (o as unknown as Salesorderdetail)._quotedetailid_value = n.getStringValue(); },
            "_salesorderid_value": (o, n) => { (o as unknown as Salesorderdetail)._salesorderid_value = n.getStringValue(); },
            "_salesrepid_value": (o, n) => { (o as unknown as Salesorderdetail)._salesrepid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Salesorderdetail)._transactioncurrencyid_value = n.getStringValue(); },
            "_uomid_value": (o, n) => { (o as unknown as Salesorderdetail)._uomid_value = n.getStringValue(); },
            "baseamount": (o, n) => { (o as unknown as Salesorderdetail).baseamount = n.getNumberValue(); },
            "baseamount_base": (o, n) => { (o as unknown as Salesorderdetail).baseamount_base = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Salesorderdetail).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Salesorderdetail).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Salesorderdetail).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Salesorderdetail).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Salesorderdetail).exchangerate = n.getNumberValue(); },
            "extendedamount": (o, n) => { (o as unknown as Salesorderdetail).extendedamount = n.getNumberValue(); },
            "extendedamount_base": (o, n) => { (o as unknown as Salesorderdetail).extendedamount_base = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Salesorderdetail).importsequencenumber = n.getNumberValue(); },
            "iscopied": (o, n) => { (o as unknown as Salesorderdetail).iscopied = n.getBooleanValue(); },
            "ispriceoverridden": (o, n) => { (o as unknown as Salesorderdetail).ispriceoverridden = n.getBooleanValue(); },
            "isproductoverridden": (o, n) => { (o as unknown as Salesorderdetail).isproductoverridden = n.getBooleanValue(); },
            "lineitemnumber": (o, n) => { (o as unknown as Salesorderdetail).lineitemnumber = n.getNumberValue(); },
            "manualdiscountamount": (o, n) => { (o as unknown as Salesorderdetail).manualdiscountamount = n.getNumberValue(); },
            "manualdiscountamount_base": (o, n) => { (o as unknown as Salesorderdetail).manualdiscountamount_base = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Salesorderdetail).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Salesorderdetail).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Salesorderdetail).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreement": (o, n) => { (o as unknown as Salesorderdetail).msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_billingmethod": (o, n) => { (o as unknown as Salesorderdetail).msdyn_billingmethod = n.getNumberValue(); },
            "msdyn_billingstartdate": (o, n) => { (o as unknown as Salesorderdetail).msdyn_billingstartdate = n.getDateValue(); },
            "msdyn_billingstatus": (o, n) => { (o as unknown as Salesorderdetail).msdyn_billingstatus = n.getNumberValue(); },
            "msdyn_budgetamount": (o, n) => { (o as unknown as Salesorderdetail).msdyn_budgetamount = n.getNumberValue(); },
            "msdyn_budgetamount_base": (o, n) => { (o as unknown as Salesorderdetail).msdyn_budgetamount_base = n.getNumberValue(); },
            "msdyn_costamount": (o, n) => { (o as unknown as Salesorderdetail).msdyn_costamount = n.getNumberValue(); },
            "msdyn_costamount_base": (o, n) => { (o as unknown as Salesorderdetail).msdyn_costamount_base = n.getNumberValue(); },
            "msdyn_costpriceperunit": (o, n) => { (o as unknown as Salesorderdetail).msdyn_costpriceperunit = n.getNumberValue(); },
            "msdyn_costpriceperunit_base": (o, n) => { (o as unknown as Salesorderdetail).msdyn_costpriceperunit_base = n.getNumberValue(); },
            "msdyn_includeexpense": (o, n) => { (o as unknown as Salesorderdetail).msdyn_includeexpense = n.getBooleanValue(); },
            "msdyn_includefee": (o, n) => { (o as unknown as Salesorderdetail).msdyn_includefee = n.getBooleanValue(); },
            "msdyn_includematerial": (o, n) => { (o as unknown as Salesorderdetail).msdyn_includematerial = n.getBooleanValue(); },
            "msdyn_includetime": (o, n) => { (o as unknown as Salesorderdetail).msdyn_includetime = n.getBooleanValue(); },
            "msdyn_invoicefrequency": (o, n) => { (o as unknown as Salesorderdetail).msdyn_invoicefrequency = n.getObjectValue<Msdyn_invoicefrequency>(createMsdyn_invoicefrequencyFromDiscriminatorValue); },
            "msdyn_linetype": (o, n) => { (o as unknown as Salesorderdetail).msdyn_linetype = n.getNumberValue(); },
            "msdyn_Project": (o, n) => { (o as unknown as Salesorderdetail).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_quoteline": (o, n) => { (o as unknown as Salesorderdetail).msdyn_quoteline = n.getStringValue(); },
            "msdyn_salesorderdetail_invoicedetail": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_invoicedetail = n.getCollectionOfObjectValues<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_actual": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_actual = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_contractlineinvoic": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_contractlineinvoic = n.getCollectionOfObjectValues<Msdyn_contractlineinvoiceschedule>(createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_contractlineschedu": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_contractlineschedu = n.getCollectionOfObjectValues<Msdyn_contractlinescheduleofvalue>(createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId = n.getCollectionOfObjectValues<Msdyn_contractperformance>(createMsdyn_contractperformanceFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_fact": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_fact = n.getCollectionOfObjectValues<Msdyn_fact>(createMsdyn_factFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_invoicelinetransac": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_invoicelinetransac = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_journalline": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_journalline = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_orderlineresourcec": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_orderlineresourcec = n.getCollectionOfObjectValues<Msdyn_orderlineresourcecategory>(createMsdyn_orderlineresourcecategoryFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_orderlinetransacti": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_orderlinetransacti = n.getCollectionOfObjectValues<Msdyn_orderlinetransaction>(createMsdyn_orderlinetransactionFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_orderlinetranscat": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_orderlinetranscat = n.getCollectionOfObjectValues<Msdyn_orderlinetransactioncategory>(createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue); },
            "msdyn_salesorderdetail_msdyn_orderlinetransclas": (o, n) => { (o as unknown as Salesorderdetail).msdyn_salesorderdetail_msdyn_orderlinetransclas = n.getCollectionOfObjectValues<Msdyn_orderlinetransactionclassification>(createMsdyn_orderlinetransactionclassificationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Salesorderdetail).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Salesorderdetail).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Salesorderdetail).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentbundleid": (o, n) => { (o as unknown as Salesorderdetail).parentbundleid = n.getStringValue(); },
            "parentbundleid_salesorderdetail": (o, n) => { (o as unknown as Salesorderdetail).parentbundleid_salesorderdetail = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "parentbundleidref_salesorderdetail": (o, n) => { (o as unknown as Salesorderdetail).parentbundleidref_salesorderdetail = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "priceperunit": (o, n) => { (o as unknown as Salesorderdetail).priceperunit = n.getNumberValue(); },
            "priceperunit_base": (o, n) => { (o as unknown as Salesorderdetail).priceperunit_base = n.getNumberValue(); },
            "pricingerrorcode": (o, n) => { (o as unknown as Salesorderdetail).pricingerrorcode = n.getNumberValue(); },
            "productassociationid": (o, n) => { (o as unknown as Salesorderdetail).productassociationid = n.getStringValue(); },
            "productassociationid_productassociation": (o, n) => { (o as unknown as Salesorderdetail).productassociationid_productassociation = n.getObjectValue<Productassociation>(createProductassociationFromDiscriminatorValue); },
            "productdescription": (o, n) => { (o as unknown as Salesorderdetail).productdescription = n.getStringValue(); },
            "productid": (o, n) => { (o as unknown as Salesorderdetail).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productname": (o, n) => { (o as unknown as Salesorderdetail).productname = n.getStringValue(); },
            "productnumber": (o, n) => { (o as unknown as Salesorderdetail).productnumber = n.getStringValue(); },
            "producttypecode": (o, n) => { (o as unknown as Salesorderdetail).producttypecode = n.getNumberValue(); },
            "propertyconfigurationstatus": (o, n) => { (o as unknown as Salesorderdetail).propertyconfigurationstatus = n.getNumberValue(); },
            "quantity": (o, n) => { (o as unknown as Salesorderdetail).quantity = n.getNumberValue(); },
            "quantitybackordered": (o, n) => { (o as unknown as Salesorderdetail).quantitybackordered = n.getNumberValue(); },
            "quantitycancelled": (o, n) => { (o as unknown as Salesorderdetail).quantitycancelled = n.getNumberValue(); },
            "quantityshipped": (o, n) => { (o as unknown as Salesorderdetail).quantityshipped = n.getNumberValue(); },
            "quoteDetailId": (o, n) => { (o as unknown as Salesorderdetail).quoteDetailId = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "requestdeliveryby": (o, n) => { (o as unknown as Salesorderdetail).requestdeliveryby = n.getDateValue(); },
            "salesOrderDetail_AsyncOperations": (o, n) => { (o as unknown as Salesorderdetail).salesOrderDetail_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "salesOrderDetail_BulkDeleteFailures": (o, n) => { (o as unknown as Salesorderdetail).salesOrderDetail_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "salesOrderDetail_Dynamicpropertyinstance": (o, n) => { (o as unknown as Salesorderdetail).salesOrderDetail_Dynamicpropertyinstance = n.getCollectionOfObjectValues<Dynamicpropertyinstance>(createDynamicpropertyinstanceFromDiscriminatorValue); },
            "salesorderdetail_MailboxTrackingFolders": (o, n) => { (o as unknown as Salesorderdetail).salesorderdetail_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "salesorderdetail_parent_salesorderdetail": (o, n) => { (o as unknown as Salesorderdetail).salesorderdetail_parent_salesorderdetail = n.getCollectionOfObjectValues<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "salesorderdetail_parentref_salesorderdetail": (o, n) => { (o as unknown as Salesorderdetail).salesorderdetail_parentref_salesorderdetail = n.getCollectionOfObjectValues<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "salesorderdetail_principalobjectattributeaccess": (o, n) => { (o as unknown as Salesorderdetail).salesorderdetail_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "salesOrderDetail_ProcessSessions": (o, n) => { (o as unknown as Salesorderdetail).salesOrderDetail_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "salesOrderDetail_SyncErrors": (o, n) => { (o as unknown as Salesorderdetail).salesOrderDetail_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "salesorderdetailid": (o, n) => { (o as unknown as Salesorderdetail).salesorderdetailid = n.getStringValue(); },
            "salesorderdetailname": (o, n) => { (o as unknown as Salesorderdetail).salesorderdetailname = n.getStringValue(); },
            "salesorderid": (o, n) => { (o as unknown as Salesorderdetail).salesorderid = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "salesorderispricelocked": (o, n) => { (o as unknown as Salesorderdetail).salesorderispricelocked = n.getBooleanValue(); },
            "salesorderstatecode": (o, n) => { (o as unknown as Salesorderdetail).salesorderstatecode = n.getNumberValue(); },
            "salesrepid": (o, n) => { (o as unknown as Salesorderdetail).salesrepid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "sequencenumber": (o, n) => { (o as unknown as Salesorderdetail).sequencenumber = n.getNumberValue(); },
            "shipto_addressid": (o, n) => { (o as unknown as Salesorderdetail).shipto_addressid = n.getStringValue(); },
            "shipto_city": (o, n) => { (o as unknown as Salesorderdetail).shipto_city = n.getStringValue(); },
            "shipto_contactname": (o, n) => { (o as unknown as Salesorderdetail).shipto_contactname = n.getStringValue(); },
            "shipto_country": (o, n) => { (o as unknown as Salesorderdetail).shipto_country = n.getStringValue(); },
            "shipto_fax": (o, n) => { (o as unknown as Salesorderdetail).shipto_fax = n.getStringValue(); },
            "shipto_freighttermscode": (o, n) => { (o as unknown as Salesorderdetail).shipto_freighttermscode = n.getNumberValue(); },
            "shipto_line1": (o, n) => { (o as unknown as Salesorderdetail).shipto_line1 = n.getStringValue(); },
            "shipto_line2": (o, n) => { (o as unknown as Salesorderdetail).shipto_line2 = n.getStringValue(); },
            "shipto_line3": (o, n) => { (o as unknown as Salesorderdetail).shipto_line3 = n.getStringValue(); },
            "shipto_name": (o, n) => { (o as unknown as Salesorderdetail).shipto_name = n.getStringValue(); },
            "shipto_postalcode": (o, n) => { (o as unknown as Salesorderdetail).shipto_postalcode = n.getStringValue(); },
            "shipto_stateorprovince": (o, n) => { (o as unknown as Salesorderdetail).shipto_stateorprovince = n.getStringValue(); },
            "shipto_telephone": (o, n) => { (o as unknown as Salesorderdetail).shipto_telephone = n.getStringValue(); },
            "skippricecalculation": (o, n) => { (o as unknown as Salesorderdetail).skippricecalculation = n.getNumberValue(); },
            "tax": (o, n) => { (o as unknown as Salesorderdetail).tax = n.getNumberValue(); },
            "tax_base": (o, n) => { (o as unknown as Salesorderdetail).tax_base = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Salesorderdetail).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Salesorderdetail).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uomid": (o, n) => { (o as unknown as Salesorderdetail).uomid = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Salesorderdetail).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Salesorderdetail).versionnumber = n.getNumberValue(); },
            "volumediscountamount": (o, n) => { (o as unknown as Salesorderdetail).volumediscountamount = n.getNumberValue(); },
            "volumediscountamount_base": (o, n) => { (o as unknown as Salesorderdetail).volumediscountamount_base = n.getNumberValue(); },
            "willcall": (o, n) => { (o as unknown as Salesorderdetail).willcall = n.getBooleanValue(); },
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
     * Gets the msdyn_billingstartdate property value. 
     * @returns a Date
     */
    public get msdyn_billingstartdate() {
        return this._msdyn_billingstartdate;
    };
    /**
     * Sets the msdyn_billingstartdate property value. 
     * @param value Value to set for the msdyn_billingstartdate property.
     */
    public set msdyn_billingstartdate(value: Date | undefined) {
        this._msdyn_billingstartdate = value;
    };
    /**
     * Gets the msdyn_billingstatus property value. 
     * @returns a integer
     */
    public get msdyn_billingstatus() {
        return this._msdyn_billingstatus;
    };
    /**
     * Sets the msdyn_billingstatus property value. 
     * @param value Value to set for the msdyn_billingstatus property.
     */
    public set msdyn_billingstatus(value: number | undefined) {
        this._msdyn_billingstatus = value;
    };
    /**
     * Gets the msdyn_budgetamount property value. 
     * @returns a int64
     */
    public get msdyn_budgetamount() {
        return this._msdyn_budgetamount;
    };
    /**
     * Sets the msdyn_budgetamount property value. 
     * @param value Value to set for the msdyn_budgetamount property.
     */
    public set msdyn_budgetamount(value: number | undefined) {
        this._msdyn_budgetamount = value;
    };
    /**
     * Gets the msdyn_budgetamount_base property value. 
     * @returns a int64
     */
    public get msdyn_budgetamount_base() {
        return this._msdyn_budgetamount_base;
    };
    /**
     * Sets the msdyn_budgetamount_base property value. 
     * @param value Value to set for the msdyn_budgetamount_base property.
     */
    public set msdyn_budgetamount_base(value: number | undefined) {
        this._msdyn_budgetamount_base = value;
    };
    /**
     * Gets the msdyn_costamount property value. 
     * @returns a int64
     */
    public get msdyn_costamount() {
        return this._msdyn_costamount;
    };
    /**
     * Sets the msdyn_costamount property value. 
     * @param value Value to set for the msdyn_costamount property.
     */
    public set msdyn_costamount(value: number | undefined) {
        this._msdyn_costamount = value;
    };
    /**
     * Gets the msdyn_costamount_base property value. 
     * @returns a int64
     */
    public get msdyn_costamount_base() {
        return this._msdyn_costamount_base;
    };
    /**
     * Sets the msdyn_costamount_base property value. 
     * @param value Value to set for the msdyn_costamount_base property.
     */
    public set msdyn_costamount_base(value: number | undefined) {
        this._msdyn_costamount_base = value;
    };
    /**
     * Gets the msdyn_costpriceperunit property value. 
     * @returns a int64
     */
    public get msdyn_costpriceperunit() {
        return this._msdyn_costpriceperunit;
    };
    /**
     * Sets the msdyn_costpriceperunit property value. 
     * @param value Value to set for the msdyn_costpriceperunit property.
     */
    public set msdyn_costpriceperunit(value: number | undefined) {
        this._msdyn_costpriceperunit = value;
    };
    /**
     * Gets the msdyn_costpriceperunit_base property value. 
     * @returns a int64
     */
    public get msdyn_costpriceperunit_base() {
        return this._msdyn_costpriceperunit_base;
    };
    /**
     * Sets the msdyn_costpriceperunit_base property value. 
     * @param value Value to set for the msdyn_costpriceperunit_base property.
     */
    public set msdyn_costpriceperunit_base(value: number | undefined) {
        this._msdyn_costpriceperunit_base = value;
    };
    /**
     * Gets the msdyn_includeexpense property value. 
     * @returns a boolean
     */
    public get msdyn_includeexpense() {
        return this._msdyn_includeexpense;
    };
    /**
     * Sets the msdyn_includeexpense property value. 
     * @param value Value to set for the msdyn_includeexpense property.
     */
    public set msdyn_includeexpense(value: boolean | undefined) {
        this._msdyn_includeexpense = value;
    };
    /**
     * Gets the msdyn_includefee property value. 
     * @returns a boolean
     */
    public get msdyn_includefee() {
        return this._msdyn_includefee;
    };
    /**
     * Sets the msdyn_includefee property value. 
     * @param value Value to set for the msdyn_includefee property.
     */
    public set msdyn_includefee(value: boolean | undefined) {
        this._msdyn_includefee = value;
    };
    /**
     * Gets the msdyn_includematerial property value. 
     * @returns a boolean
     */
    public get msdyn_includematerial() {
        return this._msdyn_includematerial;
    };
    /**
     * Sets the msdyn_includematerial property value. 
     * @param value Value to set for the msdyn_includematerial property.
     */
    public set msdyn_includematerial(value: boolean | undefined) {
        this._msdyn_includematerial = value;
    };
    /**
     * Gets the msdyn_includetime property value. 
     * @returns a boolean
     */
    public get msdyn_includetime() {
        return this._msdyn_includetime;
    };
    /**
     * Sets the msdyn_includetime property value. 
     * @param value Value to set for the msdyn_includetime property.
     */
    public set msdyn_includetime(value: boolean | undefined) {
        this._msdyn_includetime = value;
    };
    /**
     * Gets the msdyn_invoicefrequency property value. 
     * @returns a msdyn_invoicefrequency
     */
    public get msdyn_invoicefrequency() {
        return this._msdyn_invoicefrequency;
    };
    /**
     * Sets the msdyn_invoicefrequency property value. 
     * @param value Value to set for the msdyn_invoicefrequency property.
     */
    public set msdyn_invoicefrequency(value: Msdyn_invoicefrequency | undefined) {
        this._msdyn_invoicefrequency = value;
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
     * Gets the msdyn_quoteline property value. 
     * @returns a string
     */
    public get msdyn_quoteline() {
        return this._msdyn_quoteline;
    };
    /**
     * Sets the msdyn_quoteline property value. 
     * @param value Value to set for the msdyn_quoteline property.
     */
    public set msdyn_quoteline(value: string | undefined) {
        this._msdyn_quoteline = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_invoicedetail property value. 
     * @returns a invoicedetail
     */
    public get msdyn_salesorderdetail_invoicedetail() {
        return this._msdyn_salesorderdetail_invoicedetail;
    };
    /**
     * Sets the msdyn_salesorderdetail_invoicedetail property value. 
     * @param value Value to set for the msdyn_salesorderdetail_invoicedetail property.
     */
    public set msdyn_salesorderdetail_invoicedetail(value: Invoicedetail[] | undefined) {
        this._msdyn_salesorderdetail_invoicedetail = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_actual property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_salesorderdetail_msdyn_actual() {
        return this._msdyn_salesorderdetail_msdyn_actual;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_actual property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_actual property.
     */
    public set msdyn_salesorderdetail_msdyn_actual(value: Msdyn_actual[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_actual = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_contractlineinvoic property value. 
     * @returns a msdyn_contractlineinvoiceschedule
     */
    public get msdyn_salesorderdetail_msdyn_contractlineinvoic() {
        return this._msdyn_salesorderdetail_msdyn_contractlineinvoic;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_contractlineinvoic property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_contractlineinvoic property.
     */
    public set msdyn_salesorderdetail_msdyn_contractlineinvoic(value: Msdyn_contractlineinvoiceschedule[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_contractlineinvoic = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_contractlineschedu property value. 
     * @returns a msdyn_contractlinescheduleofvalue
     */
    public get msdyn_salesorderdetail_msdyn_contractlineschedu() {
        return this._msdyn_salesorderdetail_msdyn_contractlineschedu;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_contractlineschedu property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_contractlineschedu property.
     */
    public set msdyn_salesorderdetail_msdyn_contractlineschedu(value: Msdyn_contractlinescheduleofvalue[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_contractlineschedu = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId property value. 
     * @returns a msdyn_contractperformance
     */
    public get msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId() {
        return this._msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId property.
     */
    public set msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId(value: Msdyn_contractperformance[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_fact property value. 
     * @returns a msdyn_fact
     */
    public get msdyn_salesorderdetail_msdyn_fact() {
        return this._msdyn_salesorderdetail_msdyn_fact;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_fact property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_fact property.
     */
    public set msdyn_salesorderdetail_msdyn_fact(value: Msdyn_fact[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_fact = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_invoicelinetransac property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_salesorderdetail_msdyn_invoicelinetransac() {
        return this._msdyn_salesorderdetail_msdyn_invoicelinetransac;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_invoicelinetransac property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_invoicelinetransac property.
     */
    public set msdyn_salesorderdetail_msdyn_invoicelinetransac(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_invoicelinetransac = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_journalline property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_salesorderdetail_msdyn_journalline() {
        return this._msdyn_salesorderdetail_msdyn_journalline;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_journalline property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_journalline property.
     */
    public set msdyn_salesorderdetail_msdyn_journalline(value: Msdyn_journalline[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_journalline = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_orderlineresourcec property value. 
     * @returns a msdyn_orderlineresourcecategory
     */
    public get msdyn_salesorderdetail_msdyn_orderlineresourcec() {
        return this._msdyn_salesorderdetail_msdyn_orderlineresourcec;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_orderlineresourcec property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_orderlineresourcec property.
     */
    public set msdyn_salesorderdetail_msdyn_orderlineresourcec(value: Msdyn_orderlineresourcecategory[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_orderlineresourcec = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_orderlinetransacti property value. 
     * @returns a msdyn_orderlinetransaction
     */
    public get msdyn_salesorderdetail_msdyn_orderlinetransacti() {
        return this._msdyn_salesorderdetail_msdyn_orderlinetransacti;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_orderlinetransacti property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_orderlinetransacti property.
     */
    public set msdyn_salesorderdetail_msdyn_orderlinetransacti(value: Msdyn_orderlinetransaction[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_orderlinetransacti = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_orderlinetranscat property value. 
     * @returns a msdyn_orderlinetransactioncategory
     */
    public get msdyn_salesorderdetail_msdyn_orderlinetranscat() {
        return this._msdyn_salesorderdetail_msdyn_orderlinetranscat;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_orderlinetranscat property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_orderlinetranscat property.
     */
    public set msdyn_salesorderdetail_msdyn_orderlinetranscat(value: Msdyn_orderlinetransactioncategory[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_orderlinetranscat = value;
    };
    /**
     * Gets the msdyn_salesorderdetail_msdyn_orderlinetransclas property value. 
     * @returns a msdyn_orderlinetransactionclassification
     */
    public get msdyn_salesorderdetail_msdyn_orderlinetransclas() {
        return this._msdyn_salesorderdetail_msdyn_orderlinetransclas;
    };
    /**
     * Sets the msdyn_salesorderdetail_msdyn_orderlinetransclas property value. 
     * @param value Value to set for the msdyn_salesorderdetail_msdyn_orderlinetransclas property.
     */
    public set msdyn_salesorderdetail_msdyn_orderlinetransclas(value: Msdyn_orderlinetransactionclassification[] | undefined) {
        this._msdyn_salesorderdetail_msdyn_orderlinetransclas = value;
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
     * Gets the parentbundleid_salesorderdetail property value. 
     * @returns a salesorderdetail
     */
    public get parentbundleid_salesorderdetail() {
        return this._parentbundleid_salesorderdetail;
    };
    /**
     * Sets the parentbundleid_salesorderdetail property value. 
     * @param value Value to set for the parentbundleid_salesorderdetail property.
     */
    public set parentbundleid_salesorderdetail(value: Salesorderdetail | undefined) {
        this._parentbundleid_salesorderdetail = value;
    };
    /**
     * Gets the parentbundleidref_salesorderdetail property value. 
     * @returns a salesorderdetail
     */
    public get parentbundleidref_salesorderdetail() {
        return this._parentbundleidref_salesorderdetail;
    };
    /**
     * Sets the parentbundleidref_salesorderdetail property value. 
     * @param value Value to set for the parentbundleidref_salesorderdetail property.
     */
    public set parentbundleidref_salesorderdetail(value: Salesorderdetail | undefined) {
        this._parentbundleidref_salesorderdetail = value;
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
     * Gets the quoteDetailId property value. 
     * @returns a quotedetail
     */
    public get quoteDetailId() {
        return this._quoteDetailId;
    };
    /**
     * Sets the quoteDetailId property value. 
     * @param value Value to set for the QuoteDetailId property.
     */
    public set quoteDetailId(value: Quotedetail | undefined) {
        this._quoteDetailId = value;
    };
    /**
     * Gets the requestdeliveryby property value. 
     * @returns a Date
     */
    public get requestdeliveryby() {
        return this._requestdeliveryby;
    };
    /**
     * Sets the requestdeliveryby property value. 
     * @param value Value to set for the requestdeliveryby property.
     */
    public set requestdeliveryby(value: Date | undefined) {
        this._requestdeliveryby = value;
    };
    /**
     * Gets the salesOrderDetail_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get salesOrderDetail_AsyncOperations() {
        return this._salesOrderDetail_AsyncOperations;
    };
    /**
     * Sets the salesOrderDetail_AsyncOperations property value. 
     * @param value Value to set for the SalesOrderDetail_AsyncOperations property.
     */
    public set salesOrderDetail_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._salesOrderDetail_AsyncOperations = value;
    };
    /**
     * Gets the salesOrderDetail_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get salesOrderDetail_BulkDeleteFailures() {
        return this._salesOrderDetail_BulkDeleteFailures;
    };
    /**
     * Sets the salesOrderDetail_BulkDeleteFailures property value. 
     * @param value Value to set for the SalesOrderDetail_BulkDeleteFailures property.
     */
    public set salesOrderDetail_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._salesOrderDetail_BulkDeleteFailures = value;
    };
    /**
     * Gets the salesOrderDetail_Dynamicpropertyinstance property value. 
     * @returns a dynamicpropertyinstance
     */
    public get salesOrderDetail_Dynamicpropertyinstance() {
        return this._salesOrderDetail_Dynamicpropertyinstance;
    };
    /**
     * Sets the salesOrderDetail_Dynamicpropertyinstance property value. 
     * @param value Value to set for the SalesOrderDetail_Dynamicpropertyinstance property.
     */
    public set salesOrderDetail_Dynamicpropertyinstance(value: Dynamicpropertyinstance[] | undefined) {
        this._salesOrderDetail_Dynamicpropertyinstance = value;
    };
    /**
     * Gets the salesorderdetail_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get salesorderdetail_MailboxTrackingFolders() {
        return this._salesorderdetail_MailboxTrackingFolders;
    };
    /**
     * Sets the salesorderdetail_MailboxTrackingFolders property value. 
     * @param value Value to set for the salesorderdetail_MailboxTrackingFolders property.
     */
    public set salesorderdetail_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._salesorderdetail_MailboxTrackingFolders = value;
    };
    /**
     * Gets the salesorderdetail_parent_salesorderdetail property value. 
     * @returns a salesorderdetail
     */
    public get salesorderdetail_parent_salesorderdetail() {
        return this._salesorderdetail_parent_salesorderdetail;
    };
    /**
     * Sets the salesorderdetail_parent_salesorderdetail property value. 
     * @param value Value to set for the salesorderdetail_parent_salesorderdetail property.
     */
    public set salesorderdetail_parent_salesorderdetail(value: Salesorderdetail[] | undefined) {
        this._salesorderdetail_parent_salesorderdetail = value;
    };
    /**
     * Gets the salesorderdetail_parentref_salesorderdetail property value. 
     * @returns a salesorderdetail
     */
    public get salesorderdetail_parentref_salesorderdetail() {
        return this._salesorderdetail_parentref_salesorderdetail;
    };
    /**
     * Sets the salesorderdetail_parentref_salesorderdetail property value. 
     * @param value Value to set for the salesorderdetail_parentref_salesorderdetail property.
     */
    public set salesorderdetail_parentref_salesorderdetail(value: Salesorderdetail[] | undefined) {
        this._salesorderdetail_parentref_salesorderdetail = value;
    };
    /**
     * Gets the salesorderdetail_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get salesorderdetail_principalobjectattributeaccess() {
        return this._salesorderdetail_principalobjectattributeaccess;
    };
    /**
     * Sets the salesorderdetail_principalobjectattributeaccess property value. 
     * @param value Value to set for the salesorderdetail_principalobjectattributeaccess property.
     */
    public set salesorderdetail_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._salesorderdetail_principalobjectattributeaccess = value;
    };
    /**
     * Gets the salesOrderDetail_ProcessSessions property value. 
     * @returns a processsession
     */
    public get salesOrderDetail_ProcessSessions() {
        return this._salesOrderDetail_ProcessSessions;
    };
    /**
     * Sets the salesOrderDetail_ProcessSessions property value. 
     * @param value Value to set for the SalesOrderDetail_ProcessSessions property.
     */
    public set salesOrderDetail_ProcessSessions(value: Processsession[] | undefined) {
        this._salesOrderDetail_ProcessSessions = value;
    };
    /**
     * Gets the salesOrderDetail_SyncErrors property value. 
     * @returns a syncerror
     */
    public get salesOrderDetail_SyncErrors() {
        return this._salesOrderDetail_SyncErrors;
    };
    /**
     * Sets the salesOrderDetail_SyncErrors property value. 
     * @param value Value to set for the SalesOrderDetail_SyncErrors property.
     */
    public set salesOrderDetail_SyncErrors(value: Syncerror[] | undefined) {
        this._salesOrderDetail_SyncErrors = value;
    };
    /**
     * Gets the salesorderdetailid property value. 
     * @returns a string
     */
    public get salesorderdetailid() {
        return this._salesorderdetailid;
    };
    /**
     * Sets the salesorderdetailid property value. 
     * @param value Value to set for the salesorderdetailid property.
     */
    public set salesorderdetailid(value: string | undefined) {
        this._salesorderdetailid = value;
    };
    /**
     * Gets the salesorderdetailname property value. 
     * @returns a string
     */
    public get salesorderdetailname() {
        return this._salesorderdetailname;
    };
    /**
     * Sets the salesorderdetailname property value. 
     * @param value Value to set for the salesorderdetailname property.
     */
    public set salesorderdetailname(value: string | undefined) {
        this._salesorderdetailname = value;
    };
    /**
     * Gets the salesorderid property value. 
     * @returns a salesorder
     */
    public get salesorderid() {
        return this._salesorderid;
    };
    /**
     * Sets the salesorderid property value. 
     * @param value Value to set for the salesorderid property.
     */
    public set salesorderid(value: Salesorder | undefined) {
        this._salesorderid = value;
    };
    /**
     * Gets the salesorderispricelocked property value. 
     * @returns a boolean
     */
    public get salesorderispricelocked() {
        return this._salesorderispricelocked;
    };
    /**
     * Sets the salesorderispricelocked property value. 
     * @param value Value to set for the salesorderispricelocked property.
     */
    public set salesorderispricelocked(value: boolean | undefined) {
        this._salesorderispricelocked = value;
    };
    /**
     * Gets the salesorderstatecode property value. 
     * @returns a integer
     */
    public get salesorderstatecode() {
        return this._salesorderstatecode;
    };
    /**
     * Sets the salesorderstatecode property value. 
     * @param value Value to set for the salesorderstatecode property.
     */
    public set salesorderstatecode(value: number | undefined) {
        this._salesorderstatecode = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_agreement_value", this._msdyn_agreement_value);
        writer.writeStringValue("_msdyn_invoicefrequency_value", this._msdyn_invoicefrequency_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentbundleidref_value", this._parentbundleidref_value);
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_quotedetailid_value", this._quotedetailid_value);
        writer.writeStringValue("_salesorderid_value", this._salesorderid_value);
        writer.writeStringValue("_salesrepid_value", this._salesrepid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_uomid_value", this._uomid_value);
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
        writer.writeNumberValue("msdyn_billingmethod", this.msdyn_billingmethod);
        writer.writeDateValue("msdyn_billingstartdate", this.msdyn_billingstartdate);
        writer.writeNumberValue("msdyn_billingstatus", this.msdyn_billingstatus);
        writer.writeNumberValue("msdyn_budgetamount", this.msdyn_budgetamount);
        writer.writeNumberValue("msdyn_budgetamount_base", this.msdyn_budgetamount_base);
        writer.writeNumberValue("msdyn_costamount", this.msdyn_costamount);
        writer.writeNumberValue("msdyn_costamount_base", this.msdyn_costamount_base);
        writer.writeNumberValue("msdyn_costpriceperunit", this.msdyn_costpriceperunit);
        writer.writeNumberValue("msdyn_costpriceperunit_base", this.msdyn_costpriceperunit_base);
        writer.writeBooleanValue("msdyn_includeexpense", this.msdyn_includeexpense);
        writer.writeBooleanValue("msdyn_includefee", this.msdyn_includefee);
        writer.writeBooleanValue("msdyn_includematerial", this.msdyn_includematerial);
        writer.writeBooleanValue("msdyn_includetime", this.msdyn_includetime);
        writer.writeObjectValue<Msdyn_invoicefrequency>("msdyn_invoicefrequency", this.msdyn_invoicefrequency);
        writer.writeNumberValue("msdyn_linetype", this.msdyn_linetype);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeStringValue("msdyn_quoteline", this.msdyn_quoteline);
        writer.writeCollectionOfObjectValues<Invoicedetail>("msdyn_salesorderdetail_invoicedetail", this.msdyn_salesorderdetail_invoicedetail);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_salesorderdetail_msdyn_actual", this.msdyn_salesorderdetail_msdyn_actual);
        writer.writeCollectionOfObjectValues<Msdyn_contractlineinvoiceschedule>("msdyn_salesorderdetail_msdyn_contractlineinvoic", this.msdyn_salesorderdetail_msdyn_contractlineinvoic);
        writer.writeCollectionOfObjectValues<Msdyn_contractlinescheduleofvalue>("msdyn_salesorderdetail_msdyn_contractlineschedu", this.msdyn_salesorderdetail_msdyn_contractlineschedu);
        writer.writeCollectionOfObjectValues<Msdyn_contractperformance>("msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId", this.msdyn_salesorderdetail_msdyn_contractperformance_ContractLineId);
        writer.writeCollectionOfObjectValues<Msdyn_fact>("msdyn_salesorderdetail_msdyn_fact", this.msdyn_salesorderdetail_msdyn_fact);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_salesorderdetail_msdyn_invoicelinetransac", this.msdyn_salesorderdetail_msdyn_invoicelinetransac);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_salesorderdetail_msdyn_journalline", this.msdyn_salesorderdetail_msdyn_journalline);
        writer.writeCollectionOfObjectValues<Msdyn_orderlineresourcecategory>("msdyn_salesorderdetail_msdyn_orderlineresourcec", this.msdyn_salesorderdetail_msdyn_orderlineresourcec);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransaction>("msdyn_salesorderdetail_msdyn_orderlinetransacti", this.msdyn_salesorderdetail_msdyn_orderlinetransacti);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransactioncategory>("msdyn_salesorderdetail_msdyn_orderlinetranscat", this.msdyn_salesorderdetail_msdyn_orderlinetranscat);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransactionclassification>("msdyn_salesorderdetail_msdyn_orderlinetransclas", this.msdyn_salesorderdetail_msdyn_orderlinetransclas);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("parentbundleid", this.parentbundleid);
        writer.writeObjectValue<Salesorderdetail>("parentbundleid_salesorderdetail", this.parentbundleid_salesorderdetail);
        writer.writeObjectValue<Salesorderdetail>("parentbundleidref_salesorderdetail", this.parentbundleidref_salesorderdetail);
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
        writer.writeObjectValue<Quotedetail>("quoteDetailId", this.quoteDetailId);
        writer.writeDateValue("requestdeliveryby", this.requestdeliveryby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("salesOrderDetail_AsyncOperations", this.salesOrderDetail_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("salesOrderDetail_BulkDeleteFailures", this.salesOrderDetail_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Dynamicpropertyinstance>("salesOrderDetail_Dynamicpropertyinstance", this.salesOrderDetail_Dynamicpropertyinstance);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("salesorderdetail_MailboxTrackingFolders", this.salesorderdetail_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Salesorderdetail>("salesorderdetail_parent_salesorderdetail", this.salesorderdetail_parent_salesorderdetail);
        writer.writeCollectionOfObjectValues<Salesorderdetail>("salesorderdetail_parentref_salesorderdetail", this.salesorderdetail_parentref_salesorderdetail);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("salesorderdetail_principalobjectattributeaccess", this.salesorderdetail_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("salesOrderDetail_ProcessSessions", this.salesOrderDetail_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("salesOrderDetail_SyncErrors", this.salesOrderDetail_SyncErrors);
        writer.writeStringValue("salesorderdetailid", this.salesorderdetailid);
        writer.writeStringValue("salesorderdetailname", this.salesorderdetailname);
        writer.writeObjectValue<Salesorder>("salesorderid", this.salesorderid);
        writer.writeBooleanValue("salesorderispricelocked", this.salesorderispricelocked);
        writer.writeNumberValue("salesorderstatecode", this.salesorderstatecode);
        writer.writeObjectValue<Systemuser>("salesrepid", this.salesrepid);
        writer.writeNumberValue("sequencenumber", this.sequencenumber);
        writer.writeStringValue("shipto_addressid", this.shipto_addressid);
        writer.writeStringValue("shipto_city", this.shipto_city);
        writer.writeStringValue("shipto_contactname", this.shipto_contactname);
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
     * Gets the shipto_addressid property value. 
     * @returns a string
     */
    public get shipto_addressid() {
        return this._shipto_addressid;
    };
    /**
     * Sets the shipto_addressid property value. 
     * @param value Value to set for the shipto_addressid property.
     */
    public set shipto_addressid(value: string | undefined) {
        this._shipto_addressid = value;
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
     * Gets the shipto_contactname property value. 
     * @returns a string
     */
    public get shipto_contactname() {
        return this._shipto_contactname;
    };
    /**
     * Sets the shipto_contactname property value. 
     * @param value Value to set for the shipto_contactname property.
     */
    public set shipto_contactname(value: string | undefined) {
        this._shipto_contactname = value;
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
