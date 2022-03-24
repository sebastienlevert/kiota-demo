import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDiscounttypeFromDiscriminatorValue} from './createDiscounttypeFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Discounttype, Mailboxtrackingfolder, Pricelevel, Principalobjectattributeaccess, Processsession, Processstage, Product, Syncerror, Systemuser, Transactioncurrency, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Productpricelevel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __discounttypeid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __pricelevelid_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __uomid_value?: string | undefined;
    private __uomscheduleid_value?: string | undefined;
    private _amount?: number | undefined;
    private _amount_base?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _discounttypeid?: Discounttype | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _percentage?: number | undefined;
    private _pricelevelid?: Pricelevel | undefined;
    private _pricingmethodcode?: number | undefined;
    private _processid?: string | undefined;
    private _productid?: Product | undefined;
    private _productnumber?: string | undefined;
    private _productPriceLevel_AsyncOperations?: Asyncoperation[] | undefined;
    private _productPriceLevel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _productpricelevel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _productpricelevel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _productPriceLevel_ProcessSessions?: Processsession[] | undefined;
    private _productPriceLevel_SyncErrors?: Syncerror[] | undefined;
    private _productpricelevelid?: string | undefined;
    private _quantitysellingcode?: number | undefined;
    private _roundingoptionamount?: number | undefined;
    private _roundingoptionamount_base?: number | undefined;
    private _roundingoptioncode?: number | undefined;
    private _roundingpolicycode?: number | undefined;
    private _stageid?: string | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _uomid?: Uom | undefined;
    private _uomscheduleid?: Uomschedule | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _discounttypeid_value property value. 
     * @returns a string
     */
    public get _discounttypeid_value() {
        return this.__discounttypeid_value;
    };
    /**
     * Sets the _discounttypeid_value property value. 
     * @param value Value to set for the _discounttypeid_value property.
     */
    public set _discounttypeid_value(value: string | undefined) {
        this.__discounttypeid_value = value;
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
     * Gets the _pricelevelid_value property value. 
     * @returns a string
     */
    public get _pricelevelid_value() {
        return this.__pricelevelid_value;
    };
    /**
     * Sets the _pricelevelid_value property value. 
     * @param value Value to set for the _pricelevelid_value property.
     */
    public set _pricelevelid_value(value: string | undefined) {
        this.__pricelevelid_value = value;
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
     * Gets the _uomscheduleid_value property value. 
     * @returns a string
     */
    public get _uomscheduleid_value() {
        return this.__uomscheduleid_value;
    };
    /**
     * Sets the _uomscheduleid_value property value. 
     * @param value Value to set for the _uomscheduleid_value property.
     */
    public set _uomscheduleid_value(value: string | undefined) {
        this.__uomscheduleid_value = value;
    };
    /**
     * Gets the amount property value. 
     * @returns a int64
     */
    public get amount() {
        return this._amount;
    };
    /**
     * Sets the amount property value. 
     * @param value Value to set for the amount property.
     */
    public set amount(value: number | undefined) {
        this._amount = value;
    };
    /**
     * Gets the amount_base property value. 
     * @returns a int64
     */
    public get amount_base() {
        return this._amount_base;
    };
    /**
     * Sets the amount_base property value. 
     * @param value Value to set for the amount_base property.
     */
    public set amount_base(value: number | undefined) {
        this._amount_base = value;
    };
    /**
     * Instantiates a new productpricelevel and sets the default values.
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
     * Gets the discounttypeid property value. 
     * @returns a discounttype
     */
    public get discounttypeid() {
        return this._discounttypeid;
    };
    /**
     * Sets the discounttypeid property value. 
     * @param value Value to set for the discounttypeid property.
     */
    public set discounttypeid(value: Discounttype | undefined) {
        this._discounttypeid = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Productpricelevel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Productpricelevel)._createdonbehalfby_value = n.getStringValue(); },
            "_discounttypeid_value": (o, n) => { (o as unknown as Productpricelevel)._discounttypeid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Productpricelevel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Productpricelevel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_pricelevelid_value": (o, n) => { (o as unknown as Productpricelevel)._pricelevelid_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Productpricelevel)._productid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Productpricelevel)._transactioncurrencyid_value = n.getStringValue(); },
            "_uomid_value": (o, n) => { (o as unknown as Productpricelevel)._uomid_value = n.getStringValue(); },
            "_uomscheduleid_value": (o, n) => { (o as unknown as Productpricelevel)._uomscheduleid_value = n.getStringValue(); },
            "amount": (o, n) => { (o as unknown as Productpricelevel).amount = n.getNumberValue(); },
            "amount_base": (o, n) => { (o as unknown as Productpricelevel).amount_base = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Productpricelevel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Productpricelevel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Productpricelevel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "discounttypeid": (o, n) => { (o as unknown as Productpricelevel).discounttypeid = n.getObjectValue<Discounttype>(createDiscounttypeFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Productpricelevel).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Productpricelevel).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Productpricelevel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Productpricelevel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Productpricelevel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Productpricelevel).organizationid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Productpricelevel).overriddencreatedon = n.getDateValue(); },
            "percentage": (o, n) => { (o as unknown as Productpricelevel).percentage = n.getNumberValue(); },
            "pricelevelid": (o, n) => { (o as unknown as Productpricelevel).pricelevelid = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "pricingmethodcode": (o, n) => { (o as unknown as Productpricelevel).pricingmethodcode = n.getNumberValue(); },
            "processid": (o, n) => { (o as unknown as Productpricelevel).processid = n.getStringValue(); },
            "productid": (o, n) => { (o as unknown as Productpricelevel).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productnumber": (o, n) => { (o as unknown as Productpricelevel).productnumber = n.getStringValue(); },
            "productPriceLevel_AsyncOperations": (o, n) => { (o as unknown as Productpricelevel).productPriceLevel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "productPriceLevel_BulkDeleteFailures": (o, n) => { (o as unknown as Productpricelevel).productPriceLevel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "productpricelevel_MailboxTrackingFolders": (o, n) => { (o as unknown as Productpricelevel).productpricelevel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "productpricelevel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Productpricelevel).productpricelevel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "productPriceLevel_ProcessSessions": (o, n) => { (o as unknown as Productpricelevel).productPriceLevel_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "productPriceLevel_SyncErrors": (o, n) => { (o as unknown as Productpricelevel).productPriceLevel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "productpricelevelid": (o, n) => { (o as unknown as Productpricelevel).productpricelevelid = n.getStringValue(); },
            "quantitysellingcode": (o, n) => { (o as unknown as Productpricelevel).quantitysellingcode = n.getNumberValue(); },
            "roundingoptionamount": (o, n) => { (o as unknown as Productpricelevel).roundingoptionamount = n.getNumberValue(); },
            "roundingoptionamount_base": (o, n) => { (o as unknown as Productpricelevel).roundingoptionamount_base = n.getNumberValue(); },
            "roundingoptioncode": (o, n) => { (o as unknown as Productpricelevel).roundingoptioncode = n.getNumberValue(); },
            "roundingpolicycode": (o, n) => { (o as unknown as Productpricelevel).roundingpolicycode = n.getNumberValue(); },
            "stageid": (o, n) => { (o as unknown as Productpricelevel).stageid = n.getStringValue(); },
            "stageid_processstage": (o, n) => { (o as unknown as Productpricelevel).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Productpricelevel).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Productpricelevel).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Productpricelevel).traversedpath = n.getStringValue(); },
            "uomid": (o, n) => { (o as unknown as Productpricelevel).uomid = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "uomscheduleid": (o, n) => { (o as unknown as Productpricelevel).uomscheduleid = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Productpricelevel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Productpricelevel).versionnumber = n.getNumberValue(); },
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
     * Gets the organizationid property value. 
     * @returns a string
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: string | undefined) {
        this._organizationid = value;
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
     * Gets the percentage property value. 
     * @returns a int64
     */
    public get percentage() {
        return this._percentage;
    };
    /**
     * Sets the percentage property value. 
     * @param value Value to set for the percentage property.
     */
    public set percentage(value: number | undefined) {
        this._percentage = value;
    };
    /**
     * Gets the pricelevelid property value. 
     * @returns a pricelevel
     */
    public get pricelevelid() {
        return this._pricelevelid;
    };
    /**
     * Sets the pricelevelid property value. 
     * @param value Value to set for the pricelevelid property.
     */
    public set pricelevelid(value: Pricelevel | undefined) {
        this._pricelevelid = value;
    };
    /**
     * Gets the pricingmethodcode property value. 
     * @returns a integer
     */
    public get pricingmethodcode() {
        return this._pricingmethodcode;
    };
    /**
     * Sets the pricingmethodcode property value. 
     * @param value Value to set for the pricingmethodcode property.
     */
    public set pricingmethodcode(value: number | undefined) {
        this._pricingmethodcode = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
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
     * Gets the productPriceLevel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get productPriceLevel_AsyncOperations() {
        return this._productPriceLevel_AsyncOperations;
    };
    /**
     * Sets the productPriceLevel_AsyncOperations property value. 
     * @param value Value to set for the ProductPriceLevel_AsyncOperations property.
     */
    public set productPriceLevel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._productPriceLevel_AsyncOperations = value;
    };
    /**
     * Gets the productPriceLevel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get productPriceLevel_BulkDeleteFailures() {
        return this._productPriceLevel_BulkDeleteFailures;
    };
    /**
     * Sets the productPriceLevel_BulkDeleteFailures property value. 
     * @param value Value to set for the ProductPriceLevel_BulkDeleteFailures property.
     */
    public set productPriceLevel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._productPriceLevel_BulkDeleteFailures = value;
    };
    /**
     * Gets the productpricelevel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get productpricelevel_MailboxTrackingFolders() {
        return this._productpricelevel_MailboxTrackingFolders;
    };
    /**
     * Sets the productpricelevel_MailboxTrackingFolders property value. 
     * @param value Value to set for the productpricelevel_MailboxTrackingFolders property.
     */
    public set productpricelevel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._productpricelevel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the productpricelevel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get productpricelevel_PrincipalObjectAttributeAccesses() {
        return this._productpricelevel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the productpricelevel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the productpricelevel_PrincipalObjectAttributeAccesses property.
     */
    public set productpricelevel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._productpricelevel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the productPriceLevel_ProcessSessions property value. 
     * @returns a processsession
     */
    public get productPriceLevel_ProcessSessions() {
        return this._productPriceLevel_ProcessSessions;
    };
    /**
     * Sets the productPriceLevel_ProcessSessions property value. 
     * @param value Value to set for the ProductPriceLevel_ProcessSessions property.
     */
    public set productPriceLevel_ProcessSessions(value: Processsession[] | undefined) {
        this._productPriceLevel_ProcessSessions = value;
    };
    /**
     * Gets the productPriceLevel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get productPriceLevel_SyncErrors() {
        return this._productPriceLevel_SyncErrors;
    };
    /**
     * Sets the productPriceLevel_SyncErrors property value. 
     * @param value Value to set for the ProductPriceLevel_SyncErrors property.
     */
    public set productPriceLevel_SyncErrors(value: Syncerror[] | undefined) {
        this._productPriceLevel_SyncErrors = value;
    };
    /**
     * Gets the productpricelevelid property value. 
     * @returns a string
     */
    public get productpricelevelid() {
        return this._productpricelevelid;
    };
    /**
     * Sets the productpricelevelid property value. 
     * @param value Value to set for the productpricelevelid property.
     */
    public set productpricelevelid(value: string | undefined) {
        this._productpricelevelid = value;
    };
    /**
     * Gets the quantitysellingcode property value. 
     * @returns a integer
     */
    public get quantitysellingcode() {
        return this._quantitysellingcode;
    };
    /**
     * Sets the quantitysellingcode property value. 
     * @param value Value to set for the quantitysellingcode property.
     */
    public set quantitysellingcode(value: number | undefined) {
        this._quantitysellingcode = value;
    };
    /**
     * Gets the roundingoptionamount property value. 
     * @returns a int64
     */
    public get roundingoptionamount() {
        return this._roundingoptionamount;
    };
    /**
     * Sets the roundingoptionamount property value. 
     * @param value Value to set for the roundingoptionamount property.
     */
    public set roundingoptionamount(value: number | undefined) {
        this._roundingoptionamount = value;
    };
    /**
     * Gets the roundingoptionamount_base property value. 
     * @returns a int64
     */
    public get roundingoptionamount_base() {
        return this._roundingoptionamount_base;
    };
    /**
     * Sets the roundingoptionamount_base property value. 
     * @param value Value to set for the roundingoptionamount_base property.
     */
    public set roundingoptionamount_base(value: number | undefined) {
        this._roundingoptionamount_base = value;
    };
    /**
     * Gets the roundingoptioncode property value. 
     * @returns a integer
     */
    public get roundingoptioncode() {
        return this._roundingoptioncode;
    };
    /**
     * Sets the roundingoptioncode property value. 
     * @param value Value to set for the roundingoptioncode property.
     */
    public set roundingoptioncode(value: number | undefined) {
        this._roundingoptioncode = value;
    };
    /**
     * Gets the roundingpolicycode property value. 
     * @returns a integer
     */
    public get roundingpolicycode() {
        return this._roundingpolicycode;
    };
    /**
     * Sets the roundingpolicycode property value. 
     * @param value Value to set for the roundingpolicycode property.
     */
    public set roundingpolicycode(value: number | undefined) {
        this._roundingpolicycode = value;
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
        writer.writeStringValue("_discounttypeid_value", this._discounttypeid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_pricelevelid_value", this._pricelevelid_value);
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_uomid_value", this._uomid_value);
        writer.writeStringValue("_uomscheduleid_value", this._uomscheduleid_value);
        writer.writeNumberValue("amount", this.amount);
        writer.writeNumberValue("amount_base", this.amount_base);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Discounttype>("discounttypeid", this.discounttypeid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("percentage", this.percentage);
        writer.writeObjectValue<Pricelevel>("pricelevelid", this.pricelevelid);
        writer.writeNumberValue("pricingmethodcode", this.pricingmethodcode);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Product>("productid", this.productid);
        writer.writeStringValue("productnumber", this.productnumber);
        writer.writeCollectionOfObjectValues<Asyncoperation>("productPriceLevel_AsyncOperations", this.productPriceLevel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("productPriceLevel_BulkDeleteFailures", this.productPriceLevel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("productpricelevel_MailboxTrackingFolders", this.productpricelevel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("productpricelevel_PrincipalObjectAttributeAccesses", this.productpricelevel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("productPriceLevel_ProcessSessions", this.productPriceLevel_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("productPriceLevel_SyncErrors", this.productPriceLevel_SyncErrors);
        writer.writeStringValue("productpricelevelid", this.productpricelevelid);
        writer.writeNumberValue("quantitysellingcode", this.quantitysellingcode);
        writer.writeNumberValue("roundingoptionamount", this.roundingoptionamount);
        writer.writeNumberValue("roundingoptionamount_base", this.roundingoptionamount_base);
        writer.writeNumberValue("roundingoptioncode", this.roundingoptioncode);
        writer.writeNumberValue("roundingpolicycode", this.roundingpolicycode);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeObjectValue<Uom>("uomid", this.uomid);
        writer.writeObjectValue<Uomschedule>("uomscheduleid", this.uomscheduleid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
    };
    /**
     * Gets the stageid_processstage property value. 
     * @returns a processstage
     */
    public get stageid_processstage() {
        return this._stageid_processstage;
    };
    /**
     * Sets the stageid_processstage property value. 
     * @param value Value to set for the stageid_processstage property.
     */
    public set stageid_processstage(value: Processstage | undefined) {
        this._stageid_processstage = value;
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
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
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
     * Gets the uomscheduleid property value. 
     * @returns a uomschedule
     */
    public get uomscheduleid() {
        return this._uomscheduleid;
    };
    /**
     * Sets the uomscheduleid property value. 
     * @param value Value to set for the uomscheduleid property.
     */
    public set uomscheduleid(value: Uomschedule | undefined) {
        this._uomscheduleid = value;
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
}
