import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDiscountFromDiscriminatorValue} from './createDiscountFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductpricelevelFromDiscriminatorValue} from './createProductpricelevelFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Discount, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Productpricelevel, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Discounttype extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _discount_type_discounts?: Discount[] | undefined;
    private _discount_type_product_price_levels?: Productpricelevel[] | undefined;
    private _discountType_AsyncOperations?: Asyncoperation[] | undefined;
    private _discountType_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _discounttype_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _discounttype_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _discountType_ProcessSessions?: Processsession[] | undefined;
    private _discountType_SyncErrors?: Syncerror[] | undefined;
    private _discounttypeid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _isamounttype?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
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
     * Instantiates a new discounttype and sets the default values.
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
     * Gets the discount_type_discounts property value. 
     * @returns a discount
     */
    public get discount_type_discounts() {
        return this._discount_type_discounts;
    };
    /**
     * Sets the discount_type_discounts property value. 
     * @param value Value to set for the discount_type_discounts property.
     */
    public set discount_type_discounts(value: Discount[] | undefined) {
        this._discount_type_discounts = value;
    };
    /**
     * Gets the discount_type_product_price_levels property value. 
     * @returns a productpricelevel
     */
    public get discount_type_product_price_levels() {
        return this._discount_type_product_price_levels;
    };
    /**
     * Sets the discount_type_product_price_levels property value. 
     * @param value Value to set for the discount_type_product_price_levels property.
     */
    public set discount_type_product_price_levels(value: Productpricelevel[] | undefined) {
        this._discount_type_product_price_levels = value;
    };
    /**
     * Gets the discountType_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get discountType_AsyncOperations() {
        return this._discountType_AsyncOperations;
    };
    /**
     * Sets the discountType_AsyncOperations property value. 
     * @param value Value to set for the DiscountType_AsyncOperations property.
     */
    public set discountType_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._discountType_AsyncOperations = value;
    };
    /**
     * Gets the discountType_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get discountType_BulkDeleteFailures() {
        return this._discountType_BulkDeleteFailures;
    };
    /**
     * Sets the discountType_BulkDeleteFailures property value. 
     * @param value Value to set for the DiscountType_BulkDeleteFailures property.
     */
    public set discountType_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._discountType_BulkDeleteFailures = value;
    };
    /**
     * Gets the discounttype_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get discounttype_MailboxTrackingFolders() {
        return this._discounttype_MailboxTrackingFolders;
    };
    /**
     * Sets the discounttype_MailboxTrackingFolders property value. 
     * @param value Value to set for the discounttype_MailboxTrackingFolders property.
     */
    public set discounttype_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._discounttype_MailboxTrackingFolders = value;
    };
    /**
     * Gets the discounttype_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get discounttype_PrincipalObjectAttributeAccesses() {
        return this._discounttype_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the discounttype_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the discounttype_PrincipalObjectAttributeAccesses property.
     */
    public set discounttype_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._discounttype_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the discountType_ProcessSessions property value. 
     * @returns a processsession
     */
    public get discountType_ProcessSessions() {
        return this._discountType_ProcessSessions;
    };
    /**
     * Sets the discountType_ProcessSessions property value. 
     * @param value Value to set for the DiscountType_ProcessSessions property.
     */
    public set discountType_ProcessSessions(value: Processsession[] | undefined) {
        this._discountType_ProcessSessions = value;
    };
    /**
     * Gets the discountType_SyncErrors property value. 
     * @returns a syncerror
     */
    public get discountType_SyncErrors() {
        return this._discountType_SyncErrors;
    };
    /**
     * Sets the discountType_SyncErrors property value. 
     * @param value Value to set for the DiscountType_SyncErrors property.
     */
    public set discountType_SyncErrors(value: Syncerror[] | undefined) {
        this._discountType_SyncErrors = value;
    };
    /**
     * Gets the discounttypeid property value. 
     * @returns a string
     */
    public get discounttypeid() {
        return this._discounttypeid;
    };
    /**
     * Sets the discounttypeid property value. 
     * @param value Value to set for the discounttypeid property.
     */
    public set discounttypeid(value: string | undefined) {
        this._discounttypeid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Discounttype)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Discounttype)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Discounttype)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Discounttype)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Discounttype)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Discounttype)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Discounttype).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Discounttype).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Discounttype).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Discounttype).description = n.getStringValue(); },
            "discount_type_discounts": (o, n) => { (o as unknown as Discounttype).discount_type_discounts = n.getCollectionOfObjectValues<Discount>(createDiscountFromDiscriminatorValue); },
            "discount_type_product_price_levels": (o, n) => { (o as unknown as Discounttype).discount_type_product_price_levels = n.getCollectionOfObjectValues<Productpricelevel>(createProductpricelevelFromDiscriminatorValue); },
            "discountType_AsyncOperations": (o, n) => { (o as unknown as Discounttype).discountType_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "discountType_BulkDeleteFailures": (o, n) => { (o as unknown as Discounttype).discountType_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "discounttype_MailboxTrackingFolders": (o, n) => { (o as unknown as Discounttype).discounttype_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "discounttype_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Discounttype).discounttype_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "discountType_ProcessSessions": (o, n) => { (o as unknown as Discounttype).discountType_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "discountType_SyncErrors": (o, n) => { (o as unknown as Discounttype).discountType_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "discounttypeid": (o, n) => { (o as unknown as Discounttype).discounttypeid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Discounttype).importsequencenumber = n.getNumberValue(); },
            "isamounttype": (o, n) => { (o as unknown as Discounttype).isamounttype = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Discounttype).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Discounttype).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Discounttype).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Discounttype).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Discounttype).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Discounttype).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Discounttype).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Discounttype).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Discounttype).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Discounttype).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Discounttype).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Discounttype).versionnumber = n.getNumberValue(); },
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
     * Gets the isamounttype property value. 
     * @returns a boolean
     */
    public get isamounttype() {
        return this._isamounttype;
    };
    /**
     * Sets the isamounttype property value. 
     * @param value Value to set for the isamounttype property.
     */
    public set isamounttype(value: boolean | undefined) {
        this._isamounttype = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<Discount>("discount_type_discounts", this.discount_type_discounts);
        writer.writeCollectionOfObjectValues<Productpricelevel>("discount_type_product_price_levels", this.discount_type_product_price_levels);
        writer.writeCollectionOfObjectValues<Asyncoperation>("discountType_AsyncOperations", this.discountType_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("discountType_BulkDeleteFailures", this.discountType_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("discounttype_MailboxTrackingFolders", this.discounttype_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("discounttype_PrincipalObjectAttributeAccesses", this.discounttype_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("discountType_ProcessSessions", this.discountType_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("discountType_SyncErrors", this.discountType_SyncErrors);
        writer.writeStringValue("discounttypeid", this.discounttypeid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isamounttype", this.isamounttype);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
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
