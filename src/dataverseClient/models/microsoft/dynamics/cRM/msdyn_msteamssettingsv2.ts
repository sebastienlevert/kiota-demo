import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_msteamssettingsv2 extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_defaultteamschattitleenabled?: boolean | undefined;
    private _msdyn_embedcollabserviceurl?: string | undefined;
    private _msdyn_embedcollabteamsintegrationenabled?: boolean | undefined;
    private _msdyn_msteamssettingsname?: string | undefined;
    private _msdyn_msteamssettingsv2_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_msteamssettingsv2_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_msteamssettingsv2_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_msteamssettingsv2_ProcessSession?: Processsession[] | undefined;
    private _msdyn_msteamssettingsv2_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_msteamssettingsv2id?: string | undefined;
    private _msdyn_sensitivitylabelsettingenabled?: boolean | undefined;
    private _msdyn_tabserviceurl?: string | undefined;
    private _msdyn_teamsmeetingintegrationenabled?: boolean | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Instantiates a new msdyn_msteamssettingsv2 and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2)._modifiedonbehalfby_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2)._owningbusinessunit_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_defaultteamschattitleenabled": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_defaultteamschattitleenabled = n.getBooleanValue(); },
            "msdyn_embedcollabserviceurl": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_embedcollabserviceurl = n.getStringValue(); },
            "msdyn_embedcollabteamsintegrationenabled": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_embedcollabteamsintegrationenabled = n.getBooleanValue(); },
            "msdyn_msteamssettingsname": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsname = n.getStringValue(); },
            "msdyn_msteamssettingsv2_AsyncOperations": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsv2_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_msteamssettingsv2_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsv2_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_msteamssettingsv2_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsv2_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_msteamssettingsv2_ProcessSession": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsv2_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_msteamssettingsv2_SyncErrors": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsv2_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_msteamssettingsv2id": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_msteamssettingsv2id = n.getStringValue(); },
            "msdyn_sensitivitylabelsettingenabled": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_sensitivitylabelsettingenabled = n.getBooleanValue(); },
            "msdyn_tabserviceurl": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_tabserviceurl = n.getStringValue(); },
            "msdyn_teamsmeetingintegrationenabled": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).msdyn_teamsmeetingintegrationenabled = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_msteamssettingsv2).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_defaultteamschattitleenabled property value. 
     * @returns a boolean
     */
    public get msdyn_defaultteamschattitleenabled() {
        return this._msdyn_defaultteamschattitleenabled;
    };
    /**
     * Sets the msdyn_defaultteamschattitleenabled property value. 
     * @param value Value to set for the msdyn_defaultteamschattitleenabled property.
     */
    public set msdyn_defaultteamschattitleenabled(value: boolean | undefined) {
        this._msdyn_defaultteamschattitleenabled = value;
    };
    /**
     * Gets the msdyn_embedcollabserviceurl property value. 
     * @returns a string
     */
    public get msdyn_embedcollabserviceurl() {
        return this._msdyn_embedcollabserviceurl;
    };
    /**
     * Sets the msdyn_embedcollabserviceurl property value. 
     * @param value Value to set for the msdyn_embedcollabserviceurl property.
     */
    public set msdyn_embedcollabserviceurl(value: string | undefined) {
        this._msdyn_embedcollabserviceurl = value;
    };
    /**
     * Gets the msdyn_embedcollabteamsintegrationenabled property value. 
     * @returns a boolean
     */
    public get msdyn_embedcollabteamsintegrationenabled() {
        return this._msdyn_embedcollabteamsintegrationenabled;
    };
    /**
     * Sets the msdyn_embedcollabteamsintegrationenabled property value. 
     * @param value Value to set for the msdyn_embedcollabteamsintegrationenabled property.
     */
    public set msdyn_embedcollabteamsintegrationenabled(value: boolean | undefined) {
        this._msdyn_embedcollabteamsintegrationenabled = value;
    };
    /**
     * Gets the msdyn_msteamssettingsname property value. 
     * @returns a string
     */
    public get msdyn_msteamssettingsname() {
        return this._msdyn_msteamssettingsname;
    };
    /**
     * Sets the msdyn_msteamssettingsname property value. 
     * @param value Value to set for the msdyn_msteamssettingsname property.
     */
    public set msdyn_msteamssettingsname(value: string | undefined) {
        this._msdyn_msteamssettingsname = value;
    };
    /**
     * Gets the msdyn_msteamssettingsv2_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_msteamssettingsv2_AsyncOperations() {
        return this._msdyn_msteamssettingsv2_AsyncOperations;
    };
    /**
     * Sets the msdyn_msteamssettingsv2_AsyncOperations property value. 
     * @param value Value to set for the msdyn_msteamssettingsv2_AsyncOperations property.
     */
    public set msdyn_msteamssettingsv2_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_msteamssettingsv2_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_msteamssettingsv2_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_msteamssettingsv2_BulkDeleteFailures() {
        return this._msdyn_msteamssettingsv2_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_msteamssettingsv2_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_msteamssettingsv2_BulkDeleteFailures property.
     */
    public set msdyn_msteamssettingsv2_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_msteamssettingsv2_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_msteamssettingsv2_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_msteamssettingsv2_MailboxTrackingFolders() {
        return this._msdyn_msteamssettingsv2_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_msteamssettingsv2_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_msteamssettingsv2_MailboxTrackingFolders property.
     */
    public set msdyn_msteamssettingsv2_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_msteamssettingsv2_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses() {
        return this._msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_msteamssettingsv2_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_msteamssettingsv2_ProcessSession() {
        return this._msdyn_msteamssettingsv2_ProcessSession;
    };
    /**
     * Sets the msdyn_msteamssettingsv2_ProcessSession property value. 
     * @param value Value to set for the msdyn_msteamssettingsv2_ProcessSession property.
     */
    public set msdyn_msteamssettingsv2_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_msteamssettingsv2_ProcessSession = value;
    };
    /**
     * Gets the msdyn_msteamssettingsv2_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_msteamssettingsv2_SyncErrors() {
        return this._msdyn_msteamssettingsv2_SyncErrors;
    };
    /**
     * Sets the msdyn_msteamssettingsv2_SyncErrors property value. 
     * @param value Value to set for the msdyn_msteamssettingsv2_SyncErrors property.
     */
    public set msdyn_msteamssettingsv2_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_msteamssettingsv2_SyncErrors = value;
    };
    /**
     * Gets the msdyn_msteamssettingsv2id property value. 
     * @returns a string
     */
    public get msdyn_msteamssettingsv2id() {
        return this._msdyn_msteamssettingsv2id;
    };
    /**
     * Sets the msdyn_msteamssettingsv2id property value. 
     * @param value Value to set for the msdyn_msteamssettingsv2id property.
     */
    public set msdyn_msteamssettingsv2id(value: string | undefined) {
        this._msdyn_msteamssettingsv2id = value;
    };
    /**
     * Gets the msdyn_sensitivitylabelsettingenabled property value. 
     * @returns a boolean
     */
    public get msdyn_sensitivitylabelsettingenabled() {
        return this._msdyn_sensitivitylabelsettingenabled;
    };
    /**
     * Sets the msdyn_sensitivitylabelsettingenabled property value. 
     * @param value Value to set for the msdyn_sensitivitylabelsettingenabled property.
     */
    public set msdyn_sensitivitylabelsettingenabled(value: boolean | undefined) {
        this._msdyn_sensitivitylabelsettingenabled = value;
    };
    /**
     * Gets the msdyn_tabserviceurl property value. 
     * @returns a string
     */
    public get msdyn_tabserviceurl() {
        return this._msdyn_tabserviceurl;
    };
    /**
     * Sets the msdyn_tabserviceurl property value. 
     * @param value Value to set for the msdyn_tabserviceurl property.
     */
    public set msdyn_tabserviceurl(value: string | undefined) {
        this._msdyn_tabserviceurl = value;
    };
    /**
     * Gets the msdyn_teamsmeetingintegrationenabled property value. 
     * @returns a boolean
     */
    public get msdyn_teamsmeetingintegrationenabled() {
        return this._msdyn_teamsmeetingintegrationenabled;
    };
    /**
     * Sets the msdyn_teamsmeetingintegrationenabled property value. 
     * @param value Value to set for the msdyn_teamsmeetingintegrationenabled property.
     */
    public set msdyn_teamsmeetingintegrationenabled(value: boolean | undefined) {
        this._msdyn_teamsmeetingintegrationenabled = value;
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
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_defaultteamschattitleenabled", this.msdyn_defaultteamschattitleenabled);
        writer.writeStringValue("msdyn_embedcollabserviceurl", this.msdyn_embedcollabserviceurl);
        writer.writeBooleanValue("msdyn_embedcollabteamsintegrationenabled", this.msdyn_embedcollabteamsintegrationenabled);
        writer.writeStringValue("msdyn_msteamssettingsname", this.msdyn_msteamssettingsname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_msteamssettingsv2_AsyncOperations", this.msdyn_msteamssettingsv2_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_msteamssettingsv2_BulkDeleteFailures", this.msdyn_msteamssettingsv2_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_msteamssettingsv2_MailboxTrackingFolders", this.msdyn_msteamssettingsv2_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses", this.msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_msteamssettingsv2_ProcessSession", this.msdyn_msteamssettingsv2_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_msteamssettingsv2_SyncErrors", this.msdyn_msteamssettingsv2_SyncErrors);
        writer.writeStringValue("msdyn_msteamssettingsv2id", this.msdyn_msteamssettingsv2id);
        writer.writeBooleanValue("msdyn_sensitivitylabelsettingenabled", this.msdyn_sensitivitylabelsettingenabled);
        writer.writeStringValue("msdyn_tabserviceurl", this.msdyn_tabserviceurl);
        writer.writeBooleanValue("msdyn_teamsmeetingintegrationenabled", this.msdyn_teamsmeetingintegrationenabled);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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
