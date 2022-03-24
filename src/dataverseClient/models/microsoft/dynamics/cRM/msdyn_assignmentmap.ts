import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_assignmentmap extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_systemuserid_value?: string | undefined;
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
    private _msdyn_applicableforrouting?: boolean | undefined;
    private _msdyn_assignedticks?: string | undefined;
    private _msdyn_assignmentmap_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_assignmentmap_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_assignmentmap_connections1?: Connection[] | undefined;
    private _msdyn_assignmentmap_connections2?: Connection[] | undefined;
    private _msdyn_assignmentmap_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_assignmentmap_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_assignmentmap_ProcessSession?: Processsession[] | undefined;
    private _msdyn_assignmentmap_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_assignmentmapid?: string | undefined;
    private _msdyn_availablecapacity?: number | undefined;
    private _msdyn_maxcapacity?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_systemuserid?: Systemuser | undefined;
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
     * Gets the _msdyn_systemuserid_value property value. 
     * @returns a string
     */
    public get _msdyn_systemuserid_value() {
        return this.__msdyn_systemuserid_value;
    };
    /**
     * Sets the _msdyn_systemuserid_value property value. 
     * @param value Value to set for the _msdyn_systemuserid_value property.
     */
    public set _msdyn_systemuserid_value(value: string | undefined) {
        this.__msdyn_systemuserid_value = value;
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
     * Instantiates a new msdyn_assignmentmap and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_systemuserid_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._msdyn_systemuserid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_assignmentmap)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_assignmentmap).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_assignmentmap).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_assignmentmap).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_assignmentmap).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_assignmentmap).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_assignmentmap).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_assignmentmap).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_applicableforrouting": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_applicableforrouting = n.getBooleanValue(); },
            "msdyn_assignedticks": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignedticks = n.getStringValue(); },
            "msdyn_assignmentmap_AsyncOperations": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_assignmentmap_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_assignmentmap_connections1": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_assignmentmap_connections2": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_assignmentmap_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_assignmentmap_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_assignmentmap_ProcessSession": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_assignmentmap_SyncErrors": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmap_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_assignmentmapid": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_assignmentmapid = n.getStringValue(); },
            "msdyn_availablecapacity": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_availablecapacity = n.getNumberValue(); },
            "msdyn_maxcapacity": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_maxcapacity = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_name = n.getStringValue(); },
            "msdyn_systemuserid": (o, n) => { (o as unknown as Msdyn_assignmentmap).msdyn_systemuserid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_assignmentmap).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_assignmentmap).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_assignmentmap).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_assignmentmap).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_assignmentmap).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_assignmentmap).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_assignmentmap).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_assignmentmap).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_assignmentmap).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_assignmentmap).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_applicableforrouting property value. 
     * @returns a boolean
     */
    public get msdyn_applicableforrouting() {
        return this._msdyn_applicableforrouting;
    };
    /**
     * Sets the msdyn_applicableforrouting property value. 
     * @param value Value to set for the msdyn_applicableforrouting property.
     */
    public set msdyn_applicableforrouting(value: boolean | undefined) {
        this._msdyn_applicableforrouting = value;
    };
    /**
     * Gets the msdyn_assignedticks property value. 
     * @returns a string
     */
    public get msdyn_assignedticks() {
        return this._msdyn_assignedticks;
    };
    /**
     * Sets the msdyn_assignedticks property value. 
     * @param value Value to set for the msdyn_assignedticks property.
     */
    public set msdyn_assignedticks(value: string | undefined) {
        this._msdyn_assignedticks = value;
    };
    /**
     * Gets the msdyn_assignmentmap_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_assignmentmap_AsyncOperations() {
        return this._msdyn_assignmentmap_AsyncOperations;
    };
    /**
     * Sets the msdyn_assignmentmap_AsyncOperations property value. 
     * @param value Value to set for the msdyn_assignmentmap_AsyncOperations property.
     */
    public set msdyn_assignmentmap_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_assignmentmap_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_assignmentmap_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_assignmentmap_BulkDeleteFailures() {
        return this._msdyn_assignmentmap_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_assignmentmap_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_assignmentmap_BulkDeleteFailures property.
     */
    public set msdyn_assignmentmap_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_assignmentmap_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_assignmentmap_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_assignmentmap_connections1() {
        return this._msdyn_assignmentmap_connections1;
    };
    /**
     * Sets the msdyn_assignmentmap_connections1 property value. 
     * @param value Value to set for the msdyn_assignmentmap_connections1 property.
     */
    public set msdyn_assignmentmap_connections1(value: Connection[] | undefined) {
        this._msdyn_assignmentmap_connections1 = value;
    };
    /**
     * Gets the msdyn_assignmentmap_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_assignmentmap_connections2() {
        return this._msdyn_assignmentmap_connections2;
    };
    /**
     * Sets the msdyn_assignmentmap_connections2 property value. 
     * @param value Value to set for the msdyn_assignmentmap_connections2 property.
     */
    public set msdyn_assignmentmap_connections2(value: Connection[] | undefined) {
        this._msdyn_assignmentmap_connections2 = value;
    };
    /**
     * Gets the msdyn_assignmentmap_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_assignmentmap_MailboxTrackingFolders() {
        return this._msdyn_assignmentmap_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_assignmentmap_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_assignmentmap_MailboxTrackingFolders property.
     */
    public set msdyn_assignmentmap_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_assignmentmap_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_assignmentmap_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_assignmentmap_PrincipalObjectAttributeAccesses() {
        return this._msdyn_assignmentmap_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_assignmentmap_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_assignmentmap_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_assignmentmap_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_assignmentmap_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_assignmentmap_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_assignmentmap_ProcessSession() {
        return this._msdyn_assignmentmap_ProcessSession;
    };
    /**
     * Sets the msdyn_assignmentmap_ProcessSession property value. 
     * @param value Value to set for the msdyn_assignmentmap_ProcessSession property.
     */
    public set msdyn_assignmentmap_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_assignmentmap_ProcessSession = value;
    };
    /**
     * Gets the msdyn_assignmentmap_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_assignmentmap_SyncErrors() {
        return this._msdyn_assignmentmap_SyncErrors;
    };
    /**
     * Sets the msdyn_assignmentmap_SyncErrors property value. 
     * @param value Value to set for the msdyn_assignmentmap_SyncErrors property.
     */
    public set msdyn_assignmentmap_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_assignmentmap_SyncErrors = value;
    };
    /**
     * Gets the msdyn_assignmentmapid property value. 
     * @returns a string
     */
    public get msdyn_assignmentmapid() {
        return this._msdyn_assignmentmapid;
    };
    /**
     * Sets the msdyn_assignmentmapid property value. 
     * @param value Value to set for the msdyn_assignmentmapid property.
     */
    public set msdyn_assignmentmapid(value: string | undefined) {
        this._msdyn_assignmentmapid = value;
    };
    /**
     * Gets the msdyn_availablecapacity property value. 
     * @returns a integer
     */
    public get msdyn_availablecapacity() {
        return this._msdyn_availablecapacity;
    };
    /**
     * Sets the msdyn_availablecapacity property value. 
     * @param value Value to set for the msdyn_availablecapacity property.
     */
    public set msdyn_availablecapacity(value: number | undefined) {
        this._msdyn_availablecapacity = value;
    };
    /**
     * Gets the msdyn_maxcapacity property value. 
     * @returns a integer
     */
    public get msdyn_maxcapacity() {
        return this._msdyn_maxcapacity;
    };
    /**
     * Sets the msdyn_maxcapacity property value. 
     * @param value Value to set for the msdyn_maxcapacity property.
     */
    public set msdyn_maxcapacity(value: number | undefined) {
        this._msdyn_maxcapacity = value;
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
     * Gets the msdyn_systemuserid property value. 
     * @returns a systemuser
     */
    public get msdyn_systemuserid() {
        return this._msdyn_systemuserid;
    };
    /**
     * Sets the msdyn_systemuserid property value. 
     * @param value Value to set for the msdyn_systemuserid property.
     */
    public set msdyn_systemuserid(value: Systemuser | undefined) {
        this._msdyn_systemuserid = value;
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
        writer.writeStringValue("_msdyn_systemuserid_value", this._msdyn_systemuserid_value);
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
        writer.writeBooleanValue("msdyn_applicableforrouting", this.msdyn_applicableforrouting);
        writer.writeStringValue("msdyn_assignedticks", this.msdyn_assignedticks);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_assignmentmap_AsyncOperations", this.msdyn_assignmentmap_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_assignmentmap_BulkDeleteFailures", this.msdyn_assignmentmap_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_assignmentmap_connections1", this.msdyn_assignmentmap_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_assignmentmap_connections2", this.msdyn_assignmentmap_connections2);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_assignmentmap_MailboxTrackingFolders", this.msdyn_assignmentmap_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_assignmentmap_PrincipalObjectAttributeAccesses", this.msdyn_assignmentmap_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_assignmentmap_ProcessSession", this.msdyn_assignmentmap_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_assignmentmap_SyncErrors", this.msdyn_assignmentmap_SyncErrors);
        writer.writeStringValue("msdyn_assignmentmapid", this.msdyn_assignmentmapid);
        writer.writeNumberValue("msdyn_availablecapacity", this.msdyn_availablecapacity);
        writer.writeNumberValue("msdyn_maxcapacity", this.msdyn_maxcapacity);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Systemuser>("msdyn_systemuserid", this.msdyn_systemuserid);
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
