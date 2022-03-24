import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_salesroutingrunFromDiscriminatorValue} from './createMsdyn_salesroutingrunFromDiscriminatorValue';
import {createMsdyn_segmentFromDiscriminatorValue} from './createMsdyn_segmentFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Mailboxtrackingfolder, Msdyn_salesroutingrun, Msdyn_segment, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_assignmentrule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_segmentid_value?: string | undefined;
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
    private _msdyn_assignmentrule_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_assignmentrule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_assignmentrule_connections1?: Connection[] | undefined;
    private _msdyn_assignmentrule_connections2?: Connection[] | undefined;
    private _msdyn_assignmentrule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_assignmentrule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_assignmentrule_ProcessSession?: Processsession[] | undefined;
    private _msdyn_assignmentrule_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_assignmentruleid?: string | undefined;
    private _msdyn_attributefilter?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_distributeto?: number | undefined;
    private _msdyn_distributewithavailability?: boolean | undefined;
    private _msdyn_distributewithcapacity?: boolean | undefined;
    private _msdyn_distributiontype?: number | undefined;
    private _msdyn_entityfilter?: string | undefined;
    private _msdyn_evaluationorder?: number | undefined;
    private _msdyn_matchedrecords?: number | undefined;
    private _msdyn_matchtype?: number | undefined;
    private _msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule?: Msdyn_salesroutingrun[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_objecttypecode?: number | undefined;
    private _msdyn_segmentid?: Msdyn_segment | undefined;
    private _msdyn_sellerfilter?: string | undefined;
    private _msdyn_SpecificSellersOrTeams?: string | undefined;
    private _msdyn_triggertype?: number | undefined;
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
     * Gets the _msdyn_segmentid_value property value. 
     * @returns a string
     */
    public get _msdyn_segmentid_value() {
        return this.__msdyn_segmentid_value;
    };
    /**
     * Sets the _msdyn_segmentid_value property value. 
     * @param value Value to set for the _msdyn_segmentid_value property.
     */
    public set _msdyn_segmentid_value(value: string | undefined) {
        this.__msdyn_segmentid_value = value;
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
     * Instantiates a new msdyn_assignmentrule and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_segmentid_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._msdyn_segmentid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_assignmentrule)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_assignmentrule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_assignmentrule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_assignmentrule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_assignmentrule).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_assignmentrule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_assignmentrule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_assignmentrule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_assignmentrule_AsyncOperations": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_assignmentrule_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_assignmentrule_connections1": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_assignmentrule_connections2": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_assignmentrule_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_assignmentrule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_assignmentrule_ProcessSession": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_assignmentrule_SyncErrors": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentrule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_assignmentruleid": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_assignmentruleid = n.getStringValue(); },
            "msdyn_attributefilter": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_attributefilter = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_description = n.getStringValue(); },
            "msdyn_distributeto": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_distributeto = n.getNumberValue(); },
            "msdyn_distributewithavailability": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_distributewithavailability = n.getBooleanValue(); },
            "msdyn_distributewithcapacity": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_distributewithcapacity = n.getBooleanValue(); },
            "msdyn_distributiontype": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_distributiontype = n.getNumberValue(); },
            "msdyn_entityfilter": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_entityfilter = n.getStringValue(); },
            "msdyn_evaluationorder": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_evaluationorder = n.getNumberValue(); },
            "msdyn_matchedrecords": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_matchedrecords = n.getNumberValue(); },
            "msdyn_matchtype": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_matchtype = n.getNumberValue(); },
            "msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule = n.getCollectionOfObjectValues<Msdyn_salesroutingrun>(createMsdyn_salesroutingrunFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_name = n.getStringValue(); },
            "msdyn_objecttypecode": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_objecttypecode = n.getNumberValue(); },
            "msdyn_segmentid": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_segmentid = n.getObjectValue<Msdyn_segment>(createMsdyn_segmentFromDiscriminatorValue); },
            "msdyn_sellerfilter": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_sellerfilter = n.getStringValue(); },
            "msdyn_SpecificSellersOrTeams": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_SpecificSellersOrTeams = n.getStringValue(); },
            "msdyn_triggertype": (o, n) => { (o as unknown as Msdyn_assignmentrule).msdyn_triggertype = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_assignmentrule).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_assignmentrule).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_assignmentrule).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_assignmentrule).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_assignmentrule).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_assignmentrule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_assignmentrule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_assignmentrule).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_assignmentrule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_assignmentrule).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_assignmentrule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_assignmentrule_AsyncOperations() {
        return this._msdyn_assignmentrule_AsyncOperations;
    };
    /**
     * Sets the msdyn_assignmentrule_AsyncOperations property value. 
     * @param value Value to set for the msdyn_assignmentrule_AsyncOperations property.
     */
    public set msdyn_assignmentrule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_assignmentrule_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_assignmentrule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_assignmentrule_BulkDeleteFailures() {
        return this._msdyn_assignmentrule_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_assignmentrule_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_assignmentrule_BulkDeleteFailures property.
     */
    public set msdyn_assignmentrule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_assignmentrule_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_assignmentrule_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_assignmentrule_connections1() {
        return this._msdyn_assignmentrule_connections1;
    };
    /**
     * Sets the msdyn_assignmentrule_connections1 property value. 
     * @param value Value to set for the msdyn_assignmentrule_connections1 property.
     */
    public set msdyn_assignmentrule_connections1(value: Connection[] | undefined) {
        this._msdyn_assignmentrule_connections1 = value;
    };
    /**
     * Gets the msdyn_assignmentrule_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_assignmentrule_connections2() {
        return this._msdyn_assignmentrule_connections2;
    };
    /**
     * Sets the msdyn_assignmentrule_connections2 property value. 
     * @param value Value to set for the msdyn_assignmentrule_connections2 property.
     */
    public set msdyn_assignmentrule_connections2(value: Connection[] | undefined) {
        this._msdyn_assignmentrule_connections2 = value;
    };
    /**
     * Gets the msdyn_assignmentrule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_assignmentrule_MailboxTrackingFolders() {
        return this._msdyn_assignmentrule_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_assignmentrule_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_assignmentrule_MailboxTrackingFolders property.
     */
    public set msdyn_assignmentrule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_assignmentrule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_assignmentrule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_assignmentrule_PrincipalObjectAttributeAccesses() {
        return this._msdyn_assignmentrule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_assignmentrule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_assignmentrule_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_assignmentrule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_assignmentrule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_assignmentrule_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_assignmentrule_ProcessSession() {
        return this._msdyn_assignmentrule_ProcessSession;
    };
    /**
     * Sets the msdyn_assignmentrule_ProcessSession property value. 
     * @param value Value to set for the msdyn_assignmentrule_ProcessSession property.
     */
    public set msdyn_assignmentrule_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_assignmentrule_ProcessSession = value;
    };
    /**
     * Gets the msdyn_assignmentrule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_assignmentrule_SyncErrors() {
        return this._msdyn_assignmentrule_SyncErrors;
    };
    /**
     * Sets the msdyn_assignmentrule_SyncErrors property value. 
     * @param value Value to set for the msdyn_assignmentrule_SyncErrors property.
     */
    public set msdyn_assignmentrule_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_assignmentrule_SyncErrors = value;
    };
    /**
     * Gets the msdyn_assignmentruleid property value. 
     * @returns a string
     */
    public get msdyn_assignmentruleid() {
        return this._msdyn_assignmentruleid;
    };
    /**
     * Sets the msdyn_assignmentruleid property value. 
     * @param value Value to set for the msdyn_assignmentruleid property.
     */
    public set msdyn_assignmentruleid(value: string | undefined) {
        this._msdyn_assignmentruleid = value;
    };
    /**
     * Gets the msdyn_attributefilter property value. 
     * @returns a string
     */
    public get msdyn_attributefilter() {
        return this._msdyn_attributefilter;
    };
    /**
     * Sets the msdyn_attributefilter property value. 
     * @param value Value to set for the msdyn_attributefilter property.
     */
    public set msdyn_attributefilter(value: string | undefined) {
        this._msdyn_attributefilter = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_distributeto property value. 
     * @returns a integer
     */
    public get msdyn_distributeto() {
        return this._msdyn_distributeto;
    };
    /**
     * Sets the msdyn_distributeto property value. 
     * @param value Value to set for the msdyn_distributeto property.
     */
    public set msdyn_distributeto(value: number | undefined) {
        this._msdyn_distributeto = value;
    };
    /**
     * Gets the msdyn_distributewithavailability property value. 
     * @returns a boolean
     */
    public get msdyn_distributewithavailability() {
        return this._msdyn_distributewithavailability;
    };
    /**
     * Sets the msdyn_distributewithavailability property value. 
     * @param value Value to set for the msdyn_distributewithavailability property.
     */
    public set msdyn_distributewithavailability(value: boolean | undefined) {
        this._msdyn_distributewithavailability = value;
    };
    /**
     * Gets the msdyn_distributewithcapacity property value. 
     * @returns a boolean
     */
    public get msdyn_distributewithcapacity() {
        return this._msdyn_distributewithcapacity;
    };
    /**
     * Sets the msdyn_distributewithcapacity property value. 
     * @param value Value to set for the msdyn_distributewithcapacity property.
     */
    public set msdyn_distributewithcapacity(value: boolean | undefined) {
        this._msdyn_distributewithcapacity = value;
    };
    /**
     * Gets the msdyn_distributiontype property value. 
     * @returns a integer
     */
    public get msdyn_distributiontype() {
        return this._msdyn_distributiontype;
    };
    /**
     * Sets the msdyn_distributiontype property value. 
     * @param value Value to set for the msdyn_distributiontype property.
     */
    public set msdyn_distributiontype(value: number | undefined) {
        this._msdyn_distributiontype = value;
    };
    /**
     * Gets the msdyn_entityfilter property value. 
     * @returns a string
     */
    public get msdyn_entityfilter() {
        return this._msdyn_entityfilter;
    };
    /**
     * Sets the msdyn_entityfilter property value. 
     * @param value Value to set for the msdyn_entityfilter property.
     */
    public set msdyn_entityfilter(value: string | undefined) {
        this._msdyn_entityfilter = value;
    };
    /**
     * Gets the msdyn_evaluationorder property value. 
     * @returns a integer
     */
    public get msdyn_evaluationorder() {
        return this._msdyn_evaluationorder;
    };
    /**
     * Sets the msdyn_evaluationorder property value. 
     * @param value Value to set for the msdyn_evaluationorder property.
     */
    public set msdyn_evaluationorder(value: number | undefined) {
        this._msdyn_evaluationorder = value;
    };
    /**
     * Gets the msdyn_matchedrecords property value. 
     * @returns a integer
     */
    public get msdyn_matchedrecords() {
        return this._msdyn_matchedrecords;
    };
    /**
     * Sets the msdyn_matchedrecords property value. 
     * @param value Value to set for the msdyn_matchedrecords property.
     */
    public set msdyn_matchedrecords(value: number | undefined) {
        this._msdyn_matchedrecords = value;
    };
    /**
     * Gets the msdyn_matchtype property value. 
     * @returns a integer
     */
    public get msdyn_matchtype() {
        return this._msdyn_matchtype;
    };
    /**
     * Sets the msdyn_matchtype property value. 
     * @param value Value to set for the msdyn_matchtype property.
     */
    public set msdyn_matchtype(value: number | undefined) {
        this._msdyn_matchtype = value;
    };
    /**
     * Gets the msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule property value. 
     * @returns a msdyn_salesroutingrun
     */
    public get msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule() {
        return this._msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule;
    };
    /**
     * Sets the msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule property value. 
     * @param value Value to set for the msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule property.
     */
    public set msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule(value: Msdyn_salesroutingrun[] | undefined) {
        this._msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule = value;
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
     * Gets the msdyn_objecttypecode property value. 
     * @returns a integer
     */
    public get msdyn_objecttypecode() {
        return this._msdyn_objecttypecode;
    };
    /**
     * Sets the msdyn_objecttypecode property value. 
     * @param value Value to set for the msdyn_objecttypecode property.
     */
    public set msdyn_objecttypecode(value: number | undefined) {
        this._msdyn_objecttypecode = value;
    };
    /**
     * Gets the msdyn_segmentid property value. 
     * @returns a msdyn_segment
     */
    public get msdyn_segmentid() {
        return this._msdyn_segmentid;
    };
    /**
     * Sets the msdyn_segmentid property value. 
     * @param value Value to set for the msdyn_segmentid property.
     */
    public set msdyn_segmentid(value: Msdyn_segment | undefined) {
        this._msdyn_segmentid = value;
    };
    /**
     * Gets the msdyn_sellerfilter property value. 
     * @returns a string
     */
    public get msdyn_sellerfilter() {
        return this._msdyn_sellerfilter;
    };
    /**
     * Sets the msdyn_sellerfilter property value. 
     * @param value Value to set for the msdyn_sellerfilter property.
     */
    public set msdyn_sellerfilter(value: string | undefined) {
        this._msdyn_sellerfilter = value;
    };
    /**
     * Gets the msdyn_SpecificSellersOrTeams property value. 
     * @returns a string
     */
    public get msdyn_SpecificSellersOrTeams() {
        return this._msdyn_SpecificSellersOrTeams;
    };
    /**
     * Sets the msdyn_SpecificSellersOrTeams property value. 
     * @param value Value to set for the msdyn_SpecificSellersOrTeams property.
     */
    public set msdyn_SpecificSellersOrTeams(value: string | undefined) {
        this._msdyn_SpecificSellersOrTeams = value;
    };
    /**
     * Gets the msdyn_triggertype property value. 
     * @returns a integer
     */
    public get msdyn_triggertype() {
        return this._msdyn_triggertype;
    };
    /**
     * Sets the msdyn_triggertype property value. 
     * @param value Value to set for the msdyn_triggertype property.
     */
    public set msdyn_triggertype(value: number | undefined) {
        this._msdyn_triggertype = value;
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
        writer.writeStringValue("_msdyn_segmentid_value", this._msdyn_segmentid_value);
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_assignmentrule_AsyncOperations", this.msdyn_assignmentrule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_assignmentrule_BulkDeleteFailures", this.msdyn_assignmentrule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_assignmentrule_connections1", this.msdyn_assignmentrule_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_assignmentrule_connections2", this.msdyn_assignmentrule_connections2);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_assignmentrule_MailboxTrackingFolders", this.msdyn_assignmentrule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_assignmentrule_PrincipalObjectAttributeAccesses", this.msdyn_assignmentrule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_assignmentrule_ProcessSession", this.msdyn_assignmentrule_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_assignmentrule_SyncErrors", this.msdyn_assignmentrule_SyncErrors);
        writer.writeStringValue("msdyn_assignmentruleid", this.msdyn_assignmentruleid);
        writer.writeStringValue("msdyn_attributefilter", this.msdyn_attributefilter);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_distributeto", this.msdyn_distributeto);
        writer.writeBooleanValue("msdyn_distributewithavailability", this.msdyn_distributewithavailability);
        writer.writeBooleanValue("msdyn_distributewithcapacity", this.msdyn_distributewithcapacity);
        writer.writeNumberValue("msdyn_distributiontype", this.msdyn_distributiontype);
        writer.writeStringValue("msdyn_entityfilter", this.msdyn_entityfilter);
        writer.writeNumberValue("msdyn_evaluationorder", this.msdyn_evaluationorder);
        writer.writeNumberValue("msdyn_matchedrecords", this.msdyn_matchedrecords);
        writer.writeNumberValue("msdyn_matchtype", this.msdyn_matchtype);
        writer.writeCollectionOfObjectValues<Msdyn_salesroutingrun>("msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule", this.msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_objecttypecode", this.msdyn_objecttypecode);
        writer.writeObjectValue<Msdyn_segment>("msdyn_segmentid", this.msdyn_segmentid);
        writer.writeStringValue("msdyn_sellerfilter", this.msdyn_sellerfilter);
        writer.writeStringValue("msdyn_SpecificSellersOrTeams", this.msdyn_SpecificSellersOrTeams);
        writer.writeNumberValue("msdyn_triggertype", this.msdyn_triggertype);
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
