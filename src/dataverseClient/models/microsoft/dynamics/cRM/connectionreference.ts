import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectorFromDiscriminatorValue} from './createConnectorFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_aiconfigurationFromDiscriminatorValue} from './createMsdyn_aiconfigurationFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Connector, Crmbaseentity, Mailboxtrackingfolder, Msdyn_aiconfiguration, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Connectionreference extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __customconnectorid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _connectionid?: string | undefined;
    private _connectionreference_AsyncOperations?: Asyncoperation[] | undefined;
    private _connectionreference_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _connectionreference_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _connectionreference_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _connectionreference_ProcessSession?: Processsession[] | undefined;
    private _connectionreference_SyncErrors?: Syncerror[] | undefined;
    private _connectionreferencedisplayname?: string | undefined;
    private _connectionreferenceid?: string | undefined;
    private _connectionreferencelogicalname?: string | undefined;
    private _connectorid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customConnectorId?: Connector | undefined;
    private _description?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_AIConfiguration_ConnectionReference?: Msdyn_aiconfiguration[] | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _customconnectorid_value property value. 
     * @returns a string
     */
    public get _customconnectorid_value() {
        return this.__customconnectorid_value;
    };
    /**
     * Sets the _customconnectorid_value property value. 
     * @param value Value to set for the _customconnectorid_value property.
     */
    public set _customconnectorid_value(value: string | undefined) {
        this.__customconnectorid_value = value;
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
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Gets the connectionid property value. 
     * @returns a string
     */
    public get connectionid() {
        return this._connectionid;
    };
    /**
     * Sets the connectionid property value. 
     * @param value Value to set for the connectionid property.
     */
    public set connectionid(value: string | undefined) {
        this._connectionid = value;
    };
    /**
     * Gets the connectionreference_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get connectionreference_AsyncOperations() {
        return this._connectionreference_AsyncOperations;
    };
    /**
     * Sets the connectionreference_AsyncOperations property value. 
     * @param value Value to set for the connectionreference_AsyncOperations property.
     */
    public set connectionreference_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._connectionreference_AsyncOperations = value;
    };
    /**
     * Gets the connectionreference_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get connectionreference_BulkDeleteFailures() {
        return this._connectionreference_BulkDeleteFailures;
    };
    /**
     * Sets the connectionreference_BulkDeleteFailures property value. 
     * @param value Value to set for the connectionreference_BulkDeleteFailures property.
     */
    public set connectionreference_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._connectionreference_BulkDeleteFailures = value;
    };
    /**
     * Gets the connectionreference_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get connectionreference_MailboxTrackingFolders() {
        return this._connectionreference_MailboxTrackingFolders;
    };
    /**
     * Sets the connectionreference_MailboxTrackingFolders property value. 
     * @param value Value to set for the connectionreference_MailboxTrackingFolders property.
     */
    public set connectionreference_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._connectionreference_MailboxTrackingFolders = value;
    };
    /**
     * Gets the connectionreference_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get connectionreference_PrincipalObjectAttributeAccesses() {
        return this._connectionreference_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the connectionreference_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the connectionreference_PrincipalObjectAttributeAccesses property.
     */
    public set connectionreference_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._connectionreference_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the connectionreference_ProcessSession property value. 
     * @returns a processsession
     */
    public get connectionreference_ProcessSession() {
        return this._connectionreference_ProcessSession;
    };
    /**
     * Sets the connectionreference_ProcessSession property value. 
     * @param value Value to set for the connectionreference_ProcessSession property.
     */
    public set connectionreference_ProcessSession(value: Processsession[] | undefined) {
        this._connectionreference_ProcessSession = value;
    };
    /**
     * Gets the connectionreference_SyncErrors property value. 
     * @returns a syncerror
     */
    public get connectionreference_SyncErrors() {
        return this._connectionreference_SyncErrors;
    };
    /**
     * Sets the connectionreference_SyncErrors property value. 
     * @param value Value to set for the connectionreference_SyncErrors property.
     */
    public set connectionreference_SyncErrors(value: Syncerror[] | undefined) {
        this._connectionreference_SyncErrors = value;
    };
    /**
     * Gets the connectionreferencedisplayname property value. 
     * @returns a string
     */
    public get connectionreferencedisplayname() {
        return this._connectionreferencedisplayname;
    };
    /**
     * Sets the connectionreferencedisplayname property value. 
     * @param value Value to set for the connectionreferencedisplayname property.
     */
    public set connectionreferencedisplayname(value: string | undefined) {
        this._connectionreferencedisplayname = value;
    };
    /**
     * Gets the connectionreferenceid property value. 
     * @returns a string
     */
    public get connectionreferenceid() {
        return this._connectionreferenceid;
    };
    /**
     * Sets the connectionreferenceid property value. 
     * @param value Value to set for the connectionreferenceid property.
     */
    public set connectionreferenceid(value: string | undefined) {
        this._connectionreferenceid = value;
    };
    /**
     * Gets the connectionreferencelogicalname property value. 
     * @returns a string
     */
    public get connectionreferencelogicalname() {
        return this._connectionreferencelogicalname;
    };
    /**
     * Sets the connectionreferencelogicalname property value. 
     * @param value Value to set for the connectionreferencelogicalname property.
     */
    public set connectionreferencelogicalname(value: string | undefined) {
        this._connectionreferencelogicalname = value;
    };
    /**
     * Gets the connectorid property value. 
     * @returns a string
     */
    public get connectorid() {
        return this._connectorid;
    };
    /**
     * Sets the connectorid property value. 
     * @param value Value to set for the connectorid property.
     */
    public set connectorid(value: string | undefined) {
        this._connectorid = value;
    };
    /**
     * Instantiates a new connectionreference and sets the default values.
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
     * Gets the customConnectorId property value. 
     * @returns a connector
     */
    public get customConnectorId() {
        return this._customConnectorId;
    };
    /**
     * Sets the customConnectorId property value. 
     * @param value Value to set for the CustomConnectorId property.
     */
    public set customConnectorId(value: Connector | undefined) {
        this._customConnectorId = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Connectionreference)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Connectionreference)._createdonbehalfby_value = n.getStringValue(); },
            "_customconnectorid_value": (o, n) => { (o as unknown as Connectionreference)._customconnectorid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Connectionreference)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Connectionreference)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Connectionreference)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Connectionreference)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Connectionreference)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Connectionreference)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Connectionreference).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Connectionreference).componentstate = n.getNumberValue(); },
            "connectionid": (o, n) => { (o as unknown as Connectionreference).connectionid = n.getStringValue(); },
            "connectionreference_AsyncOperations": (o, n) => { (o as unknown as Connectionreference).connectionreference_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "connectionreference_BulkDeleteFailures": (o, n) => { (o as unknown as Connectionreference).connectionreference_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "connectionreference_MailboxTrackingFolders": (o, n) => { (o as unknown as Connectionreference).connectionreference_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "connectionreference_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Connectionreference).connectionreference_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "connectionreference_ProcessSession": (o, n) => { (o as unknown as Connectionreference).connectionreference_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "connectionreference_SyncErrors": (o, n) => { (o as unknown as Connectionreference).connectionreference_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "connectionreferencedisplayname": (o, n) => { (o as unknown as Connectionreference).connectionreferencedisplayname = n.getStringValue(); },
            "connectionreferenceid": (o, n) => { (o as unknown as Connectionreference).connectionreferenceid = n.getStringValue(); },
            "connectionreferencelogicalname": (o, n) => { (o as unknown as Connectionreference).connectionreferencelogicalname = n.getStringValue(); },
            "connectorid": (o, n) => { (o as unknown as Connectionreference).connectorid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Connectionreference).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Connectionreference).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Connectionreference).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customConnectorId": (o, n) => { (o as unknown as Connectionreference).customConnectorId = n.getObjectValue<Connector>(createConnectorFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Connectionreference).description = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Connectionreference).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Connectionreference).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Connectionreference).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Connectionreference).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Connectionreference).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Connectionreference).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_AIConfiguration_ConnectionReference": (o, n) => { (o as unknown as Connectionreference).msdyn_AIConfiguration_ConnectionReference = n.getCollectionOfObjectValues<Msdyn_aiconfiguration>(createMsdyn_aiconfigurationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Connectionreference).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Connectionreference).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Connectionreference).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Connectionreference).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Connectionreference).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Connectionreference).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Connectionreference).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Connectionreference).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Connectionreference).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Connectionreference).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Connectionreference).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Connectionreference).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the msdyn_AIConfiguration_ConnectionReference property value. 
     * @returns a msdyn_aiconfiguration
     */
    public get msdyn_AIConfiguration_ConnectionReference() {
        return this._msdyn_AIConfiguration_ConnectionReference;
    };
    /**
     * Sets the msdyn_AIConfiguration_ConnectionReference property value. 
     * @param value Value to set for the msdyn_AIConfiguration_ConnectionReference property.
     */
    public set msdyn_AIConfiguration_ConnectionReference(value: Msdyn_aiconfiguration[] | undefined) {
        this._msdyn_AIConfiguration_ConnectionReference = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
        writer.writeStringValue("_customconnectorid_value", this._customconnectorid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("connectionid", this.connectionid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("connectionreference_AsyncOperations", this.connectionreference_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("connectionreference_BulkDeleteFailures", this.connectionreference_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("connectionreference_MailboxTrackingFolders", this.connectionreference_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("connectionreference_PrincipalObjectAttributeAccesses", this.connectionreference_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("connectionreference_ProcessSession", this.connectionreference_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("connectionreference_SyncErrors", this.connectionreference_SyncErrors);
        writer.writeStringValue("connectionreferencedisplayname", this.connectionreferencedisplayname);
        writer.writeStringValue("connectionreferenceid", this.connectionreferenceid);
        writer.writeStringValue("connectionreferencelogicalname", this.connectionreferencelogicalname);
        writer.writeStringValue("connectorid", this.connectorid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Connector>("customConnectorId", this.customConnectorId);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_aiconfiguration>("msdyn_AIConfiguration_ConnectionReference", this.msdyn_AIConfiguration_ConnectionReference);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
