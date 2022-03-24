import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDiscounttypeFromDiscriminatorValue} from './createDiscounttypeFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Discounttype, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Discount extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __discounttypeid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _amount?: number | undefined;
    private _amount_base?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _discount_AsyncOperations?: Asyncoperation[] | undefined;
    private _discount_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _discount_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _discount_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _discount_ProcessSessions?: Processsession[] | undefined;
    private _discount_SyncErrors?: Syncerror[] | undefined;
    private _discountid?: string | undefined;
    private _discounttypeid?: Discounttype | undefined;
    private _exchangerate?: number | undefined;
    private _highquantity?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _isamounttype?: boolean | undefined;
    private _lowquantity?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _percentage?: number | undefined;
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
     * Instantiates a new discount and sets the default values.
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
     * Gets the discount_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get discount_AsyncOperations() {
        return this._discount_AsyncOperations;
    };
    /**
     * Sets the discount_AsyncOperations property value. 
     * @param value Value to set for the Discount_AsyncOperations property.
     */
    public set discount_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._discount_AsyncOperations = value;
    };
    /**
     * Gets the discount_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get discount_BulkDeleteFailures() {
        return this._discount_BulkDeleteFailures;
    };
    /**
     * Sets the discount_BulkDeleteFailures property value. 
     * @param value Value to set for the Discount_BulkDeleteFailures property.
     */
    public set discount_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._discount_BulkDeleteFailures = value;
    };
    /**
     * Gets the discount_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get discount_MailboxTrackingFolders() {
        return this._discount_MailboxTrackingFolders;
    };
    /**
     * Sets the discount_MailboxTrackingFolders property value. 
     * @param value Value to set for the discount_MailboxTrackingFolders property.
     */
    public set discount_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._discount_MailboxTrackingFolders = value;
    };
    /**
     * Gets the discount_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get discount_PrincipalObjectAttributeAccesses() {
        return this._discount_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the discount_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the discount_PrincipalObjectAttributeAccesses property.
     */
    public set discount_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._discount_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the discount_ProcessSessions property value. 
     * @returns a processsession
     */
    public get discount_ProcessSessions() {
        return this._discount_ProcessSessions;
    };
    /**
     * Sets the discount_ProcessSessions property value. 
     * @param value Value to set for the Discount_ProcessSessions property.
     */
    public set discount_ProcessSessions(value: Processsession[] | undefined) {
        this._discount_ProcessSessions = value;
    };
    /**
     * Gets the discount_SyncErrors property value. 
     * @returns a syncerror
     */
    public get discount_SyncErrors() {
        return this._discount_SyncErrors;
    };
    /**
     * Sets the discount_SyncErrors property value. 
     * @param value Value to set for the Discount_SyncErrors property.
     */
    public set discount_SyncErrors(value: Syncerror[] | undefined) {
        this._discount_SyncErrors = value;
    };
    /**
     * Gets the discountid property value. 
     * @returns a string
     */
    public get discountid() {
        return this._discountid;
    };
    /**
     * Sets the discountid property value. 
     * @param value Value to set for the discountid property.
     */
    public set discountid(value: string | undefined) {
        this._discountid = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Discount)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Discount)._createdonbehalfby_value = n.getStringValue(); },
            "_discounttypeid_value": (o, n) => { (o as unknown as Discount)._discounttypeid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Discount)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Discount)._modifiedonbehalfby_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Discount)._transactioncurrencyid_value = n.getStringValue(); },
            "amount": (o, n) => { (o as unknown as Discount).amount = n.getNumberValue(); },
            "amount_base": (o, n) => { (o as unknown as Discount).amount_base = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Discount).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Discount).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Discount).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "discount_AsyncOperations": (o, n) => { (o as unknown as Discount).discount_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "discount_BulkDeleteFailures": (o, n) => { (o as unknown as Discount).discount_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "discount_MailboxTrackingFolders": (o, n) => { (o as unknown as Discount).discount_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "discount_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Discount).discount_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "discount_ProcessSessions": (o, n) => { (o as unknown as Discount).discount_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "discount_SyncErrors": (o, n) => { (o as unknown as Discount).discount_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "discountid": (o, n) => { (o as unknown as Discount).discountid = n.getStringValue(); },
            "discounttypeid": (o, n) => { (o as unknown as Discount).discounttypeid = n.getObjectValue<Discounttype>(createDiscounttypeFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Discount).exchangerate = n.getNumberValue(); },
            "highquantity": (o, n) => { (o as unknown as Discount).highquantity = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Discount).importsequencenumber = n.getNumberValue(); },
            "isamounttype": (o, n) => { (o as unknown as Discount).isamounttype = n.getBooleanValue(); },
            "lowquantity": (o, n) => { (o as unknown as Discount).lowquantity = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Discount).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Discount).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Discount).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Discount).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Discount).organizationid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Discount).overriddencreatedon = n.getDateValue(); },
            "percentage": (o, n) => { (o as unknown as Discount).percentage = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Discount).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Discount).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Discount).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Discount).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the highquantity property value. 
     * @returns a int64
     */
    public get highquantity() {
        return this._highquantity;
    };
    /**
     * Sets the highquantity property value. 
     * @param value Value to set for the highquantity property.
     */
    public set highquantity(value: number | undefined) {
        this._highquantity = value;
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
     * Gets the lowquantity property value. 
     * @returns a int64
     */
    public get lowquantity() {
        return this._lowquantity;
    };
    /**
     * Sets the lowquantity property value. 
     * @param value Value to set for the lowquantity property.
     */
    public set lowquantity(value: number | undefined) {
        this._lowquantity = value;
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
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("amount", this.amount);
        writer.writeNumberValue("amount_base", this.amount_base);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("discount_AsyncOperations", this.discount_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("discount_BulkDeleteFailures", this.discount_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("discount_MailboxTrackingFolders", this.discount_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("discount_PrincipalObjectAttributeAccesses", this.discount_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("discount_ProcessSessions", this.discount_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("discount_SyncErrors", this.discount_SyncErrors);
        writer.writeStringValue("discountid", this.discountid);
        writer.writeObjectValue<Discounttype>("discounttypeid", this.discounttypeid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("highquantity", this.highquantity);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isamounttype", this.isamounttype);
        writer.writeNumberValue("lowquantity", this.lowquantity);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("percentage", this.percentage);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
