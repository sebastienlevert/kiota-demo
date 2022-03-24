import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyinstanceFromDiscriminatorValue} from './createDynamicpropertyinstanceFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_invoicefrequencyFromDiscriminatorValue} from './createMsdyn_invoicefrequencyFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_quotebookingsetupFromDiscriminatorValue} from './createMsdyn_quotebookingsetupFromDiscriminatorValue';
import {createMsdyn_quotelineinvoicescheduleFromDiscriminatorValue} from './createMsdyn_quotelineinvoicescheduleFromDiscriminatorValue';
import {createMsdyn_quotelineresourcecategoryFromDiscriminatorValue} from './createMsdyn_quotelineresourcecategoryFromDiscriminatorValue';
import {createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue} from './createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue';
import {createMsdyn_quotelinetransactioncategoryFromDiscriminatorValue} from './createMsdyn_quotelinetransactioncategoryFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionclassificationFromDiscriminatorValue} from './createMsdyn_quotelinetransactionclassificationFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionFromDiscriminatorValue} from './createMsdyn_quotelinetransactionFromDiscriminatorValue';
import {createMsdyn_taxcodeFromDiscriminatorValue} from './createMsdyn_taxcodeFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductassociationFromDiscriminatorValue} from './createProductassociationFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTerritoryFromDiscriminatorValue} from './createTerritoryFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Account, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicpropertyinstance, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_invoicefrequency, Msdyn_project, Msdyn_quotebookingsetup, Msdyn_quotelineinvoiceschedule, Msdyn_quotelineresourcecategory, Msdyn_quotelinescheduleofvalue, Msdyn_quotelinetransaction, Msdyn_quotelinetransactioncategory, Msdyn_quotelinetransactionclassification, Msdyn_taxcode, Pricelevel, Principalobjectattributeaccess, Processsession, Product, Productassociation, Quote, Salesorderdetail, Syncerror, Systemuser, Team, Territory, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Quotedetail extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_invoicefrequency_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_salestaxcode_value?: string | undefined;
    private __msdyn_serviceaccount_value?: string | undefined;
    private __msdyn_serviceterritory_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentbundleidref_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __quoteid_value?: string | undefined;
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
    private _ispriceoverridden?: boolean | undefined;
    private _isproductoverridden?: boolean | undefined;
    private _lineitemnumber?: number | undefined;
    private _manualdiscountamount?: number | undefined;
    private _manualdiscountamount_base?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_Agreement?: Msdyn_agreement | undefined;
    private _msdyn_billingmethod?: number | undefined;
    private _msdyn_billingstartdate?: Date | undefined;
    private _msdyn_budgetamount?: number | undefined;
    private _msdyn_budgetamount_base?: number | undefined;
    private _msdyn_costamount?: number | undefined;
    private _msdyn_costamount_base?: number | undefined;
    private _msdyn_costpriceperunit?: number | undefined;
    private _msdyn_costpriceperunit_base?: number | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_enddate?: Date | undefined;
    private _msdyn_estimatedcost?: number | undefined;
    private _msdyn_estimatedcost_base?: number | undefined;
    private _msdyn_estimatedmargin?: number | undefined;
    private _msdyn_estimatedrevenue?: number | undefined;
    private _msdyn_estimatedrevenue_base?: number | undefined;
    private _msdyn_importdetailsfromagreement?: boolean | undefined;
    private _msdyn_includeexpense?: boolean | undefined;
    private _msdyn_includefee?: boolean | undefined;
    private _msdyn_includematerial?: boolean | undefined;
    private _msdyn_includetime?: boolean | undefined;
    private _msdyn_invoicefrequency?: Msdyn_invoicefrequency | undefined;
    private _msdyn_linedescription?: string | undefined;
    private _msdyn_linetype?: number | undefined;
    private _msdyn_opportunityline?: string | undefined;
    private _msdyn_PriceList?: Pricelevel | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_quotedetail_msdyn_quotebookingsetup?: Msdyn_quotebookingsetup[] | undefined;
    private _msdyn_quotedetail_msdyn_quotelineinvoiceschedu?: Msdyn_quotelineinvoiceschedule[] | undefined;
    private _msdyn_quotedetail_msdyn_quotelineresourcecatego?: Msdyn_quotelineresourcecategory[] | undefined;
    private _msdyn_quotedetail_msdyn_quotelinescheduleofv?: Msdyn_quotelinescheduleofvalue[] | undefined;
    private _msdyn_quotedetail_msdyn_quotelinetransaction?: Msdyn_quotelinetransaction[] | undefined;
    private _msdyn_quotedetail_msdyn_quotelinetransactioncat?: Msdyn_quotelinetransactioncategory[] | undefined;
    private _msdyn_quotedetail_msdyn_quotelinetransactioncla?: Msdyn_quotelinetransactionclassification[] | undefined;
    private _msdyn_quotedetail_salesorderdetail?: Salesorderdetail[] | undefined;
    private _msdyn_SalesTaxCode?: Msdyn_taxcode | undefined;
    private _msdyn_ServiceAccount?: Account | undefined;
    private _msdyn_ServiceTerritory?: Territory | undefined;
    private _msdyn_startdate?: Date | undefined;
    private _msdyn_taxable?: boolean | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentbundleid?: string | undefined;
    private _parentbundleid_quotedetail?: Quotedetail | undefined;
    private _parentbundleidref_quotedetail?: Quotedetail | undefined;
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
    private _quoteDetail_AsyncOperations?: Asyncoperation[] | undefined;
    private _quoteDetail_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _quoteDetail_Dynamicpropertyinstance?: Dynamicpropertyinstance[] | undefined;
    private _quotedetail_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _quotedetail_parent_quotedetail?: Quotedetail[] | undefined;
    private _quotedetail_parentref_quotedetail?: Quotedetail[] | undefined;
    private _quotedetail_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _quoteDetail_ProcessSessions?: Processsession[] | undefined;
    private _quoteDetail_SyncErrors?: Syncerror[] | undefined;
    private _quotedetailid?: string | undefined;
    private _quotedetailname?: string | undefined;
    private _quoteid?: Quote | undefined;
    private _quotestatecode?: number | undefined;
    private _requestdeliveryby?: Date | undefined;
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
     * Gets the _msdyn_pricelist_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelist_value() {
        return this.__msdyn_pricelist_value;
    };
    /**
     * Sets the _msdyn_pricelist_value property value. 
     * @param value Value to set for the _msdyn_pricelist_value property.
     */
    public set _msdyn_pricelist_value(value: string | undefined) {
        this.__msdyn_pricelist_value = value;
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
     * Gets the _msdyn_salestaxcode_value property value. 
     * @returns a string
     */
    public get _msdyn_salestaxcode_value() {
        return this.__msdyn_salestaxcode_value;
    };
    /**
     * Sets the _msdyn_salestaxcode_value property value. 
     * @param value Value to set for the _msdyn_salestaxcode_value property.
     */
    public set _msdyn_salestaxcode_value(value: string | undefined) {
        this.__msdyn_salestaxcode_value = value;
    };
    /**
     * Gets the _msdyn_serviceaccount_value property value. 
     * @returns a string
     */
    public get _msdyn_serviceaccount_value() {
        return this.__msdyn_serviceaccount_value;
    };
    /**
     * Sets the _msdyn_serviceaccount_value property value. 
     * @param value Value to set for the _msdyn_serviceaccount_value property.
     */
    public set _msdyn_serviceaccount_value(value: string | undefined) {
        this.__msdyn_serviceaccount_value = value;
    };
    /**
     * Gets the _msdyn_serviceterritory_value property value. 
     * @returns a string
     */
    public get _msdyn_serviceterritory_value() {
        return this.__msdyn_serviceterritory_value;
    };
    /**
     * Sets the _msdyn_serviceterritory_value property value. 
     * @param value Value to set for the _msdyn_serviceterritory_value property.
     */
    public set _msdyn_serviceterritory_value(value: string | undefined) {
        this.__msdyn_serviceterritory_value = value;
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
     * Gets the _quoteid_value property value. 
     * @returns a string
     */
    public get _quoteid_value() {
        return this.__quoteid_value;
    };
    /**
     * Sets the _quoteid_value property value. 
     * @param value Value to set for the _quoteid_value property.
     */
    public set _quoteid_value(value: string | undefined) {
        this.__quoteid_value = value;
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
     * Instantiates a new quotedetail and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Quotedetail)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Quotedetail)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Quotedetail)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Quotedetail)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Quotedetail)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_invoicefrequency_value": (o, n) => { (o as unknown as Quotedetail)._msdyn_invoicefrequency_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Quotedetail)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Quotedetail)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_salestaxcode_value": (o, n) => { (o as unknown as Quotedetail)._msdyn_salestaxcode_value = n.getStringValue(); },
            "_msdyn_serviceaccount_value": (o, n) => { (o as unknown as Quotedetail)._msdyn_serviceaccount_value = n.getStringValue(); },
            "_msdyn_serviceterritory_value": (o, n) => { (o as unknown as Quotedetail)._msdyn_serviceterritory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Quotedetail)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Quotedetail)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Quotedetail)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Quotedetail)._owninguser_value = n.getStringValue(); },
            "_parentbundleidref_value": (o, n) => { (o as unknown as Quotedetail)._parentbundleidref_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Quotedetail)._productid_value = n.getStringValue(); },
            "_quoteid_value": (o, n) => { (o as unknown as Quotedetail)._quoteid_value = n.getStringValue(); },
            "_salesrepid_value": (o, n) => { (o as unknown as Quotedetail)._salesrepid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Quotedetail)._transactioncurrencyid_value = n.getStringValue(); },
            "_uomid_value": (o, n) => { (o as unknown as Quotedetail)._uomid_value = n.getStringValue(); },
            "baseamount": (o, n) => { (o as unknown as Quotedetail).baseamount = n.getNumberValue(); },
            "baseamount_base": (o, n) => { (o as unknown as Quotedetail).baseamount_base = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Quotedetail).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Quotedetail).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Quotedetail).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Quotedetail).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Quotedetail).exchangerate = n.getNumberValue(); },
            "extendedamount": (o, n) => { (o as unknown as Quotedetail).extendedamount = n.getNumberValue(); },
            "extendedamount_base": (o, n) => { (o as unknown as Quotedetail).extendedamount_base = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Quotedetail).importsequencenumber = n.getNumberValue(); },
            "ispriceoverridden": (o, n) => { (o as unknown as Quotedetail).ispriceoverridden = n.getBooleanValue(); },
            "isproductoverridden": (o, n) => { (o as unknown as Quotedetail).isproductoverridden = n.getBooleanValue(); },
            "lineitemnumber": (o, n) => { (o as unknown as Quotedetail).lineitemnumber = n.getNumberValue(); },
            "manualdiscountamount": (o, n) => { (o as unknown as Quotedetail).manualdiscountamount = n.getNumberValue(); },
            "manualdiscountamount_base": (o, n) => { (o as unknown as Quotedetail).manualdiscountamount_base = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Quotedetail).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Quotedetail).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Quotedetail).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_Agreement": (o, n) => { (o as unknown as Quotedetail).msdyn_Agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_billingmethod": (o, n) => { (o as unknown as Quotedetail).msdyn_billingmethod = n.getNumberValue(); },
            "msdyn_billingstartdate": (o, n) => { (o as unknown as Quotedetail).msdyn_billingstartdate = n.getDateValue(); },
            "msdyn_budgetamount": (o, n) => { (o as unknown as Quotedetail).msdyn_budgetamount = n.getNumberValue(); },
            "msdyn_budgetamount_base": (o, n) => { (o as unknown as Quotedetail).msdyn_budgetamount_base = n.getNumberValue(); },
            "msdyn_costamount": (o, n) => { (o as unknown as Quotedetail).msdyn_costamount = n.getNumberValue(); },
            "msdyn_costamount_base": (o, n) => { (o as unknown as Quotedetail).msdyn_costamount_base = n.getNumberValue(); },
            "msdyn_costpriceperunit": (o, n) => { (o as unknown as Quotedetail).msdyn_costpriceperunit = n.getNumberValue(); },
            "msdyn_costpriceperunit_base": (o, n) => { (o as unknown as Quotedetail).msdyn_costpriceperunit_base = n.getNumberValue(); },
            "msdyn_duration": (o, n) => { (o as unknown as Quotedetail).msdyn_duration = n.getNumberValue(); },
            "msdyn_enddate": (o, n) => { (o as unknown as Quotedetail).msdyn_enddate = n.getDateValue(); },
            "msdyn_estimatedcost": (o, n) => { (o as unknown as Quotedetail).msdyn_estimatedcost = n.getNumberValue(); },
            "msdyn_estimatedcost_base": (o, n) => { (o as unknown as Quotedetail).msdyn_estimatedcost_base = n.getNumberValue(); },
            "msdyn_estimatedmargin": (o, n) => { (o as unknown as Quotedetail).msdyn_estimatedmargin = n.getNumberValue(); },
            "msdyn_estimatedrevenue": (o, n) => { (o as unknown as Quotedetail).msdyn_estimatedrevenue = n.getNumberValue(); },
            "msdyn_estimatedrevenue_base": (o, n) => { (o as unknown as Quotedetail).msdyn_estimatedrevenue_base = n.getNumberValue(); },
            "msdyn_importdetailsfromagreement": (o, n) => { (o as unknown as Quotedetail).msdyn_importdetailsfromagreement = n.getBooleanValue(); },
            "msdyn_includeexpense": (o, n) => { (o as unknown as Quotedetail).msdyn_includeexpense = n.getBooleanValue(); },
            "msdyn_includefee": (o, n) => { (o as unknown as Quotedetail).msdyn_includefee = n.getBooleanValue(); },
            "msdyn_includematerial": (o, n) => { (o as unknown as Quotedetail).msdyn_includematerial = n.getBooleanValue(); },
            "msdyn_includetime": (o, n) => { (o as unknown as Quotedetail).msdyn_includetime = n.getBooleanValue(); },
            "msdyn_invoicefrequency": (o, n) => { (o as unknown as Quotedetail).msdyn_invoicefrequency = n.getObjectValue<Msdyn_invoicefrequency>(createMsdyn_invoicefrequencyFromDiscriminatorValue); },
            "msdyn_linedescription": (o, n) => { (o as unknown as Quotedetail).msdyn_linedescription = n.getStringValue(); },
            "msdyn_linetype": (o, n) => { (o as unknown as Quotedetail).msdyn_linetype = n.getNumberValue(); },
            "msdyn_opportunityline": (o, n) => { (o as unknown as Quotedetail).msdyn_opportunityline = n.getStringValue(); },
            "msdyn_PriceList": (o, n) => { (o as unknown as Quotedetail).msdyn_PriceList = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_Project": (o, n) => { (o as unknown as Quotedetail).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_quotedetail_msdyn_quotebookingsetup": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_msdyn_quotebookingsetup = n.getCollectionOfObjectValues<Msdyn_quotebookingsetup>(createMsdyn_quotebookingsetupFromDiscriminatorValue); },
            "msdyn_quotedetail_msdyn_quotelineinvoiceschedu": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_msdyn_quotelineinvoiceschedu = n.getCollectionOfObjectValues<Msdyn_quotelineinvoiceschedule>(createMsdyn_quotelineinvoicescheduleFromDiscriminatorValue); },
            "msdyn_quotedetail_msdyn_quotelineresourcecatego": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_msdyn_quotelineresourcecatego = n.getCollectionOfObjectValues<Msdyn_quotelineresourcecategory>(createMsdyn_quotelineresourcecategoryFromDiscriminatorValue); },
            "msdyn_quotedetail_msdyn_quotelinescheduleofv": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_msdyn_quotelinescheduleofv = n.getCollectionOfObjectValues<Msdyn_quotelinescheduleofvalue>(createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue); },
            "msdyn_quotedetail_msdyn_quotelinetransaction": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_msdyn_quotelinetransaction = n.getCollectionOfObjectValues<Msdyn_quotelinetransaction>(createMsdyn_quotelinetransactionFromDiscriminatorValue); },
            "msdyn_quotedetail_msdyn_quotelinetransactioncat": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_msdyn_quotelinetransactioncat = n.getCollectionOfObjectValues<Msdyn_quotelinetransactioncategory>(createMsdyn_quotelinetransactioncategoryFromDiscriminatorValue); },
            "msdyn_quotedetail_msdyn_quotelinetransactioncla": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_msdyn_quotelinetransactioncla = n.getCollectionOfObjectValues<Msdyn_quotelinetransactionclassification>(createMsdyn_quotelinetransactionclassificationFromDiscriminatorValue); },
            "msdyn_quotedetail_salesorderdetail": (o, n) => { (o as unknown as Quotedetail).msdyn_quotedetail_salesorderdetail = n.getCollectionOfObjectValues<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_SalesTaxCode": (o, n) => { (o as unknown as Quotedetail).msdyn_SalesTaxCode = n.getObjectValue<Msdyn_taxcode>(createMsdyn_taxcodeFromDiscriminatorValue); },
            "msdyn_ServiceAccount": (o, n) => { (o as unknown as Quotedetail).msdyn_ServiceAccount = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_ServiceTerritory": (o, n) => { (o as unknown as Quotedetail).msdyn_ServiceTerritory = n.getObjectValue<Territory>(createTerritoryFromDiscriminatorValue); },
            "msdyn_startdate": (o, n) => { (o as unknown as Quotedetail).msdyn_startdate = n.getDateValue(); },
            "msdyn_taxable": (o, n) => { (o as unknown as Quotedetail).msdyn_taxable = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Quotedetail).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Quotedetail).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Quotedetail).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentbundleid": (o, n) => { (o as unknown as Quotedetail).parentbundleid = n.getStringValue(); },
            "parentbundleid_quotedetail": (o, n) => { (o as unknown as Quotedetail).parentbundleid_quotedetail = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "parentbundleidref_quotedetail": (o, n) => { (o as unknown as Quotedetail).parentbundleidref_quotedetail = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "priceperunit": (o, n) => { (o as unknown as Quotedetail).priceperunit = n.getNumberValue(); },
            "priceperunit_base": (o, n) => { (o as unknown as Quotedetail).priceperunit_base = n.getNumberValue(); },
            "pricingerrorcode": (o, n) => { (o as unknown as Quotedetail).pricingerrorcode = n.getNumberValue(); },
            "productassociationid": (o, n) => { (o as unknown as Quotedetail).productassociationid = n.getStringValue(); },
            "productassociationid_productassociation": (o, n) => { (o as unknown as Quotedetail).productassociationid_productassociation = n.getObjectValue<Productassociation>(createProductassociationFromDiscriminatorValue); },
            "productdescription": (o, n) => { (o as unknown as Quotedetail).productdescription = n.getStringValue(); },
            "productid": (o, n) => { (o as unknown as Quotedetail).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productname": (o, n) => { (o as unknown as Quotedetail).productname = n.getStringValue(); },
            "productnumber": (o, n) => { (o as unknown as Quotedetail).productnumber = n.getStringValue(); },
            "producttypecode": (o, n) => { (o as unknown as Quotedetail).producttypecode = n.getNumberValue(); },
            "propertyconfigurationstatus": (o, n) => { (o as unknown as Quotedetail).propertyconfigurationstatus = n.getNumberValue(); },
            "quantity": (o, n) => { (o as unknown as Quotedetail).quantity = n.getNumberValue(); },
            "quoteDetail_AsyncOperations": (o, n) => { (o as unknown as Quotedetail).quoteDetail_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "quoteDetail_BulkDeleteFailures": (o, n) => { (o as unknown as Quotedetail).quoteDetail_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "quoteDetail_Dynamicpropertyinstance": (o, n) => { (o as unknown as Quotedetail).quoteDetail_Dynamicpropertyinstance = n.getCollectionOfObjectValues<Dynamicpropertyinstance>(createDynamicpropertyinstanceFromDiscriminatorValue); },
            "quotedetail_MailboxTrackingFolders": (o, n) => { (o as unknown as Quotedetail).quotedetail_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "quotedetail_parent_quotedetail": (o, n) => { (o as unknown as Quotedetail).quotedetail_parent_quotedetail = n.getCollectionOfObjectValues<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "quotedetail_parentref_quotedetail": (o, n) => { (o as unknown as Quotedetail).quotedetail_parentref_quotedetail = n.getCollectionOfObjectValues<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "quotedetail_principalobjectattributeaccess": (o, n) => { (o as unknown as Quotedetail).quotedetail_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "quoteDetail_ProcessSessions": (o, n) => { (o as unknown as Quotedetail).quoteDetail_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "quoteDetail_SyncErrors": (o, n) => { (o as unknown as Quotedetail).quoteDetail_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "quotedetailid": (o, n) => { (o as unknown as Quotedetail).quotedetailid = n.getStringValue(); },
            "quotedetailname": (o, n) => { (o as unknown as Quotedetail).quotedetailname = n.getStringValue(); },
            "quoteid": (o, n) => { (o as unknown as Quotedetail).quoteid = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "quotestatecode": (o, n) => { (o as unknown as Quotedetail).quotestatecode = n.getNumberValue(); },
            "requestdeliveryby": (o, n) => { (o as unknown as Quotedetail).requestdeliveryby = n.getDateValue(); },
            "salesrepid": (o, n) => { (o as unknown as Quotedetail).salesrepid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "sequencenumber": (o, n) => { (o as unknown as Quotedetail).sequencenumber = n.getNumberValue(); },
            "shipto_addressid": (o, n) => { (o as unknown as Quotedetail).shipto_addressid = n.getStringValue(); },
            "shipto_city": (o, n) => { (o as unknown as Quotedetail).shipto_city = n.getStringValue(); },
            "shipto_contactname": (o, n) => { (o as unknown as Quotedetail).shipto_contactname = n.getStringValue(); },
            "shipto_country": (o, n) => { (o as unknown as Quotedetail).shipto_country = n.getStringValue(); },
            "shipto_fax": (o, n) => { (o as unknown as Quotedetail).shipto_fax = n.getStringValue(); },
            "shipto_freighttermscode": (o, n) => { (o as unknown as Quotedetail).shipto_freighttermscode = n.getNumberValue(); },
            "shipto_line1": (o, n) => { (o as unknown as Quotedetail).shipto_line1 = n.getStringValue(); },
            "shipto_line2": (o, n) => { (o as unknown as Quotedetail).shipto_line2 = n.getStringValue(); },
            "shipto_line3": (o, n) => { (o as unknown as Quotedetail).shipto_line3 = n.getStringValue(); },
            "shipto_name": (o, n) => { (o as unknown as Quotedetail).shipto_name = n.getStringValue(); },
            "shipto_postalcode": (o, n) => { (o as unknown as Quotedetail).shipto_postalcode = n.getStringValue(); },
            "shipto_stateorprovince": (o, n) => { (o as unknown as Quotedetail).shipto_stateorprovince = n.getStringValue(); },
            "shipto_telephone": (o, n) => { (o as unknown as Quotedetail).shipto_telephone = n.getStringValue(); },
            "skippricecalculation": (o, n) => { (o as unknown as Quotedetail).skippricecalculation = n.getNumberValue(); },
            "tax": (o, n) => { (o as unknown as Quotedetail).tax = n.getNumberValue(); },
            "tax_base": (o, n) => { (o as unknown as Quotedetail).tax_base = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Quotedetail).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Quotedetail).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uomid": (o, n) => { (o as unknown as Quotedetail).uomid = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Quotedetail).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Quotedetail).versionnumber = n.getNumberValue(); },
            "volumediscountamount": (o, n) => { (o as unknown as Quotedetail).volumediscountamount = n.getNumberValue(); },
            "volumediscountamount_base": (o, n) => { (o as unknown as Quotedetail).volumediscountamount_base = n.getNumberValue(); },
            "willcall": (o, n) => { (o as unknown as Quotedetail).willcall = n.getBooleanValue(); },
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
     * Gets the msdyn_Agreement property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_Agreement() {
        return this._msdyn_Agreement;
    };
    /**
     * Sets the msdyn_Agreement property value. 
     * @param value Value to set for the msdyn_Agreement property.
     */
    public set msdyn_Agreement(value: Msdyn_agreement | undefined) {
        this._msdyn_Agreement = value;
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
     * Gets the msdyn_duration property value. 
     * @returns a integer
     */
    public get msdyn_duration() {
        return this._msdyn_duration;
    };
    /**
     * Sets the msdyn_duration property value. 
     * @param value Value to set for the msdyn_duration property.
     */
    public set msdyn_duration(value: number | undefined) {
        this._msdyn_duration = value;
    };
    /**
     * Gets the msdyn_enddate property value. 
     * @returns a Date
     */
    public get msdyn_enddate() {
        return this._msdyn_enddate;
    };
    /**
     * Sets the msdyn_enddate property value. 
     * @param value Value to set for the msdyn_enddate property.
     */
    public set msdyn_enddate(value: Date | undefined) {
        this._msdyn_enddate = value;
    };
    /**
     * Gets the msdyn_estimatedcost property value. 
     * @returns a int64
     */
    public get msdyn_estimatedcost() {
        return this._msdyn_estimatedcost;
    };
    /**
     * Sets the msdyn_estimatedcost property value. 
     * @param value Value to set for the msdyn_estimatedcost property.
     */
    public set msdyn_estimatedcost(value: number | undefined) {
        this._msdyn_estimatedcost = value;
    };
    /**
     * Gets the msdyn_estimatedcost_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedcost_base() {
        return this._msdyn_estimatedcost_base;
    };
    /**
     * Sets the msdyn_estimatedcost_base property value. 
     * @param value Value to set for the msdyn_estimatedcost_base property.
     */
    public set msdyn_estimatedcost_base(value: number | undefined) {
        this._msdyn_estimatedcost_base = value;
    };
    /**
     * Gets the msdyn_estimatedmargin property value. 
     * @returns a int64
     */
    public get msdyn_estimatedmargin() {
        return this._msdyn_estimatedmargin;
    };
    /**
     * Sets the msdyn_estimatedmargin property value. 
     * @param value Value to set for the msdyn_estimatedmargin property.
     */
    public set msdyn_estimatedmargin(value: number | undefined) {
        this._msdyn_estimatedmargin = value;
    };
    /**
     * Gets the msdyn_estimatedrevenue property value. 
     * @returns a int64
     */
    public get msdyn_estimatedrevenue() {
        return this._msdyn_estimatedrevenue;
    };
    /**
     * Sets the msdyn_estimatedrevenue property value. 
     * @param value Value to set for the msdyn_estimatedrevenue property.
     */
    public set msdyn_estimatedrevenue(value: number | undefined) {
        this._msdyn_estimatedrevenue = value;
    };
    /**
     * Gets the msdyn_estimatedrevenue_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedrevenue_base() {
        return this._msdyn_estimatedrevenue_base;
    };
    /**
     * Sets the msdyn_estimatedrevenue_base property value. 
     * @param value Value to set for the msdyn_estimatedrevenue_base property.
     */
    public set msdyn_estimatedrevenue_base(value: number | undefined) {
        this._msdyn_estimatedrevenue_base = value;
    };
    /**
     * Gets the msdyn_importdetailsfromagreement property value. 
     * @returns a boolean
     */
    public get msdyn_importdetailsfromagreement() {
        return this._msdyn_importdetailsfromagreement;
    };
    /**
     * Sets the msdyn_importdetailsfromagreement property value. 
     * @param value Value to set for the msdyn_importdetailsfromagreement property.
     */
    public set msdyn_importdetailsfromagreement(value: boolean | undefined) {
        this._msdyn_importdetailsfromagreement = value;
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
     * Gets the msdyn_linedescription property value. 
     * @returns a string
     */
    public get msdyn_linedescription() {
        return this._msdyn_linedescription;
    };
    /**
     * Sets the msdyn_linedescription property value. 
     * @param value Value to set for the msdyn_linedescription property.
     */
    public set msdyn_linedescription(value: string | undefined) {
        this._msdyn_linedescription = value;
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
     * Gets the msdyn_opportunityline property value. 
     * @returns a string
     */
    public get msdyn_opportunityline() {
        return this._msdyn_opportunityline;
    };
    /**
     * Sets the msdyn_opportunityline property value. 
     * @param value Value to set for the msdyn_opportunityline property.
     */
    public set msdyn_opportunityline(value: string | undefined) {
        this._msdyn_opportunityline = value;
    };
    /**
     * Gets the msdyn_PriceList property value. 
     * @returns a pricelevel
     */
    public get msdyn_PriceList() {
        return this._msdyn_PriceList;
    };
    /**
     * Sets the msdyn_PriceList property value. 
     * @param value Value to set for the msdyn_PriceList property.
     */
    public set msdyn_PriceList(value: Pricelevel | undefined) {
        this._msdyn_PriceList = value;
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
     * Gets the msdyn_quotedetail_msdyn_quotebookingsetup property value. 
     * @returns a msdyn_quotebookingsetup
     */
    public get msdyn_quotedetail_msdyn_quotebookingsetup() {
        return this._msdyn_quotedetail_msdyn_quotebookingsetup;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotebookingsetup property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotebookingsetup property.
     */
    public set msdyn_quotedetail_msdyn_quotebookingsetup(value: Msdyn_quotebookingsetup[] | undefined) {
        this._msdyn_quotedetail_msdyn_quotebookingsetup = value;
    };
    /**
     * Gets the msdyn_quotedetail_msdyn_quotelineinvoiceschedu property value. 
     * @returns a msdyn_quotelineinvoiceschedule
     */
    public get msdyn_quotedetail_msdyn_quotelineinvoiceschedu() {
        return this._msdyn_quotedetail_msdyn_quotelineinvoiceschedu;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotelineinvoiceschedu property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotelineinvoiceschedu property.
     */
    public set msdyn_quotedetail_msdyn_quotelineinvoiceschedu(value: Msdyn_quotelineinvoiceschedule[] | undefined) {
        this._msdyn_quotedetail_msdyn_quotelineinvoiceschedu = value;
    };
    /**
     * Gets the msdyn_quotedetail_msdyn_quotelineresourcecatego property value. 
     * @returns a msdyn_quotelineresourcecategory
     */
    public get msdyn_quotedetail_msdyn_quotelineresourcecatego() {
        return this._msdyn_quotedetail_msdyn_quotelineresourcecatego;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotelineresourcecatego property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotelineresourcecatego property.
     */
    public set msdyn_quotedetail_msdyn_quotelineresourcecatego(value: Msdyn_quotelineresourcecategory[] | undefined) {
        this._msdyn_quotedetail_msdyn_quotelineresourcecatego = value;
    };
    /**
     * Gets the msdyn_quotedetail_msdyn_quotelinescheduleofv property value. 
     * @returns a msdyn_quotelinescheduleofvalue
     */
    public get msdyn_quotedetail_msdyn_quotelinescheduleofv() {
        return this._msdyn_quotedetail_msdyn_quotelinescheduleofv;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotelinescheduleofv property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotelinescheduleofv property.
     */
    public set msdyn_quotedetail_msdyn_quotelinescheduleofv(value: Msdyn_quotelinescheduleofvalue[] | undefined) {
        this._msdyn_quotedetail_msdyn_quotelinescheduleofv = value;
    };
    /**
     * Gets the msdyn_quotedetail_msdyn_quotelinetransaction property value. 
     * @returns a msdyn_quotelinetransaction
     */
    public get msdyn_quotedetail_msdyn_quotelinetransaction() {
        return this._msdyn_quotedetail_msdyn_quotelinetransaction;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotelinetransaction property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotelinetransaction property.
     */
    public set msdyn_quotedetail_msdyn_quotelinetransaction(value: Msdyn_quotelinetransaction[] | undefined) {
        this._msdyn_quotedetail_msdyn_quotelinetransaction = value;
    };
    /**
     * Gets the msdyn_quotedetail_msdyn_quotelinetransactioncat property value. 
     * @returns a msdyn_quotelinetransactioncategory
     */
    public get msdyn_quotedetail_msdyn_quotelinetransactioncat() {
        return this._msdyn_quotedetail_msdyn_quotelinetransactioncat;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotelinetransactioncat property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotelinetransactioncat property.
     */
    public set msdyn_quotedetail_msdyn_quotelinetransactioncat(value: Msdyn_quotelinetransactioncategory[] | undefined) {
        this._msdyn_quotedetail_msdyn_quotelinetransactioncat = value;
    };
    /**
     * Gets the msdyn_quotedetail_msdyn_quotelinetransactioncla property value. 
     * @returns a msdyn_quotelinetransactionclassification
     */
    public get msdyn_quotedetail_msdyn_quotelinetransactioncla() {
        return this._msdyn_quotedetail_msdyn_quotelinetransactioncla;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotelinetransactioncla property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotelinetransactioncla property.
     */
    public set msdyn_quotedetail_msdyn_quotelinetransactioncla(value: Msdyn_quotelinetransactionclassification[] | undefined) {
        this._msdyn_quotedetail_msdyn_quotelinetransactioncla = value;
    };
    /**
     * Gets the msdyn_quotedetail_salesorderdetail property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_quotedetail_salesorderdetail() {
        return this._msdyn_quotedetail_salesorderdetail;
    };
    /**
     * Sets the msdyn_quotedetail_salesorderdetail property value. 
     * @param value Value to set for the msdyn_quotedetail_salesorderdetail property.
     */
    public set msdyn_quotedetail_salesorderdetail(value: Salesorderdetail[] | undefined) {
        this._msdyn_quotedetail_salesorderdetail = value;
    };
    /**
     * Gets the msdyn_SalesTaxCode property value. 
     * @returns a msdyn_taxcode
     */
    public get msdyn_SalesTaxCode() {
        return this._msdyn_SalesTaxCode;
    };
    /**
     * Sets the msdyn_SalesTaxCode property value. 
     * @param value Value to set for the msdyn_SalesTaxCode property.
     */
    public set msdyn_SalesTaxCode(value: Msdyn_taxcode | undefined) {
        this._msdyn_SalesTaxCode = value;
    };
    /**
     * Gets the msdyn_ServiceAccount property value. 
     * @returns a account
     */
    public get msdyn_ServiceAccount() {
        return this._msdyn_ServiceAccount;
    };
    /**
     * Sets the msdyn_ServiceAccount property value. 
     * @param value Value to set for the msdyn_ServiceAccount property.
     */
    public set msdyn_ServiceAccount(value: Account | undefined) {
        this._msdyn_ServiceAccount = value;
    };
    /**
     * Gets the msdyn_ServiceTerritory property value. 
     * @returns a territory
     */
    public get msdyn_ServiceTerritory() {
        return this._msdyn_ServiceTerritory;
    };
    /**
     * Sets the msdyn_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_ServiceTerritory property.
     */
    public set msdyn_ServiceTerritory(value: Territory | undefined) {
        this._msdyn_ServiceTerritory = value;
    };
    /**
     * Gets the msdyn_startdate property value. 
     * @returns a Date
     */
    public get msdyn_startdate() {
        return this._msdyn_startdate;
    };
    /**
     * Sets the msdyn_startdate property value. 
     * @param value Value to set for the msdyn_startdate property.
     */
    public set msdyn_startdate(value: Date | undefined) {
        this._msdyn_startdate = value;
    };
    /**
     * Gets the msdyn_taxable property value. 
     * @returns a boolean
     */
    public get msdyn_taxable() {
        return this._msdyn_taxable;
    };
    /**
     * Sets the msdyn_taxable property value. 
     * @param value Value to set for the msdyn_taxable property.
     */
    public set msdyn_taxable(value: boolean | undefined) {
        this._msdyn_taxable = value;
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
     * Gets the parentbundleid_quotedetail property value. 
     * @returns a quotedetail
     */
    public get parentbundleid_quotedetail() {
        return this._parentbundleid_quotedetail;
    };
    /**
     * Sets the parentbundleid_quotedetail property value. 
     * @param value Value to set for the parentbundleid_quotedetail property.
     */
    public set parentbundleid_quotedetail(value: Quotedetail | undefined) {
        this._parentbundleid_quotedetail = value;
    };
    /**
     * Gets the parentbundleidref_quotedetail property value. 
     * @returns a quotedetail
     */
    public get parentbundleidref_quotedetail() {
        return this._parentbundleidref_quotedetail;
    };
    /**
     * Sets the parentbundleidref_quotedetail property value. 
     * @param value Value to set for the parentbundleidref_quotedetail property.
     */
    public set parentbundleidref_quotedetail(value: Quotedetail | undefined) {
        this._parentbundleidref_quotedetail = value;
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
     * Gets the quoteDetail_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get quoteDetail_AsyncOperations() {
        return this._quoteDetail_AsyncOperations;
    };
    /**
     * Sets the quoteDetail_AsyncOperations property value. 
     * @param value Value to set for the QuoteDetail_AsyncOperations property.
     */
    public set quoteDetail_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._quoteDetail_AsyncOperations = value;
    };
    /**
     * Gets the quoteDetail_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get quoteDetail_BulkDeleteFailures() {
        return this._quoteDetail_BulkDeleteFailures;
    };
    /**
     * Sets the quoteDetail_BulkDeleteFailures property value. 
     * @param value Value to set for the QuoteDetail_BulkDeleteFailures property.
     */
    public set quoteDetail_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._quoteDetail_BulkDeleteFailures = value;
    };
    /**
     * Gets the quoteDetail_Dynamicpropertyinstance property value. 
     * @returns a dynamicpropertyinstance
     */
    public get quoteDetail_Dynamicpropertyinstance() {
        return this._quoteDetail_Dynamicpropertyinstance;
    };
    /**
     * Sets the quoteDetail_Dynamicpropertyinstance property value. 
     * @param value Value to set for the QuoteDetail_Dynamicpropertyinstance property.
     */
    public set quoteDetail_Dynamicpropertyinstance(value: Dynamicpropertyinstance[] | undefined) {
        this._quoteDetail_Dynamicpropertyinstance = value;
    };
    /**
     * Gets the quotedetail_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get quotedetail_MailboxTrackingFolders() {
        return this._quotedetail_MailboxTrackingFolders;
    };
    /**
     * Sets the quotedetail_MailboxTrackingFolders property value. 
     * @param value Value to set for the quotedetail_MailboxTrackingFolders property.
     */
    public set quotedetail_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._quotedetail_MailboxTrackingFolders = value;
    };
    /**
     * Gets the quotedetail_parent_quotedetail property value. 
     * @returns a quotedetail
     */
    public get quotedetail_parent_quotedetail() {
        return this._quotedetail_parent_quotedetail;
    };
    /**
     * Sets the quotedetail_parent_quotedetail property value. 
     * @param value Value to set for the quotedetail_parent_quotedetail property.
     */
    public set quotedetail_parent_quotedetail(value: Quotedetail[] | undefined) {
        this._quotedetail_parent_quotedetail = value;
    };
    /**
     * Gets the quotedetail_parentref_quotedetail property value. 
     * @returns a quotedetail
     */
    public get quotedetail_parentref_quotedetail() {
        return this._quotedetail_parentref_quotedetail;
    };
    /**
     * Sets the quotedetail_parentref_quotedetail property value. 
     * @param value Value to set for the quotedetail_parentref_quotedetail property.
     */
    public set quotedetail_parentref_quotedetail(value: Quotedetail[] | undefined) {
        this._quotedetail_parentref_quotedetail = value;
    };
    /**
     * Gets the quotedetail_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get quotedetail_principalobjectattributeaccess() {
        return this._quotedetail_principalobjectattributeaccess;
    };
    /**
     * Sets the quotedetail_principalobjectattributeaccess property value. 
     * @param value Value to set for the quotedetail_principalobjectattributeaccess property.
     */
    public set quotedetail_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._quotedetail_principalobjectattributeaccess = value;
    };
    /**
     * Gets the quoteDetail_ProcessSessions property value. 
     * @returns a processsession
     */
    public get quoteDetail_ProcessSessions() {
        return this._quoteDetail_ProcessSessions;
    };
    /**
     * Sets the quoteDetail_ProcessSessions property value. 
     * @param value Value to set for the QuoteDetail_ProcessSessions property.
     */
    public set quoteDetail_ProcessSessions(value: Processsession[] | undefined) {
        this._quoteDetail_ProcessSessions = value;
    };
    /**
     * Gets the quoteDetail_SyncErrors property value. 
     * @returns a syncerror
     */
    public get quoteDetail_SyncErrors() {
        return this._quoteDetail_SyncErrors;
    };
    /**
     * Sets the quoteDetail_SyncErrors property value. 
     * @param value Value to set for the QuoteDetail_SyncErrors property.
     */
    public set quoteDetail_SyncErrors(value: Syncerror[] | undefined) {
        this._quoteDetail_SyncErrors = value;
    };
    /**
     * Gets the quotedetailid property value. 
     * @returns a string
     */
    public get quotedetailid() {
        return this._quotedetailid;
    };
    /**
     * Sets the quotedetailid property value. 
     * @param value Value to set for the quotedetailid property.
     */
    public set quotedetailid(value: string | undefined) {
        this._quotedetailid = value;
    };
    /**
     * Gets the quotedetailname property value. 
     * @returns a string
     */
    public get quotedetailname() {
        return this._quotedetailname;
    };
    /**
     * Sets the quotedetailname property value. 
     * @param value Value to set for the quotedetailname property.
     */
    public set quotedetailname(value: string | undefined) {
        this._quotedetailname = value;
    };
    /**
     * Gets the quoteid property value. 
     * @returns a quote
     */
    public get quoteid() {
        return this._quoteid;
    };
    /**
     * Sets the quoteid property value. 
     * @param value Value to set for the quoteid property.
     */
    public set quoteid(value: Quote | undefined) {
        this._quoteid = value;
    };
    /**
     * Gets the quotestatecode property value. 
     * @returns a integer
     */
    public get quotestatecode() {
        return this._quotestatecode;
    };
    /**
     * Sets the quotestatecode property value. 
     * @param value Value to set for the quotestatecode property.
     */
    public set quotestatecode(value: number | undefined) {
        this._quotestatecode = value;
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
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_salestaxcode_value", this._msdyn_salestaxcode_value);
        writer.writeStringValue("_msdyn_serviceaccount_value", this._msdyn_serviceaccount_value);
        writer.writeStringValue("_msdyn_serviceterritory_value", this._msdyn_serviceterritory_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentbundleidref_value", this._parentbundleidref_value);
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_quoteid_value", this._quoteid_value);
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
        writer.writeBooleanValue("ispriceoverridden", this.ispriceoverridden);
        writer.writeBooleanValue("isproductoverridden", this.isproductoverridden);
        writer.writeNumberValue("lineitemnumber", this.lineitemnumber);
        writer.writeNumberValue("manualdiscountamount", this.manualdiscountamount);
        writer.writeNumberValue("manualdiscountamount_base", this.manualdiscountamount_base);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_agreement>("msdyn_Agreement", this.msdyn_Agreement);
        writer.writeNumberValue("msdyn_billingmethod", this.msdyn_billingmethod);
        writer.writeDateValue("msdyn_billingstartdate", this.msdyn_billingstartdate);
        writer.writeNumberValue("msdyn_budgetamount", this.msdyn_budgetamount);
        writer.writeNumberValue("msdyn_budgetamount_base", this.msdyn_budgetamount_base);
        writer.writeNumberValue("msdyn_costamount", this.msdyn_costamount);
        writer.writeNumberValue("msdyn_costamount_base", this.msdyn_costamount_base);
        writer.writeNumberValue("msdyn_costpriceperunit", this.msdyn_costpriceperunit);
        writer.writeNumberValue("msdyn_costpriceperunit_base", this.msdyn_costpriceperunit_base);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeDateValue("msdyn_enddate", this.msdyn_enddate);
        writer.writeNumberValue("msdyn_estimatedcost", this.msdyn_estimatedcost);
        writer.writeNumberValue("msdyn_estimatedcost_base", this.msdyn_estimatedcost_base);
        writer.writeNumberValue("msdyn_estimatedmargin", this.msdyn_estimatedmargin);
        writer.writeNumberValue("msdyn_estimatedrevenue", this.msdyn_estimatedrevenue);
        writer.writeNumberValue("msdyn_estimatedrevenue_base", this.msdyn_estimatedrevenue_base);
        writer.writeBooleanValue("msdyn_importdetailsfromagreement", this.msdyn_importdetailsfromagreement);
        writer.writeBooleanValue("msdyn_includeexpense", this.msdyn_includeexpense);
        writer.writeBooleanValue("msdyn_includefee", this.msdyn_includefee);
        writer.writeBooleanValue("msdyn_includematerial", this.msdyn_includematerial);
        writer.writeBooleanValue("msdyn_includetime", this.msdyn_includetime);
        writer.writeObjectValue<Msdyn_invoicefrequency>("msdyn_invoicefrequency", this.msdyn_invoicefrequency);
        writer.writeStringValue("msdyn_linedescription", this.msdyn_linedescription);
        writer.writeNumberValue("msdyn_linetype", this.msdyn_linetype);
        writer.writeStringValue("msdyn_opportunityline", this.msdyn_opportunityline);
        writer.writeObjectValue<Pricelevel>("msdyn_PriceList", this.msdyn_PriceList);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeCollectionOfObjectValues<Msdyn_quotebookingsetup>("msdyn_quotedetail_msdyn_quotebookingsetup", this.msdyn_quotedetail_msdyn_quotebookingsetup);
        writer.writeCollectionOfObjectValues<Msdyn_quotelineinvoiceschedule>("msdyn_quotedetail_msdyn_quotelineinvoiceschedu", this.msdyn_quotedetail_msdyn_quotelineinvoiceschedu);
        writer.writeCollectionOfObjectValues<Msdyn_quotelineresourcecategory>("msdyn_quotedetail_msdyn_quotelineresourcecatego", this.msdyn_quotedetail_msdyn_quotelineresourcecatego);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinescheduleofvalue>("msdyn_quotedetail_msdyn_quotelinescheduleofv", this.msdyn_quotedetail_msdyn_quotelinescheduleofv);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransaction>("msdyn_quotedetail_msdyn_quotelinetransaction", this.msdyn_quotedetail_msdyn_quotelinetransaction);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransactioncategory>("msdyn_quotedetail_msdyn_quotelinetransactioncat", this.msdyn_quotedetail_msdyn_quotelinetransactioncat);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransactionclassification>("msdyn_quotedetail_msdyn_quotelinetransactioncla", this.msdyn_quotedetail_msdyn_quotelinetransactioncla);
        writer.writeCollectionOfObjectValues<Salesorderdetail>("msdyn_quotedetail_salesorderdetail", this.msdyn_quotedetail_salesorderdetail);
        writer.writeObjectValue<Msdyn_taxcode>("msdyn_SalesTaxCode", this.msdyn_SalesTaxCode);
        writer.writeObjectValue<Account>("msdyn_ServiceAccount", this.msdyn_ServiceAccount);
        writer.writeObjectValue<Territory>("msdyn_ServiceTerritory", this.msdyn_ServiceTerritory);
        writer.writeDateValue("msdyn_startdate", this.msdyn_startdate);
        writer.writeBooleanValue("msdyn_taxable", this.msdyn_taxable);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("parentbundleid", this.parentbundleid);
        writer.writeObjectValue<Quotedetail>("parentbundleid_quotedetail", this.parentbundleid_quotedetail);
        writer.writeObjectValue<Quotedetail>("parentbundleidref_quotedetail", this.parentbundleidref_quotedetail);
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("quoteDetail_AsyncOperations", this.quoteDetail_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("quoteDetail_BulkDeleteFailures", this.quoteDetail_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Dynamicpropertyinstance>("quoteDetail_Dynamicpropertyinstance", this.quoteDetail_Dynamicpropertyinstance);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("quotedetail_MailboxTrackingFolders", this.quotedetail_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Quotedetail>("quotedetail_parent_quotedetail", this.quotedetail_parent_quotedetail);
        writer.writeCollectionOfObjectValues<Quotedetail>("quotedetail_parentref_quotedetail", this.quotedetail_parentref_quotedetail);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("quotedetail_principalobjectattributeaccess", this.quotedetail_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("quoteDetail_ProcessSessions", this.quoteDetail_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("quoteDetail_SyncErrors", this.quoteDetail_SyncErrors);
        writer.writeStringValue("quotedetailid", this.quotedetailid);
        writer.writeStringValue("quotedetailname", this.quotedetailname);
        writer.writeObjectValue<Quote>("quoteid", this.quoteid);
        writer.writeNumberValue("quotestatecode", this.quotestatecode);
        writer.writeDateValue("requestdeliveryby", this.requestdeliveryby);
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
