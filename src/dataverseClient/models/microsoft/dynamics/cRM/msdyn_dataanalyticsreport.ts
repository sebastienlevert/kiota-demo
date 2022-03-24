import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_datainsightsandanalyticsfeatureFromDiscriminatorValue} from './createMsdyn_datainsightsandanalyticsfeatureFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_datainsightsandanalyticsfeature, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_dataanalyticsreport extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_datainsightsandanalyticsfeatureid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_analyticschecksum?: number | undefined;
    private _msdyn_dataanalyticsreport_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_dataanalyticsreport_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_dataanalyticsreport_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_dataanalyticsreport_ProcessSession?: Processsession[] | undefined;
    private _msdyn_dataanalyticsreport_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_dataanalyticsreportid?: string | undefined;
    private _msdyn_datainsightsandanalyticsfeatureId?: Msdyn_datainsightsandanalyticsfeature | undefined;
    private _msdyn_displayorder?: number | undefined;
    private _msdyn_isenabled?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_provisionstatus?: boolean | undefined;
    private _msdyn_reportentityname?: string | undefined;
    private _msdyn_reportgroup?: string | undefined;
    private _msdyn_reportid?: string | undefined;
    private _msdyn_reportpage?: string | undefined;
    private _msdyn_reporttemplateid?: string | undefined;
    private _msdyn_workspaceid?: string | undefined;
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
     * Gets the _msdyn_datainsightsandanalyticsfeatureid_value property value. 
     * @returns a string
     */
    public get _msdyn_datainsightsandanalyticsfeatureid_value() {
        return this.__msdyn_datainsightsandanalyticsfeatureid_value;
    };
    /**
     * Sets the _msdyn_datainsightsandanalyticsfeatureid_value property value. 
     * @param value Value to set for the _msdyn_datainsightsandanalyticsfeatureid_value property.
     */
    public set _msdyn_datainsightsandanalyticsfeatureid_value(value: string | undefined) {
        this.__msdyn_datainsightsandanalyticsfeatureid_value = value;
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
     * Instantiates a new msdyn_dataanalyticsreport and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_datainsightsandanalyticsfeatureid_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._msdyn_datainsightsandanalyticsfeatureid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_analyticschecksum": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_analyticschecksum = n.getNumberValue(); },
            "msdyn_dataanalyticsreport_AsyncOperations": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_dataanalyticsreport_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_dataanalyticsreport_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_dataanalyticsreport_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_dataanalyticsreport_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_dataanalyticsreport_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_dataanalyticsreport_ProcessSession": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_dataanalyticsreport_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_dataanalyticsreport_SyncErrors": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_dataanalyticsreport_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_dataanalyticsreportid": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_dataanalyticsreportid = n.getStringValue(); },
            "msdyn_datainsightsandanalyticsfeatureId": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_datainsightsandanalyticsfeatureId = n.getObjectValue<Msdyn_datainsightsandanalyticsfeature>(createMsdyn_datainsightsandanalyticsfeatureFromDiscriminatorValue); },
            "msdyn_displayorder": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_displayorder = n.getNumberValue(); },
            "msdyn_isenabled": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_isenabled = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_name = n.getStringValue(); },
            "msdyn_provisionstatus": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_provisionstatus = n.getBooleanValue(); },
            "msdyn_reportentityname": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_reportentityname = n.getStringValue(); },
            "msdyn_reportgroup": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_reportgroup = n.getStringValue(); },
            "msdyn_reportid": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_reportid = n.getStringValue(); },
            "msdyn_reportpage": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_reportpage = n.getStringValue(); },
            "msdyn_reporttemplateid": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_reporttemplateid = n.getStringValue(); },
            "msdyn_workspaceid": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).msdyn_workspaceid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_dataanalyticsreport).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_analyticschecksum property value. 
     * @returns a integer
     */
    public get msdyn_analyticschecksum() {
        return this._msdyn_analyticschecksum;
    };
    /**
     * Sets the msdyn_analyticschecksum property value. 
     * @param value Value to set for the msdyn_analyticschecksum property.
     */
    public set msdyn_analyticschecksum(value: number | undefined) {
        this._msdyn_analyticschecksum = value;
    };
    /**
     * Gets the msdyn_dataanalyticsreport_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_dataanalyticsreport_AsyncOperations() {
        return this._msdyn_dataanalyticsreport_AsyncOperations;
    };
    /**
     * Sets the msdyn_dataanalyticsreport_AsyncOperations property value. 
     * @param value Value to set for the msdyn_dataanalyticsreport_AsyncOperations property.
     */
    public set msdyn_dataanalyticsreport_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_dataanalyticsreport_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_dataanalyticsreport_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_dataanalyticsreport_BulkDeleteFailures() {
        return this._msdyn_dataanalyticsreport_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_dataanalyticsreport_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_dataanalyticsreport_BulkDeleteFailures property.
     */
    public set msdyn_dataanalyticsreport_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_dataanalyticsreport_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_dataanalyticsreport_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_dataanalyticsreport_MailboxTrackingFolders() {
        return this._msdyn_dataanalyticsreport_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_dataanalyticsreport_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_dataanalyticsreport_MailboxTrackingFolders property.
     */
    public set msdyn_dataanalyticsreport_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_dataanalyticsreport_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses() {
        return this._msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_dataanalyticsreport_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_dataanalyticsreport_ProcessSession() {
        return this._msdyn_dataanalyticsreport_ProcessSession;
    };
    /**
     * Sets the msdyn_dataanalyticsreport_ProcessSession property value. 
     * @param value Value to set for the msdyn_dataanalyticsreport_ProcessSession property.
     */
    public set msdyn_dataanalyticsreport_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_dataanalyticsreport_ProcessSession = value;
    };
    /**
     * Gets the msdyn_dataanalyticsreport_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_dataanalyticsreport_SyncErrors() {
        return this._msdyn_dataanalyticsreport_SyncErrors;
    };
    /**
     * Sets the msdyn_dataanalyticsreport_SyncErrors property value. 
     * @param value Value to set for the msdyn_dataanalyticsreport_SyncErrors property.
     */
    public set msdyn_dataanalyticsreport_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_dataanalyticsreport_SyncErrors = value;
    };
    /**
     * Gets the msdyn_dataanalyticsreportid property value. 
     * @returns a string
     */
    public get msdyn_dataanalyticsreportid() {
        return this._msdyn_dataanalyticsreportid;
    };
    /**
     * Sets the msdyn_dataanalyticsreportid property value. 
     * @param value Value to set for the msdyn_dataanalyticsreportid property.
     */
    public set msdyn_dataanalyticsreportid(value: string | undefined) {
        this._msdyn_dataanalyticsreportid = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeatureId property value. 
     * @returns a msdyn_datainsightsandanalyticsfeature
     */
    public get msdyn_datainsightsandanalyticsfeatureId() {
        return this._msdyn_datainsightsandanalyticsfeatureId;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeatureId property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeatureId property.
     */
    public set msdyn_datainsightsandanalyticsfeatureId(value: Msdyn_datainsightsandanalyticsfeature | undefined) {
        this._msdyn_datainsightsandanalyticsfeatureId = value;
    };
    /**
     * Gets the msdyn_displayorder property value. 
     * @returns a integer
     */
    public get msdyn_displayorder() {
        return this._msdyn_displayorder;
    };
    /**
     * Sets the msdyn_displayorder property value. 
     * @param value Value to set for the msdyn_displayorder property.
     */
    public set msdyn_displayorder(value: number | undefined) {
        this._msdyn_displayorder = value;
    };
    /**
     * Gets the msdyn_isenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isenabled() {
        return this._msdyn_isenabled;
    };
    /**
     * Sets the msdyn_isenabled property value. 
     * @param value Value to set for the msdyn_isenabled property.
     */
    public set msdyn_isenabled(value: boolean | undefined) {
        this._msdyn_isenabled = value;
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
     * Gets the msdyn_provisionstatus property value. 
     * @returns a boolean
     */
    public get msdyn_provisionstatus() {
        return this._msdyn_provisionstatus;
    };
    /**
     * Sets the msdyn_provisionstatus property value. 
     * @param value Value to set for the msdyn_provisionstatus property.
     */
    public set msdyn_provisionstatus(value: boolean | undefined) {
        this._msdyn_provisionstatus = value;
    };
    /**
     * Gets the msdyn_reportentityname property value. 
     * @returns a string
     */
    public get msdyn_reportentityname() {
        return this._msdyn_reportentityname;
    };
    /**
     * Sets the msdyn_reportentityname property value. 
     * @param value Value to set for the msdyn_reportentityname property.
     */
    public set msdyn_reportentityname(value: string | undefined) {
        this._msdyn_reportentityname = value;
    };
    /**
     * Gets the msdyn_reportgroup property value. 
     * @returns a string
     */
    public get msdyn_reportgroup() {
        return this._msdyn_reportgroup;
    };
    /**
     * Sets the msdyn_reportgroup property value. 
     * @param value Value to set for the msdyn_reportgroup property.
     */
    public set msdyn_reportgroup(value: string | undefined) {
        this._msdyn_reportgroup = value;
    };
    /**
     * Gets the msdyn_reportid property value. 
     * @returns a string
     */
    public get msdyn_reportid() {
        return this._msdyn_reportid;
    };
    /**
     * Sets the msdyn_reportid property value. 
     * @param value Value to set for the msdyn_reportid property.
     */
    public set msdyn_reportid(value: string | undefined) {
        this._msdyn_reportid = value;
    };
    /**
     * Gets the msdyn_reportpage property value. 
     * @returns a string
     */
    public get msdyn_reportpage() {
        return this._msdyn_reportpage;
    };
    /**
     * Sets the msdyn_reportpage property value. 
     * @param value Value to set for the msdyn_reportpage property.
     */
    public set msdyn_reportpage(value: string | undefined) {
        this._msdyn_reportpage = value;
    };
    /**
     * Gets the msdyn_reporttemplateid property value. 
     * @returns a string
     */
    public get msdyn_reporttemplateid() {
        return this._msdyn_reporttemplateid;
    };
    /**
     * Sets the msdyn_reporttemplateid property value. 
     * @param value Value to set for the msdyn_reporttemplateid property.
     */
    public set msdyn_reporttemplateid(value: string | undefined) {
        this._msdyn_reporttemplateid = value;
    };
    /**
     * Gets the msdyn_workspaceid property value. 
     * @returns a string
     */
    public get msdyn_workspaceid() {
        return this._msdyn_workspaceid;
    };
    /**
     * Sets the msdyn_workspaceid property value. 
     * @param value Value to set for the msdyn_workspaceid property.
     */
    public set msdyn_workspaceid(value: string | undefined) {
        this._msdyn_workspaceid = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_datainsightsandanalyticsfeatureid_value", this._msdyn_datainsightsandanalyticsfeatureid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_analyticschecksum", this.msdyn_analyticschecksum);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_dataanalyticsreport_AsyncOperations", this.msdyn_dataanalyticsreport_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_dataanalyticsreport_BulkDeleteFailures", this.msdyn_dataanalyticsreport_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_dataanalyticsreport_MailboxTrackingFolders", this.msdyn_dataanalyticsreport_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses", this.msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_dataanalyticsreport_ProcessSession", this.msdyn_dataanalyticsreport_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_dataanalyticsreport_SyncErrors", this.msdyn_dataanalyticsreport_SyncErrors);
        writer.writeStringValue("msdyn_dataanalyticsreportid", this.msdyn_dataanalyticsreportid);
        writer.writeObjectValue<Msdyn_datainsightsandanalyticsfeature>("msdyn_datainsightsandanalyticsfeatureId", this.msdyn_datainsightsandanalyticsfeatureId);
        writer.writeNumberValue("msdyn_displayorder", this.msdyn_displayorder);
        writer.writeBooleanValue("msdyn_isenabled", this.msdyn_isenabled);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_provisionstatus", this.msdyn_provisionstatus);
        writer.writeStringValue("msdyn_reportentityname", this.msdyn_reportentityname);
        writer.writeStringValue("msdyn_reportgroup", this.msdyn_reportgroup);
        writer.writeStringValue("msdyn_reportid", this.msdyn_reportid);
        writer.writeStringValue("msdyn_reportpage", this.msdyn_reportpage);
        writer.writeStringValue("msdyn_reporttemplateid", this.msdyn_reporttemplateid);
        writer.writeStringValue("msdyn_workspaceid", this.msdyn_workspaceid);
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
