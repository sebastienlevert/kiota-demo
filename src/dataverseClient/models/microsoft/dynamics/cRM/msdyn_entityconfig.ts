import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_liveworkstream, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_entityconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_liveworkstreamid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_entity?: string | undefined;
    private _msdyn_entityconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_entityconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_entityconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_entityconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_entityconfig_ProcessSession?: Processsession[] | undefined;
    private _msdyn_entityconfig_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_entityconfigid?: string | undefined;
    private _msdyn_entitysetname?: string | undefined;
    private _msdyn_LiveWorkStreamId?: Msdyn_liveworkstream | undefined;
    private _msdyn_relationshipname?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_liveworkstreamid_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkstreamid_value() {
        return this.__msdyn_liveworkstreamid_value;
    };
    /**
     * Sets the _msdyn_liveworkstreamid_value property value. 
     * @param value Value to set for the _msdyn_liveworkstreamid_value property.
     */
    public set _msdyn_liveworkstreamid_value(value: string | undefined) {
        this.__msdyn_liveworkstreamid_value = value;
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
     * Instantiates a new msdyn_entityconfig and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_liveworkstreamid_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._msdyn_liveworkstreamid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_entityconfig)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_entityconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_entityconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_entityconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_entityconfig).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_entityconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_entityconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_entityconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_entity": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entity = n.getStringValue(); },
            "msdyn_entityconfig_AsyncOperations": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entityconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_entityconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entityconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_entityconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entityconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_entityconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entityconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_entityconfig_ProcessSession": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entityconfig_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_entityconfig_SyncErrors": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entityconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_entityconfigid": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entityconfigid = n.getStringValue(); },
            "msdyn_entitysetname": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_entitysetname = n.getStringValue(); },
            "msdyn_LiveWorkStreamId": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_LiveWorkStreamId = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_relationshipname": (o, n) => { (o as unknown as Msdyn_entityconfig).msdyn_relationshipname = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_entityconfig).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_entityconfig).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_entityconfig).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_entityconfig).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_entityconfig).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_entityconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_entityconfig).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_entityconfig).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_entityconfig).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_entityconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_entity property value. 
     * @returns a string
     */
    public get msdyn_entity() {
        return this._msdyn_entity;
    };
    /**
     * Sets the msdyn_entity property value. 
     * @param value Value to set for the msdyn_entity property.
     */
    public set msdyn_entity(value: string | undefined) {
        this._msdyn_entity = value;
    };
    /**
     * Gets the msdyn_entityconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_entityconfig_AsyncOperations() {
        return this._msdyn_entityconfig_AsyncOperations;
    };
    /**
     * Sets the msdyn_entityconfig_AsyncOperations property value. 
     * @param value Value to set for the msdyn_entityconfig_AsyncOperations property.
     */
    public set msdyn_entityconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_entityconfig_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_entityconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_entityconfig_BulkDeleteFailures() {
        return this._msdyn_entityconfig_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_entityconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_entityconfig_BulkDeleteFailures property.
     */
    public set msdyn_entityconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_entityconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_entityconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_entityconfig_MailboxTrackingFolders() {
        return this._msdyn_entityconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_entityconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_entityconfig_MailboxTrackingFolders property.
     */
    public set msdyn_entityconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_entityconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_entityconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_entityconfig_PrincipalObjectAttributeAccesses() {
        return this._msdyn_entityconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_entityconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_entityconfig_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_entityconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_entityconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_entityconfig_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_entityconfig_ProcessSession() {
        return this._msdyn_entityconfig_ProcessSession;
    };
    /**
     * Sets the msdyn_entityconfig_ProcessSession property value. 
     * @param value Value to set for the msdyn_entityconfig_ProcessSession property.
     */
    public set msdyn_entityconfig_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_entityconfig_ProcessSession = value;
    };
    /**
     * Gets the msdyn_entityconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_entityconfig_SyncErrors() {
        return this._msdyn_entityconfig_SyncErrors;
    };
    /**
     * Sets the msdyn_entityconfig_SyncErrors property value. 
     * @param value Value to set for the msdyn_entityconfig_SyncErrors property.
     */
    public set msdyn_entityconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_entityconfig_SyncErrors = value;
    };
    /**
     * Gets the msdyn_entityconfigid property value. 
     * @returns a string
     */
    public get msdyn_entityconfigid() {
        return this._msdyn_entityconfigid;
    };
    /**
     * Sets the msdyn_entityconfigid property value. 
     * @param value Value to set for the msdyn_entityconfigid property.
     */
    public set msdyn_entityconfigid(value: string | undefined) {
        this._msdyn_entityconfigid = value;
    };
    /**
     * Gets the msdyn_entitysetname property value. 
     * @returns a string
     */
    public get msdyn_entitysetname() {
        return this._msdyn_entitysetname;
    };
    /**
     * Sets the msdyn_entitysetname property value. 
     * @param value Value to set for the msdyn_entitysetname property.
     */
    public set msdyn_entitysetname(value: string | undefined) {
        this._msdyn_entitysetname = value;
    };
    /**
     * Gets the msdyn_LiveWorkStreamId property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_LiveWorkStreamId() {
        return this._msdyn_LiveWorkStreamId;
    };
    /**
     * Sets the msdyn_LiveWorkStreamId property value. 
     * @param value Value to set for the msdyn_LiveWorkStreamId property.
     */
    public set msdyn_LiveWorkStreamId(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_LiveWorkStreamId = value;
    };
    /**
     * Gets the msdyn_relationshipname property value. 
     * @returns a string
     */
    public get msdyn_relationshipname() {
        return this._msdyn_relationshipname;
    };
    /**
     * Sets the msdyn_relationshipname property value. 
     * @param value Value to set for the msdyn_relationshipname property.
     */
    public set msdyn_relationshipname(value: string | undefined) {
        this._msdyn_relationshipname = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
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
        writer.writeStringValue("_msdyn_liveworkstreamid_value", this._msdyn_liveworkstreamid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_entity", this.msdyn_entity);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_entityconfig_AsyncOperations", this.msdyn_entityconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_entityconfig_BulkDeleteFailures", this.msdyn_entityconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_entityconfig_MailboxTrackingFolders", this.msdyn_entityconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_entityconfig_PrincipalObjectAttributeAccesses", this.msdyn_entityconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_entityconfig_ProcessSession", this.msdyn_entityconfig_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_entityconfig_SyncErrors", this.msdyn_entityconfig_SyncErrors);
        writer.writeStringValue("msdyn_entityconfigid", this.msdyn_entityconfigid);
        writer.writeStringValue("msdyn_entitysetname", this.msdyn_entitysetname);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_LiveWorkStreamId", this.msdyn_LiveWorkStreamId);
        writer.writeStringValue("msdyn_relationshipname", this.msdyn_relationshipname);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
