import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyinstanceFromDiscriminatorValue} from './createDynamicpropertyinstanceFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOpportunityproductFromDiscriminatorValue} from './createOpportunityproductFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductassociationFromDiscriminatorValue} from './createProductassociationFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Account, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicpropertyinstance, Mailboxtrackingfolder, Msdyn_project, Opportunity, Pricelevel, Principalobjectattributeaccess, Processsession, Product, Productassociation, Syncerror, Systemuser, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Opportunityproduct extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_serviceaccount_value?: string | undefined;
    private __opportunityid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentbundleidref_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __uomid_value?: string | undefined;
    private _baseamount?: number | undefined;
    private _baseamount_base?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
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
    private _msdyn_billingmethod?: number | undefined;
    private _msdyn_budgetamount?: number | undefined;
    private _msdyn_budgetamount_base?: number | undefined;
    private _msdyn_costamount?: number | undefined;
    private _msdyn_costamount_base?: number | undefined;
    private _msdyn_costpriceperunit?: number | undefined;
    private _msdyn_costpriceperunit_base?: number | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_enddate?: Date | undefined;
    private _msdyn_linetype?: number | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_serviceaccount?: Account | undefined;
    private _msdyn_startdate?: Date | undefined;
    private _opportunityid?: Opportunity | undefined;
    private _opportunityProduct_AsyncOperations?: Asyncoperation[] | undefined;
    private _opportunityProduct_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _opportunityProduct_Dynamicpropertyinstance?: Dynamicpropertyinstance[] | undefined;
    private _opportunityproduct_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _opportunityproduct_parent_opportunityproduct?: Opportunityproduct[] | undefined;
    private _opportunityproduct_parentref_opportunityproduct?: Opportunityproduct[] | undefined;
    private _opportunityproduct_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _opportunityProduct_ProcessSessions?: Processsession[] | undefined;
    private _opportunityProduct_SyncErrors?: Syncerror[] | undefined;
    private _opportunityproductid?: string | undefined;
    private _opportunityproductname?: string | undefined;
    private _opportunitystatecode?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentbundleid?: string | undefined;
    private _parentbundleid_opportunityproduct?: Opportunityproduct | undefined;
    private _parentbundleidref_opportunityproduct?: Opportunityproduct | undefined;
    private _priceperunit?: number | undefined;
    private _priceperunit_base?: number | undefined;
    private _pricingerrorcode?: number | undefined;
    private _productassociationid?: string | undefined;
    private _productassociationid_productassociation?: Productassociation | undefined;
    private _productdescription?: string | undefined;
    private _productid?: Product | undefined;
    private _productname?: string | undefined;
    private _producttypecode?: number | undefined;
    private _propertyconfigurationstatus?: number | undefined;
    private _quantity?: number | undefined;
    private _sequencenumber?: number | undefined;
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
     * Gets the _opportunityid_value property value. 
     * @returns a string
     */
    public get _opportunityid_value() {
        return this.__opportunityid_value;
    };
    /**
     * Sets the _opportunityid_value property value. 
     * @param value Value to set for the _opportunityid_value property.
     */
    public set _opportunityid_value(value: string | undefined) {
        this.__opportunityid_value = value;
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
     * Instantiates a new opportunityproduct and sets the default values.
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
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Opportunityproduct)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Opportunityproduct)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Opportunityproduct)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Opportunityproduct)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Opportunityproduct)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Opportunityproduct)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_serviceaccount_value": (o, n) => { (o as unknown as Opportunityproduct)._msdyn_serviceaccount_value = n.getStringValue(); },
            "_opportunityid_value": (o, n) => { (o as unknown as Opportunityproduct)._opportunityid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Opportunityproduct)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Opportunityproduct)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Opportunityproduct)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Opportunityproduct)._owninguser_value = n.getStringValue(); },
            "_parentbundleidref_value": (o, n) => { (o as unknown as Opportunityproduct)._parentbundleidref_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Opportunityproduct)._productid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Opportunityproduct)._transactioncurrencyid_value = n.getStringValue(); },
            "_uomid_value": (o, n) => { (o as unknown as Opportunityproduct)._uomid_value = n.getStringValue(); },
            "baseamount": (o, n) => { (o as unknown as Opportunityproduct).baseamount = n.getNumberValue(); },
            "baseamount_base": (o, n) => { (o as unknown as Opportunityproduct).baseamount_base = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Opportunityproduct).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Opportunityproduct).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Opportunityproduct).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Opportunityproduct).description = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Opportunityproduct).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Opportunityproduct).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Opportunityproduct).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Opportunityproduct).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Opportunityproduct).exchangerate = n.getNumberValue(); },
            "extendedamount": (o, n) => { (o as unknown as Opportunityproduct).extendedamount = n.getNumberValue(); },
            "extendedamount_base": (o, n) => { (o as unknown as Opportunityproduct).extendedamount_base = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Opportunityproduct).importsequencenumber = n.getNumberValue(); },
            "ispriceoverridden": (o, n) => { (o as unknown as Opportunityproduct).ispriceoverridden = n.getBooleanValue(); },
            "isproductoverridden": (o, n) => { (o as unknown as Opportunityproduct).isproductoverridden = n.getBooleanValue(); },
            "lineitemnumber": (o, n) => { (o as unknown as Opportunityproduct).lineitemnumber = n.getNumberValue(); },
            "manualdiscountamount": (o, n) => { (o as unknown as Opportunityproduct).manualdiscountamount = n.getNumberValue(); },
            "manualdiscountamount_base": (o, n) => { (o as unknown as Opportunityproduct).manualdiscountamount_base = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Opportunityproduct).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Opportunityproduct).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Opportunityproduct).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_billingmethod": (o, n) => { (o as unknown as Opportunityproduct).msdyn_billingmethod = n.getNumberValue(); },
            "msdyn_budgetamount": (o, n) => { (o as unknown as Opportunityproduct).msdyn_budgetamount = n.getNumberValue(); },
            "msdyn_budgetamount_base": (o, n) => { (o as unknown as Opportunityproduct).msdyn_budgetamount_base = n.getNumberValue(); },
            "msdyn_costamount": (o, n) => { (o as unknown as Opportunityproduct).msdyn_costamount = n.getNumberValue(); },
            "msdyn_costamount_base": (o, n) => { (o as unknown as Opportunityproduct).msdyn_costamount_base = n.getNumberValue(); },
            "msdyn_costpriceperunit": (o, n) => { (o as unknown as Opportunityproduct).msdyn_costpriceperunit = n.getNumberValue(); },
            "msdyn_costpriceperunit_base": (o, n) => { (o as unknown as Opportunityproduct).msdyn_costpriceperunit_base = n.getNumberValue(); },
            "msdyn_duration": (o, n) => { (o as unknown as Opportunityproduct).msdyn_duration = n.getNumberValue(); },
            "msdyn_enddate": (o, n) => { (o as unknown as Opportunityproduct).msdyn_enddate = n.getDateValue(); },
            "msdyn_linetype": (o, n) => { (o as unknown as Opportunityproduct).msdyn_linetype = n.getNumberValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Opportunityproduct).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_Project": (o, n) => { (o as unknown as Opportunityproduct).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_serviceaccount": (o, n) => { (o as unknown as Opportunityproduct).msdyn_serviceaccount = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_startdate": (o, n) => { (o as unknown as Opportunityproduct).msdyn_startdate = n.getDateValue(); },
            "opportunityid": (o, n) => { (o as unknown as Opportunityproduct).opportunityid = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "opportunityProduct_AsyncOperations": (o, n) => { (o as unknown as Opportunityproduct).opportunityProduct_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "opportunityProduct_BulkDeleteFailures": (o, n) => { (o as unknown as Opportunityproduct).opportunityProduct_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "opportunityProduct_Dynamicpropertyinstance": (o, n) => { (o as unknown as Opportunityproduct).opportunityProduct_Dynamicpropertyinstance = n.getCollectionOfObjectValues<Dynamicpropertyinstance>(createDynamicpropertyinstanceFromDiscriminatorValue); },
            "opportunityproduct_MailboxTrackingFolders": (o, n) => { (o as unknown as Opportunityproduct).opportunityproduct_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "opportunityproduct_parent_opportunityproduct": (o, n) => { (o as unknown as Opportunityproduct).opportunityproduct_parent_opportunityproduct = n.getCollectionOfObjectValues<Opportunityproduct>(createOpportunityproductFromDiscriminatorValue); },
            "opportunityproduct_parentref_opportunityproduct": (o, n) => { (o as unknown as Opportunityproduct).opportunityproduct_parentref_opportunityproduct = n.getCollectionOfObjectValues<Opportunityproduct>(createOpportunityproductFromDiscriminatorValue); },
            "opportunityproduct_principalobjectattributeaccess": (o, n) => { (o as unknown as Opportunityproduct).opportunityproduct_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "opportunityProduct_ProcessSessions": (o, n) => { (o as unknown as Opportunityproduct).opportunityProduct_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "opportunityProduct_SyncErrors": (o, n) => { (o as unknown as Opportunityproduct).opportunityProduct_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "opportunityproductid": (o, n) => { (o as unknown as Opportunityproduct).opportunityproductid = n.getStringValue(); },
            "opportunityproductname": (o, n) => { (o as unknown as Opportunityproduct).opportunityproductname = n.getStringValue(); },
            "opportunitystatecode": (o, n) => { (o as unknown as Opportunityproduct).opportunitystatecode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Opportunityproduct).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Opportunityproduct).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Opportunityproduct).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentbundleid": (o, n) => { (o as unknown as Opportunityproduct).parentbundleid = n.getStringValue(); },
            "parentbundleid_opportunityproduct": (o, n) => { (o as unknown as Opportunityproduct).parentbundleid_opportunityproduct = n.getObjectValue<Opportunityproduct>(createOpportunityproductFromDiscriminatorValue); },
            "parentbundleidref_opportunityproduct": (o, n) => { (o as unknown as Opportunityproduct).parentbundleidref_opportunityproduct = n.getObjectValue<Opportunityproduct>(createOpportunityproductFromDiscriminatorValue); },
            "priceperunit": (o, n) => { (o as unknown as Opportunityproduct).priceperunit = n.getNumberValue(); },
            "priceperunit_base": (o, n) => { (o as unknown as Opportunityproduct).priceperunit_base = n.getNumberValue(); },
            "pricingerrorcode": (o, n) => { (o as unknown as Opportunityproduct).pricingerrorcode = n.getNumberValue(); },
            "productassociationid": (o, n) => { (o as unknown as Opportunityproduct).productassociationid = n.getStringValue(); },
            "productassociationid_productassociation": (o, n) => { (o as unknown as Opportunityproduct).productassociationid_productassociation = n.getObjectValue<Productassociation>(createProductassociationFromDiscriminatorValue); },
            "productdescription": (o, n) => { (o as unknown as Opportunityproduct).productdescription = n.getStringValue(); },
            "productid": (o, n) => { (o as unknown as Opportunityproduct).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productname": (o, n) => { (o as unknown as Opportunityproduct).productname = n.getStringValue(); },
            "producttypecode": (o, n) => { (o as unknown as Opportunityproduct).producttypecode = n.getNumberValue(); },
            "propertyconfigurationstatus": (o, n) => { (o as unknown as Opportunityproduct).propertyconfigurationstatus = n.getNumberValue(); },
            "quantity": (o, n) => { (o as unknown as Opportunityproduct).quantity = n.getNumberValue(); },
            "sequencenumber": (o, n) => { (o as unknown as Opportunityproduct).sequencenumber = n.getNumberValue(); },
            "skippricecalculation": (o, n) => { (o as unknown as Opportunityproduct).skippricecalculation = n.getNumberValue(); },
            "tax": (o, n) => { (o as unknown as Opportunityproduct).tax = n.getNumberValue(); },
            "tax_base": (o, n) => { (o as unknown as Opportunityproduct).tax_base = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Opportunityproduct).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Opportunityproduct).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uomid": (o, n) => { (o as unknown as Opportunityproduct).uomid = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Opportunityproduct).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Opportunityproduct).versionnumber = n.getNumberValue(); },
            "volumediscountamount": (o, n) => { (o as unknown as Opportunityproduct).volumediscountamount = n.getNumberValue(); },
            "volumediscountamount_base": (o, n) => { (o as unknown as Opportunityproduct).volumediscountamount_base = n.getNumberValue(); },
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
     * Gets the msdyn_pricelist property value. 
     * @returns a pricelevel
     */
    public get msdyn_pricelist() {
        return this._msdyn_pricelist;
    };
    /**
     * Sets the msdyn_pricelist property value. 
     * @param value Value to set for the msdyn_pricelist property.
     */
    public set msdyn_pricelist(value: Pricelevel | undefined) {
        this._msdyn_pricelist = value;
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
     * Gets the msdyn_serviceaccount property value. 
     * @returns a account
     */
    public get msdyn_serviceaccount() {
        return this._msdyn_serviceaccount;
    };
    /**
     * Sets the msdyn_serviceaccount property value. 
     * @param value Value to set for the msdyn_serviceaccount property.
     */
    public set msdyn_serviceaccount(value: Account | undefined) {
        this._msdyn_serviceaccount = value;
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
     * Gets the opportunityid property value. 
     * @returns a opportunity
     */
    public get opportunityid() {
        return this._opportunityid;
    };
    /**
     * Sets the opportunityid property value. 
     * @param value Value to set for the opportunityid property.
     */
    public set opportunityid(value: Opportunity | undefined) {
        this._opportunityid = value;
    };
    /**
     * Gets the opportunityProduct_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get opportunityProduct_AsyncOperations() {
        return this._opportunityProduct_AsyncOperations;
    };
    /**
     * Sets the opportunityProduct_AsyncOperations property value. 
     * @param value Value to set for the OpportunityProduct_AsyncOperations property.
     */
    public set opportunityProduct_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._opportunityProduct_AsyncOperations = value;
    };
    /**
     * Gets the opportunityProduct_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get opportunityProduct_BulkDeleteFailures() {
        return this._opportunityProduct_BulkDeleteFailures;
    };
    /**
     * Sets the opportunityProduct_BulkDeleteFailures property value. 
     * @param value Value to set for the OpportunityProduct_BulkDeleteFailures property.
     */
    public set opportunityProduct_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._opportunityProduct_BulkDeleteFailures = value;
    };
    /**
     * Gets the opportunityProduct_Dynamicpropertyinstance property value. 
     * @returns a dynamicpropertyinstance
     */
    public get opportunityProduct_Dynamicpropertyinstance() {
        return this._opportunityProduct_Dynamicpropertyinstance;
    };
    /**
     * Sets the opportunityProduct_Dynamicpropertyinstance property value. 
     * @param value Value to set for the OpportunityProduct_Dynamicpropertyinstance property.
     */
    public set opportunityProduct_Dynamicpropertyinstance(value: Dynamicpropertyinstance[] | undefined) {
        this._opportunityProduct_Dynamicpropertyinstance = value;
    };
    /**
     * Gets the opportunityproduct_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get opportunityproduct_MailboxTrackingFolders() {
        return this._opportunityproduct_MailboxTrackingFolders;
    };
    /**
     * Sets the opportunityproduct_MailboxTrackingFolders property value. 
     * @param value Value to set for the opportunityproduct_MailboxTrackingFolders property.
     */
    public set opportunityproduct_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._opportunityproduct_MailboxTrackingFolders = value;
    };
    /**
     * Gets the opportunityproduct_parent_opportunityproduct property value. 
     * @returns a opportunityproduct
     */
    public get opportunityproduct_parent_opportunityproduct() {
        return this._opportunityproduct_parent_opportunityproduct;
    };
    /**
     * Sets the opportunityproduct_parent_opportunityproduct property value. 
     * @param value Value to set for the opportunityproduct_parent_opportunityproduct property.
     */
    public set opportunityproduct_parent_opportunityproduct(value: Opportunityproduct[] | undefined) {
        this._opportunityproduct_parent_opportunityproduct = value;
    };
    /**
     * Gets the opportunityproduct_parentref_opportunityproduct property value. 
     * @returns a opportunityproduct
     */
    public get opportunityproduct_parentref_opportunityproduct() {
        return this._opportunityproduct_parentref_opportunityproduct;
    };
    /**
     * Sets the opportunityproduct_parentref_opportunityproduct property value. 
     * @param value Value to set for the opportunityproduct_parentref_opportunityproduct property.
     */
    public set opportunityproduct_parentref_opportunityproduct(value: Opportunityproduct[] | undefined) {
        this._opportunityproduct_parentref_opportunityproduct = value;
    };
    /**
     * Gets the opportunityproduct_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get opportunityproduct_principalobjectattributeaccess() {
        return this._opportunityproduct_principalobjectattributeaccess;
    };
    /**
     * Sets the opportunityproduct_principalobjectattributeaccess property value. 
     * @param value Value to set for the opportunityproduct_principalobjectattributeaccess property.
     */
    public set opportunityproduct_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._opportunityproduct_principalobjectattributeaccess = value;
    };
    /**
     * Gets the opportunityProduct_ProcessSessions property value. 
     * @returns a processsession
     */
    public get opportunityProduct_ProcessSessions() {
        return this._opportunityProduct_ProcessSessions;
    };
    /**
     * Sets the opportunityProduct_ProcessSessions property value. 
     * @param value Value to set for the OpportunityProduct_ProcessSessions property.
     */
    public set opportunityProduct_ProcessSessions(value: Processsession[] | undefined) {
        this._opportunityProduct_ProcessSessions = value;
    };
    /**
     * Gets the opportunityProduct_SyncErrors property value. 
     * @returns a syncerror
     */
    public get opportunityProduct_SyncErrors() {
        return this._opportunityProduct_SyncErrors;
    };
    /**
     * Sets the opportunityProduct_SyncErrors property value. 
     * @param value Value to set for the OpportunityProduct_SyncErrors property.
     */
    public set opportunityProduct_SyncErrors(value: Syncerror[] | undefined) {
        this._opportunityProduct_SyncErrors = value;
    };
    /**
     * Gets the opportunityproductid property value. 
     * @returns a string
     */
    public get opportunityproductid() {
        return this._opportunityproductid;
    };
    /**
     * Sets the opportunityproductid property value. 
     * @param value Value to set for the opportunityproductid property.
     */
    public set opportunityproductid(value: string | undefined) {
        this._opportunityproductid = value;
    };
    /**
     * Gets the opportunityproductname property value. 
     * @returns a string
     */
    public get opportunityproductname() {
        return this._opportunityproductname;
    };
    /**
     * Sets the opportunityproductname property value. 
     * @param value Value to set for the opportunityproductname property.
     */
    public set opportunityproductname(value: string | undefined) {
        this._opportunityproductname = value;
    };
    /**
     * Gets the opportunitystatecode property value. 
     * @returns a integer
     */
    public get opportunitystatecode() {
        return this._opportunitystatecode;
    };
    /**
     * Sets the opportunitystatecode property value. 
     * @param value Value to set for the opportunitystatecode property.
     */
    public set opportunitystatecode(value: number | undefined) {
        this._opportunitystatecode = value;
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
     * Gets the parentbundleid_opportunityproduct property value. 
     * @returns a opportunityproduct
     */
    public get parentbundleid_opportunityproduct() {
        return this._parentbundleid_opportunityproduct;
    };
    /**
     * Sets the parentbundleid_opportunityproduct property value. 
     * @param value Value to set for the parentbundleid_opportunityproduct property.
     */
    public set parentbundleid_opportunityproduct(value: Opportunityproduct | undefined) {
        this._parentbundleid_opportunityproduct = value;
    };
    /**
     * Gets the parentbundleidref_opportunityproduct property value. 
     * @returns a opportunityproduct
     */
    public get parentbundleidref_opportunityproduct() {
        return this._parentbundleidref_opportunityproduct;
    };
    /**
     * Sets the parentbundleidref_opportunityproduct property value. 
     * @param value Value to set for the parentbundleidref_opportunityproduct property.
     */
    public set parentbundleidref_opportunityproduct(value: Opportunityproduct | undefined) {
        this._parentbundleidref_opportunityproduct = value;
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
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_serviceaccount_value", this._msdyn_serviceaccount_value);
        writer.writeStringValue("_opportunityid_value", this._opportunityid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentbundleidref_value", this._parentbundleidref_value);
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_uomid_value", this._uomid_value);
        writer.writeNumberValue("baseamount", this.baseamount);
        writer.writeNumberValue("baseamount_base", this.baseamount_base);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
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
        writer.writeNumberValue("msdyn_billingmethod", this.msdyn_billingmethod);
        writer.writeNumberValue("msdyn_budgetamount", this.msdyn_budgetamount);
        writer.writeNumberValue("msdyn_budgetamount_base", this.msdyn_budgetamount_base);
        writer.writeNumberValue("msdyn_costamount", this.msdyn_costamount);
        writer.writeNumberValue("msdyn_costamount_base", this.msdyn_costamount_base);
        writer.writeNumberValue("msdyn_costpriceperunit", this.msdyn_costpriceperunit);
        writer.writeNumberValue("msdyn_costpriceperunit_base", this.msdyn_costpriceperunit_base);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeDateValue("msdyn_enddate", this.msdyn_enddate);
        writer.writeNumberValue("msdyn_linetype", this.msdyn_linetype);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeObjectValue<Account>("msdyn_serviceaccount", this.msdyn_serviceaccount);
        writer.writeDateValue("msdyn_startdate", this.msdyn_startdate);
        writer.writeObjectValue<Opportunity>("opportunityid", this.opportunityid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("opportunityProduct_AsyncOperations", this.opportunityProduct_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("opportunityProduct_BulkDeleteFailures", this.opportunityProduct_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Dynamicpropertyinstance>("opportunityProduct_Dynamicpropertyinstance", this.opportunityProduct_Dynamicpropertyinstance);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("opportunityproduct_MailboxTrackingFolders", this.opportunityproduct_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Opportunityproduct>("opportunityproduct_parent_opportunityproduct", this.opportunityproduct_parent_opportunityproduct);
        writer.writeCollectionOfObjectValues<Opportunityproduct>("opportunityproduct_parentref_opportunityproduct", this.opportunityproduct_parentref_opportunityproduct);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("opportunityproduct_principalobjectattributeaccess", this.opportunityproduct_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("opportunityProduct_ProcessSessions", this.opportunityProduct_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("opportunityProduct_SyncErrors", this.opportunityProduct_SyncErrors);
        writer.writeStringValue("opportunityproductid", this.opportunityproductid);
        writer.writeStringValue("opportunityproductname", this.opportunityproductname);
        writer.writeNumberValue("opportunitystatecode", this.opportunitystatecode);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("parentbundleid", this.parentbundleid);
        writer.writeObjectValue<Opportunityproduct>("parentbundleid_opportunityproduct", this.parentbundleid_opportunityproduct);
        writer.writeObjectValue<Opportunityproduct>("parentbundleidref_opportunityproduct", this.parentbundleidref_opportunityproduct);
        writer.writeNumberValue("priceperunit", this.priceperunit);
        writer.writeNumberValue("priceperunit_base", this.priceperunit_base);
        writer.writeNumberValue("pricingerrorcode", this.pricingerrorcode);
        writer.writeStringValue("productassociationid", this.productassociationid);
        writer.writeObjectValue<Productassociation>("productassociationid_productassociation", this.productassociationid_productassociation);
        writer.writeStringValue("productdescription", this.productdescription);
        writer.writeObjectValue<Product>("productid", this.productid);
        writer.writeStringValue("productname", this.productname);
        writer.writeNumberValue("producttypecode", this.producttypecode);
        writer.writeNumberValue("propertyconfigurationstatus", this.propertyconfigurationstatus);
        writer.writeNumberValue("quantity", this.quantity);
        writer.writeNumberValue("sequencenumber", this.sequencenumber);
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
}
