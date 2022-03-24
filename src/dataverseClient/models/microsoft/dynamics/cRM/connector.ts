import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionreferenceFromDiscriminatorValue} from './createConnectionreferenceFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Connectionreference, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Connector extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _connectionparameters?: string | undefined;
    private _connector_AsyncOperations?: Asyncoperation[] | undefined;
    private _connector_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _connector_connectionreference?: Connectionreference[] | undefined;
    private _connector_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _connector_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _connector_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _connector_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _connector_ProcessSession?: Processsession[] | undefined;
    private _connector_SyncErrors?: Syncerror[] | undefined;
    private _connectorid?: string | undefined;
    private _connectoridunique?: string | undefined;
    private _connectorinternalid?: string | undefined;
    private _connectortype?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _displayname?: string | undefined;
    private _iconblob?: string | undefined;
    private _iconblob_timestamp?: number | undefined;
    private _iconblob_url?: string | undefined;
    private _iconblobid?: string | undefined;
    private _iconbrandcolor?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _openapidefinition?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _policytemplateinstances?: string | undefined;
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
     * Gets the connectionparameters property value. 
     * @returns a string
     */
    public get connectionparameters() {
        return this._connectionparameters;
    };
    /**
     * Sets the connectionparameters property value. 
     * @param value Value to set for the connectionparameters property.
     */
    public set connectionparameters(value: string | undefined) {
        this._connectionparameters = value;
    };
    /**
     * Gets the connector_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get connector_AsyncOperations() {
        return this._connector_AsyncOperations;
    };
    /**
     * Sets the connector_AsyncOperations property value. 
     * @param value Value to set for the connector_AsyncOperations property.
     */
    public set connector_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._connector_AsyncOperations = value;
    };
    /**
     * Gets the connector_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get connector_BulkDeleteFailures() {
        return this._connector_BulkDeleteFailures;
    };
    /**
     * Sets the connector_BulkDeleteFailures property value. 
     * @param value Value to set for the connector_BulkDeleteFailures property.
     */
    public set connector_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._connector_BulkDeleteFailures = value;
    };
    /**
     * Gets the connector_connectionreference property value. 
     * @returns a connectionreference
     */
    public get connector_connectionreference() {
        return this._connector_connectionreference;
    };
    /**
     * Sets the connector_connectionreference property value. 
     * @param value Value to set for the connector_connectionreference property.
     */
    public set connector_connectionreference(value: Connectionreference[] | undefined) {
        this._connector_connectionreference = value;
    };
    /**
     * Gets the connector_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get connector_DuplicateBaseRecord() {
        return this._connector_DuplicateBaseRecord;
    };
    /**
     * Sets the connector_DuplicateBaseRecord property value. 
     * @param value Value to set for the connector_DuplicateBaseRecord property.
     */
    public set connector_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._connector_DuplicateBaseRecord = value;
    };
    /**
     * Gets the connector_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get connector_DuplicateMatchingRecord() {
        return this._connector_DuplicateMatchingRecord;
    };
    /**
     * Sets the connector_DuplicateMatchingRecord property value. 
     * @param value Value to set for the connector_DuplicateMatchingRecord property.
     */
    public set connector_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._connector_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the connector_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get connector_MailboxTrackingFolders() {
        return this._connector_MailboxTrackingFolders;
    };
    /**
     * Sets the connector_MailboxTrackingFolders property value. 
     * @param value Value to set for the connector_MailboxTrackingFolders property.
     */
    public set connector_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._connector_MailboxTrackingFolders = value;
    };
    /**
     * Gets the connector_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get connector_PrincipalObjectAttributeAccesses() {
        return this._connector_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the connector_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the connector_PrincipalObjectAttributeAccesses property.
     */
    public set connector_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._connector_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the connector_ProcessSession property value. 
     * @returns a processsession
     */
    public get connector_ProcessSession() {
        return this._connector_ProcessSession;
    };
    /**
     * Sets the connector_ProcessSession property value. 
     * @param value Value to set for the connector_ProcessSession property.
     */
    public set connector_ProcessSession(value: Processsession[] | undefined) {
        this._connector_ProcessSession = value;
    };
    /**
     * Gets the connector_SyncErrors property value. 
     * @returns a syncerror
     */
    public get connector_SyncErrors() {
        return this._connector_SyncErrors;
    };
    /**
     * Sets the connector_SyncErrors property value. 
     * @param value Value to set for the connector_SyncErrors property.
     */
    public set connector_SyncErrors(value: Syncerror[] | undefined) {
        this._connector_SyncErrors = value;
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
     * Gets the connectoridunique property value. 
     * @returns a string
     */
    public get connectoridunique() {
        return this._connectoridunique;
    };
    /**
     * Sets the connectoridunique property value. 
     * @param value Value to set for the connectoridunique property.
     */
    public set connectoridunique(value: string | undefined) {
        this._connectoridunique = value;
    };
    /**
     * Gets the connectorinternalid property value. 
     * @returns a string
     */
    public get connectorinternalid() {
        return this._connectorinternalid;
    };
    /**
     * Sets the connectorinternalid property value. 
     * @param value Value to set for the connectorinternalid property.
     */
    public set connectorinternalid(value: string | undefined) {
        this._connectorinternalid = value;
    };
    /**
     * Gets the connectortype property value. 
     * @returns a integer
     */
    public get connectortype() {
        return this._connectortype;
    };
    /**
     * Sets the connectortype property value. 
     * @param value Value to set for the connectortype property.
     */
    public set connectortype(value: number | undefined) {
        this._connectortype = value;
    };
    /**
     * Instantiates a new connector and sets the default values.
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
     * Gets the displayname property value. 
     * @returns a string
     */
    public get displayname() {
        return this._displayname;
    };
    /**
     * Sets the displayname property value. 
     * @param value Value to set for the displayname property.
     */
    public set displayname(value: string | undefined) {
        this._displayname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Connector)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Connector)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Connector)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Connector)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Connector)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Connector)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Connector)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Connector)._owninguser_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Connector).componentstate = n.getNumberValue(); },
            "connectionparameters": (o, n) => { (o as unknown as Connector).connectionparameters = n.getStringValue(); },
            "connector_AsyncOperations": (o, n) => { (o as unknown as Connector).connector_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "connector_BulkDeleteFailures": (o, n) => { (o as unknown as Connector).connector_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "connector_connectionreference": (o, n) => { (o as unknown as Connector).connector_connectionreference = n.getCollectionOfObjectValues<Connectionreference>(createConnectionreferenceFromDiscriminatorValue); },
            "connector_DuplicateBaseRecord": (o, n) => { (o as unknown as Connector).connector_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "connector_DuplicateMatchingRecord": (o, n) => { (o as unknown as Connector).connector_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "connector_MailboxTrackingFolders": (o, n) => { (o as unknown as Connector).connector_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "connector_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Connector).connector_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "connector_ProcessSession": (o, n) => { (o as unknown as Connector).connector_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "connector_SyncErrors": (o, n) => { (o as unknown as Connector).connector_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "connectorid": (o, n) => { (o as unknown as Connector).connectorid = n.getStringValue(); },
            "connectoridunique": (o, n) => { (o as unknown as Connector).connectoridunique = n.getStringValue(); },
            "connectorinternalid": (o, n) => { (o as unknown as Connector).connectorinternalid = n.getStringValue(); },
            "connectortype": (o, n) => { (o as unknown as Connector).connectortype = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Connector).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Connector).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Connector).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Connector).description = n.getStringValue(); },
            "displayname": (o, n) => { (o as unknown as Connector).displayname = n.getStringValue(); },
            "iconblob": (o, n) => { (o as unknown as Connector).iconblob = n.getStringValue(); },
            "iconblob_timestamp": (o, n) => { (o as unknown as Connector).iconblob_timestamp = n.getNumberValue(); },
            "iconblob_url": (o, n) => { (o as unknown as Connector).iconblob_url = n.getStringValue(); },
            "iconblobid": (o, n) => { (o as unknown as Connector).iconblobid = n.getStringValue(); },
            "iconbrandcolor": (o, n) => { (o as unknown as Connector).iconbrandcolor = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Connector).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Connector).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Connector).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Connector).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Connector).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Connector).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Connector).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Connector).name = n.getStringValue(); },
            "openapidefinition": (o, n) => { (o as unknown as Connector).openapidefinition = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Connector).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Connector).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Connector).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Connector).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Connector).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Connector).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "policytemplateinstances": (o, n) => { (o as unknown as Connector).policytemplateinstances = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Connector).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Connector).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Connector).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Connector).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Connector).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Connector).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the iconblob property value. 
     * @returns a binary
     */
    public get iconblob() {
        return this._iconblob;
    };
    /**
     * Sets the iconblob property value. 
     * @param value Value to set for the iconblob property.
     */
    public set iconblob(value: string | undefined) {
        this._iconblob = value;
    };
    /**
     * Gets the iconblob_timestamp property value. 
     * @returns a int64
     */
    public get iconblob_timestamp() {
        return this._iconblob_timestamp;
    };
    /**
     * Sets the iconblob_timestamp property value. 
     * @param value Value to set for the iconblob_timestamp property.
     */
    public set iconblob_timestamp(value: number | undefined) {
        this._iconblob_timestamp = value;
    };
    /**
     * Gets the iconblob_url property value. 
     * @returns a string
     */
    public get iconblob_url() {
        return this._iconblob_url;
    };
    /**
     * Sets the iconblob_url property value. 
     * @param value Value to set for the iconblob_url property.
     */
    public set iconblob_url(value: string | undefined) {
        this._iconblob_url = value;
    };
    /**
     * Gets the iconblobid property value. 
     * @returns a string
     */
    public get iconblobid() {
        return this._iconblobid;
    };
    /**
     * Sets the iconblobid property value. 
     * @param value Value to set for the iconblobid property.
     */
    public set iconblobid(value: string | undefined) {
        this._iconblobid = value;
    };
    /**
     * Gets the iconbrandcolor property value. 
     * @returns a string
     */
    public get iconbrandcolor() {
        return this._iconbrandcolor;
    };
    /**
     * Sets the iconbrandcolor property value. 
     * @param value Value to set for the iconbrandcolor property.
     */
    public set iconbrandcolor(value: string | undefined) {
        this._iconbrandcolor = value;
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
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
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
     * Gets the openapidefinition property value. 
     * @returns a string
     */
    public get openapidefinition() {
        return this._openapidefinition;
    };
    /**
     * Sets the openapidefinition property value. 
     * @param value Value to set for the openapidefinition property.
     */
    public set openapidefinition(value: string | undefined) {
        this._openapidefinition = value;
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
     * Gets the policytemplateinstances property value. 
     * @returns a string
     */
    public get policytemplateinstances() {
        return this._policytemplateinstances;
    };
    /**
     * Sets the policytemplateinstances property value. 
     * @param value Value to set for the policytemplateinstances property.
     */
    public set policytemplateinstances(value: string | undefined) {
        this._policytemplateinstances = value;
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
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("connectionparameters", this.connectionparameters);
        writer.writeCollectionOfObjectValues<Asyncoperation>("connector_AsyncOperations", this.connector_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("connector_BulkDeleteFailures", this.connector_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connectionreference>("connector_connectionreference", this.connector_connectionreference);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("connector_DuplicateBaseRecord", this.connector_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("connector_DuplicateMatchingRecord", this.connector_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("connector_MailboxTrackingFolders", this.connector_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("connector_PrincipalObjectAttributeAccesses", this.connector_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("connector_ProcessSession", this.connector_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("connector_SyncErrors", this.connector_SyncErrors);
        writer.writeStringValue("connectorid", this.connectorid);
        writer.writeStringValue("connectoridunique", this.connectoridunique);
        writer.writeStringValue("connectorinternalid", this.connectorinternalid);
        writer.writeNumberValue("connectortype", this.connectortype);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayname", this.displayname);
        writer.writeStringValue("iconblob", this.iconblob);
        writer.writeNumberValue("iconblob_timestamp", this.iconblob_timestamp);
        writer.writeStringValue("iconblob_url", this.iconblob_url);
        writer.writeStringValue("iconblobid", this.iconblobid);
        writer.writeStringValue("iconbrandcolor", this.iconbrandcolor);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("openapidefinition", this.openapidefinition);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("policytemplateinstances", this.policytemplateinstances);
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
