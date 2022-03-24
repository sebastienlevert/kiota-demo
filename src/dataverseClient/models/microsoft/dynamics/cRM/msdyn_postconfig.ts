import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_postruleconfigFromDiscriminatorValue} from './createMsdyn_postruleconfigFromDiscriminatorValue';
import {createMsdyn_wallsavedqueryFromDiscriminatorValue} from './createMsdyn_wallsavedqueryFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Msdyn_postruleconfig, Msdyn_wallsavedquery, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_postconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_configurewall?: boolean | undefined;
    private _msdyn_entitydisplayname?: string | undefined;
    private _msdyn_entityname?: string | undefined;
    private _msdyn_followingviewid?: string | undefined;
    private _msdyn_followingviewid2?: string | undefined;
    private _msdyn_otc?: number | undefined;
    private _msdyn_postconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_postconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_postconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_postconfig_msdyn_postruleconfig?: Msdyn_postruleconfig[] | undefined;
    private _msdyn_postconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_postconfig_ProcessSession?: Processsession[] | undefined;
    private _msdyn_postconfig_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_postconfig_wallsavedquery?: Msdyn_wallsavedquery[] | undefined;
    private _msdyn_postconfigid?: string | undefined;
    private _msdyn_status?: string | undefined;
    private _organizationid?: Organization | undefined;
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
     * Instantiates a new msdyn_postconfig and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_postconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_postconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_postconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_postconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_postconfig)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_postconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_postconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_postconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_postconfig).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_postconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_postconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_postconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_configurewall": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_configurewall = n.getBooleanValue(); },
            "msdyn_entitydisplayname": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_entitydisplayname = n.getStringValue(); },
            "msdyn_entityname": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_entityname = n.getStringValue(); },
            "msdyn_followingviewid": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_followingviewid = n.getStringValue(); },
            "msdyn_followingviewid2": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_followingviewid2 = n.getStringValue(); },
            "msdyn_otc": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_otc = n.getNumberValue(); },
            "msdyn_postconfig_AsyncOperations": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_postconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_postconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_postconfig_msdyn_postruleconfig": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_msdyn_postruleconfig = n.getCollectionOfObjectValues<Msdyn_postruleconfig>(createMsdyn_postruleconfigFromDiscriminatorValue); },
            "msdyn_postconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_postconfig_ProcessSession": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_postconfig_SyncErrors": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_postconfig_wallsavedquery": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfig_wallsavedquery = n.getCollectionOfObjectValues<Msdyn_wallsavedquery>(createMsdyn_wallsavedqueryFromDiscriminatorValue); },
            "msdyn_postconfigid": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_postconfigid = n.getStringValue(); },
            "msdyn_status": (o, n) => { (o as unknown as Msdyn_postconfig).msdyn_status = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_postconfig).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_postconfig).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_postconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_postconfig).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_postconfig).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_postconfig).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_postconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_configurewall property value. 
     * @returns a boolean
     */
    public get msdyn_configurewall() {
        return this._msdyn_configurewall;
    };
    /**
     * Sets the msdyn_configurewall property value. 
     * @param value Value to set for the msdyn_configurewall property.
     */
    public set msdyn_configurewall(value: boolean | undefined) {
        this._msdyn_configurewall = value;
    };
    /**
     * Gets the msdyn_entitydisplayname property value. 
     * @returns a string
     */
    public get msdyn_entitydisplayname() {
        return this._msdyn_entitydisplayname;
    };
    /**
     * Sets the msdyn_entitydisplayname property value. 
     * @param value Value to set for the msdyn_entitydisplayname property.
     */
    public set msdyn_entitydisplayname(value: string | undefined) {
        this._msdyn_entitydisplayname = value;
    };
    /**
     * Gets the msdyn_entityname property value. 
     * @returns a string
     */
    public get msdyn_entityname() {
        return this._msdyn_entityname;
    };
    /**
     * Sets the msdyn_entityname property value. 
     * @param value Value to set for the msdyn_entityname property.
     */
    public set msdyn_entityname(value: string | undefined) {
        this._msdyn_entityname = value;
    };
    /**
     * Gets the msdyn_followingviewid property value. 
     * @returns a string
     */
    public get msdyn_followingviewid() {
        return this._msdyn_followingviewid;
    };
    /**
     * Sets the msdyn_followingviewid property value. 
     * @param value Value to set for the msdyn_followingviewid property.
     */
    public set msdyn_followingviewid(value: string | undefined) {
        this._msdyn_followingviewid = value;
    };
    /**
     * Gets the msdyn_followingviewid2 property value. 
     * @returns a string
     */
    public get msdyn_followingviewid2() {
        return this._msdyn_followingviewid2;
    };
    /**
     * Sets the msdyn_followingviewid2 property value. 
     * @param value Value to set for the msdyn_followingviewid2 property.
     */
    public set msdyn_followingviewid2(value: string | undefined) {
        this._msdyn_followingviewid2 = value;
    };
    /**
     * Gets the msdyn_otc property value. 
     * @returns a integer
     */
    public get msdyn_otc() {
        return this._msdyn_otc;
    };
    /**
     * Sets the msdyn_otc property value. 
     * @param value Value to set for the msdyn_otc property.
     */
    public set msdyn_otc(value: number | undefined) {
        this._msdyn_otc = value;
    };
    /**
     * Gets the msdyn_postconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_postconfig_AsyncOperations() {
        return this._msdyn_postconfig_AsyncOperations;
    };
    /**
     * Sets the msdyn_postconfig_AsyncOperations property value. 
     * @param value Value to set for the msdyn_postconfig_AsyncOperations property.
     */
    public set msdyn_postconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_postconfig_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_postconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_postconfig_BulkDeleteFailures() {
        return this._msdyn_postconfig_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_postconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_postconfig_BulkDeleteFailures property.
     */
    public set msdyn_postconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_postconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_postconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_postconfig_MailboxTrackingFolders() {
        return this._msdyn_postconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_postconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_postconfig_MailboxTrackingFolders property.
     */
    public set msdyn_postconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_postconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_postconfig_msdyn_postruleconfig property value. 
     * @returns a msdyn_postruleconfig
     */
    public get msdyn_postconfig_msdyn_postruleconfig() {
        return this._msdyn_postconfig_msdyn_postruleconfig;
    };
    /**
     * Sets the msdyn_postconfig_msdyn_postruleconfig property value. 
     * @param value Value to set for the msdyn_postconfig_msdyn_postruleconfig property.
     */
    public set msdyn_postconfig_msdyn_postruleconfig(value: Msdyn_postruleconfig[] | undefined) {
        this._msdyn_postconfig_msdyn_postruleconfig = value;
    };
    /**
     * Gets the msdyn_postconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_postconfig_PrincipalObjectAttributeAccesses() {
        return this._msdyn_postconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_postconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_postconfig_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_postconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_postconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_postconfig_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_postconfig_ProcessSession() {
        return this._msdyn_postconfig_ProcessSession;
    };
    /**
     * Sets the msdyn_postconfig_ProcessSession property value. 
     * @param value Value to set for the msdyn_postconfig_ProcessSession property.
     */
    public set msdyn_postconfig_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_postconfig_ProcessSession = value;
    };
    /**
     * Gets the msdyn_postconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_postconfig_SyncErrors() {
        return this._msdyn_postconfig_SyncErrors;
    };
    /**
     * Sets the msdyn_postconfig_SyncErrors property value. 
     * @param value Value to set for the msdyn_postconfig_SyncErrors property.
     */
    public set msdyn_postconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_postconfig_SyncErrors = value;
    };
    /**
     * Gets the msdyn_postconfig_wallsavedquery property value. 
     * @returns a msdyn_wallsavedquery
     */
    public get msdyn_postconfig_wallsavedquery() {
        return this._msdyn_postconfig_wallsavedquery;
    };
    /**
     * Sets the msdyn_postconfig_wallsavedquery property value. 
     * @param value Value to set for the msdyn_postconfig_wallsavedquery property.
     */
    public set msdyn_postconfig_wallsavedquery(value: Msdyn_wallsavedquery[] | undefined) {
        this._msdyn_postconfig_wallsavedquery = value;
    };
    /**
     * Gets the msdyn_postconfigid property value. 
     * @returns a string
     */
    public get msdyn_postconfigid() {
        return this._msdyn_postconfigid;
    };
    /**
     * Sets the msdyn_postconfigid property value. 
     * @param value Value to set for the msdyn_postconfigid property.
     */
    public set msdyn_postconfigid(value: string | undefined) {
        this._msdyn_postconfigid = value;
    };
    /**
     * Gets the msdyn_status property value. 
     * @returns a string
     */
    public get msdyn_status() {
        return this._msdyn_status;
    };
    /**
     * Sets the msdyn_status property value. 
     * @param value Value to set for the msdyn_status property.
     */
    public set msdyn_status(value: string | undefined) {
        this._msdyn_status = value;
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_configurewall", this.msdyn_configurewall);
        writer.writeStringValue("msdyn_entitydisplayname", this.msdyn_entitydisplayname);
        writer.writeStringValue("msdyn_entityname", this.msdyn_entityname);
        writer.writeStringValue("msdyn_followingviewid", this.msdyn_followingviewid);
        writer.writeStringValue("msdyn_followingviewid2", this.msdyn_followingviewid2);
        writer.writeNumberValue("msdyn_otc", this.msdyn_otc);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_postconfig_AsyncOperations", this.msdyn_postconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_postconfig_BulkDeleteFailures", this.msdyn_postconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_postconfig_MailboxTrackingFolders", this.msdyn_postconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_postruleconfig>("msdyn_postconfig_msdyn_postruleconfig", this.msdyn_postconfig_msdyn_postruleconfig);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_postconfig_PrincipalObjectAttributeAccesses", this.msdyn_postconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_postconfig_ProcessSession", this.msdyn_postconfig_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_postconfig_SyncErrors", this.msdyn_postconfig_SyncErrors);
        writer.writeCollectionOfObjectValues<Msdyn_wallsavedquery>("msdyn_postconfig_wallsavedquery", this.msdyn_postconfig_wallsavedquery);
        writer.writeStringValue("msdyn_postconfigid", this.msdyn_postconfigid);
        writer.writeStringValue("msdyn_status", this.msdyn_status);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
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
