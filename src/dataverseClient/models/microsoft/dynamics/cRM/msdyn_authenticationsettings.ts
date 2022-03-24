import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_livechatconfigFromDiscriminatorValue} from './createMsdyn_livechatconfigFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_livechatconfig, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_authenticationsettings extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_authenticationsettings_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_authenticationsettings_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_authenticationsettings_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_authenticationsettings_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_authenticationsettings_ProcessSession?: Processsession[] | undefined;
    private _msdyn_authenticationsettings_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_authenticationsettingsid?: string | undefined;
    private _msdyn_authenticationtype?: number | undefined;
    private _msdyn_javascriptclientfunction?: string | undefined;
    private _msdyn_msdyn_authsettings_msdyn_livechatconfig?: Msdyn_livechatconfig[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_publickeyurl?: string | undefined;
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
     * Instantiates a new msdyn_authenticationsettings and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_authenticationsettings)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_authenticationsettings).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_authenticationsettings).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_authenticationsettings).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_authenticationsettings).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_authenticationsettings).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_authenticationsettings).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_authenticationsettings).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_authenticationsettings_AsyncOperations": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationsettings_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_authenticationsettings_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationsettings_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_authenticationsettings_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationsettings_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_authenticationsettings_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationsettings_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_authenticationsettings_ProcessSession": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationsettings_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_authenticationsettings_SyncErrors": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationsettings_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_authenticationsettingsid": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationsettingsid = n.getStringValue(); },
            "msdyn_authenticationtype": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_authenticationtype = n.getNumberValue(); },
            "msdyn_javascriptclientfunction": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_javascriptclientfunction = n.getStringValue(); },
            "msdyn_msdyn_authsettings_msdyn_livechatconfig": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_msdyn_authsettings_msdyn_livechatconfig = n.getCollectionOfObjectValues<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_name = n.getStringValue(); },
            "msdyn_publickeyurl": (o, n) => { (o as unknown as Msdyn_authenticationsettings).msdyn_publickeyurl = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_authenticationsettings).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_authenticationsettings).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_authenticationsettings).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_authenticationsettings).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_authenticationsettings).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_authenticationsettings).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_authenticationsettings).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_authenticationsettings).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_authenticationsettings).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_authenticationsettings).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_authenticationsettings_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_authenticationsettings_AsyncOperations() {
        return this._msdyn_authenticationsettings_AsyncOperations;
    };
    /**
     * Sets the msdyn_authenticationsettings_AsyncOperations property value. 
     * @param value Value to set for the msdyn_authenticationsettings_AsyncOperations property.
     */
    public set msdyn_authenticationsettings_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_authenticationsettings_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_authenticationsettings_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_authenticationsettings_BulkDeleteFailures() {
        return this._msdyn_authenticationsettings_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_authenticationsettings_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_authenticationsettings_BulkDeleteFailures property.
     */
    public set msdyn_authenticationsettings_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_authenticationsettings_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_authenticationsettings_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_authenticationsettings_MailboxTrackingFolders() {
        return this._msdyn_authenticationsettings_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_authenticationsettings_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_authenticationsettings_MailboxTrackingFolders property.
     */
    public set msdyn_authenticationsettings_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_authenticationsettings_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_authenticationsettings_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_authenticationsettings_PrincipalObjectAttributeAccesses() {
        return this._msdyn_authenticationsettings_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_authenticationsettings_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_authenticationsettings_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_authenticationsettings_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_authenticationsettings_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_authenticationsettings_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_authenticationsettings_ProcessSession() {
        return this._msdyn_authenticationsettings_ProcessSession;
    };
    /**
     * Sets the msdyn_authenticationsettings_ProcessSession property value. 
     * @param value Value to set for the msdyn_authenticationsettings_ProcessSession property.
     */
    public set msdyn_authenticationsettings_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_authenticationsettings_ProcessSession = value;
    };
    /**
     * Gets the msdyn_authenticationsettings_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_authenticationsettings_SyncErrors() {
        return this._msdyn_authenticationsettings_SyncErrors;
    };
    /**
     * Sets the msdyn_authenticationsettings_SyncErrors property value. 
     * @param value Value to set for the msdyn_authenticationsettings_SyncErrors property.
     */
    public set msdyn_authenticationsettings_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_authenticationsettings_SyncErrors = value;
    };
    /**
     * Gets the msdyn_authenticationsettingsid property value. 
     * @returns a string
     */
    public get msdyn_authenticationsettingsid() {
        return this._msdyn_authenticationsettingsid;
    };
    /**
     * Sets the msdyn_authenticationsettingsid property value. 
     * @param value Value to set for the msdyn_authenticationsettingsid property.
     */
    public set msdyn_authenticationsettingsid(value: string | undefined) {
        this._msdyn_authenticationsettingsid = value;
    };
    /**
     * Gets the msdyn_authenticationtype property value. 
     * @returns a integer
     */
    public get msdyn_authenticationtype() {
        return this._msdyn_authenticationtype;
    };
    /**
     * Sets the msdyn_authenticationtype property value. 
     * @param value Value to set for the msdyn_authenticationtype property.
     */
    public set msdyn_authenticationtype(value: number | undefined) {
        this._msdyn_authenticationtype = value;
    };
    /**
     * Gets the msdyn_javascriptclientfunction property value. 
     * @returns a string
     */
    public get msdyn_javascriptclientfunction() {
        return this._msdyn_javascriptclientfunction;
    };
    /**
     * Sets the msdyn_javascriptclientfunction property value. 
     * @param value Value to set for the msdyn_javascriptclientfunction property.
     */
    public set msdyn_javascriptclientfunction(value: string | undefined) {
        this._msdyn_javascriptclientfunction = value;
    };
    /**
     * Gets the msdyn_msdyn_authsettings_msdyn_livechatconfig property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_msdyn_authsettings_msdyn_livechatconfig() {
        return this._msdyn_msdyn_authsettings_msdyn_livechatconfig;
    };
    /**
     * Sets the msdyn_msdyn_authsettings_msdyn_livechatconfig property value. 
     * @param value Value to set for the msdyn_msdyn_authsettings_msdyn_livechatconfig property.
     */
    public set msdyn_msdyn_authsettings_msdyn_livechatconfig(value: Msdyn_livechatconfig[] | undefined) {
        this._msdyn_msdyn_authsettings_msdyn_livechatconfig = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_publickeyurl property value. 
     * @returns a string
     */
    public get msdyn_publickeyurl() {
        return this._msdyn_publickeyurl;
    };
    /**
     * Sets the msdyn_publickeyurl property value. 
     * @param value Value to set for the msdyn_publickeyurl property.
     */
    public set msdyn_publickeyurl(value: string | undefined) {
        this._msdyn_publickeyurl = value;
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_authenticationsettings_AsyncOperations", this.msdyn_authenticationsettings_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_authenticationsettings_BulkDeleteFailures", this.msdyn_authenticationsettings_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_authenticationsettings_MailboxTrackingFolders", this.msdyn_authenticationsettings_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_authenticationsettings_PrincipalObjectAttributeAccesses", this.msdyn_authenticationsettings_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_authenticationsettings_ProcessSession", this.msdyn_authenticationsettings_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_authenticationsettings_SyncErrors", this.msdyn_authenticationsettings_SyncErrors);
        writer.writeStringValue("msdyn_authenticationsettingsid", this.msdyn_authenticationsettingsid);
        writer.writeNumberValue("msdyn_authenticationtype", this.msdyn_authenticationtype);
        writer.writeStringValue("msdyn_javascriptclientfunction", this.msdyn_javascriptclientfunction);
        writer.writeCollectionOfObjectValues<Msdyn_livechatconfig>("msdyn_msdyn_authsettings_msdyn_livechatconfig", this.msdyn_msdyn_authsettings_msdyn_livechatconfig);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_publickeyurl", this.msdyn_publickeyurl);
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
