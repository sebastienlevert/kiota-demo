import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_forecastdefinitionFromDiscriminatorValue} from './createMsdyn_forecastdefinitionFromDiscriminatorValue';
import {createMsdyn_forecastinstanceFromDiscriminatorValue} from './createMsdyn_forecastinstanceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_forecastdefinition, Msdyn_forecastinstance, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_forecastrecurrence extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_forecastdefinitionid_value?: string | undefined;
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
    private _msdyn_actualparticipatingrecordsfetchxml?: string | undefined;
    private _msdyn_failureinfo?: string | undefined;
    private _msdyn_ForecastDefinitionId?: Msdyn_forecastdefinition | undefined;
    private _msdyn_forecastrecurrence_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_forecastrecurrence_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_forecastrecurrence_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastrecurrence_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastrecurrence_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_forecastrecurrence_ProcessSession?: Processsession[] | undefined;
    private _msdyn_forecastrecurrence_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_forecastrecurrenceid?: string | undefined;
    private _msdyn_inprogressparticipatingrecordsfetchxml?: string | undefined;
    private _msdyn_ishierarchylocked?: boolean | undefined;
    private _msdyn_lastrecalculatedon?: Date | undefined;
    private _msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance?: Msdyn_forecastinstance[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_recalculatestatuschangedon?: Date | undefined;
    private _msdyn_recalculationstarttime?: Date | undefined;
    private _msdyn_recalculationstatus?: number | undefined;
    private _msdyn_recalculationstatusdescription?: string | undefined;
    private _msdyn_recurrenceindex?: number | undefined;
    private _msdyn_validfrom?: DateOnly | undefined;
    private _msdyn_validto?: DateOnly | undefined;
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
     * Gets the _msdyn_forecastdefinitionid_value property value. 
     * @returns a string
     */
    public get _msdyn_forecastdefinitionid_value() {
        return this.__msdyn_forecastdefinitionid_value;
    };
    /**
     * Sets the _msdyn_forecastdefinitionid_value property value. 
     * @param value Value to set for the _msdyn_forecastdefinitionid_value property.
     */
    public set _msdyn_forecastdefinitionid_value(value: string | undefined) {
        this.__msdyn_forecastdefinitionid_value = value;
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
     * Instantiates a new msdyn_forecastrecurrence and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_forecastdefinitionid_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._msdyn_forecastdefinitionid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_forecastrecurrence)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actualparticipatingrecordsfetchxml": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_actualparticipatingrecordsfetchxml = n.getStringValue(); },
            "msdyn_failureinfo": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_failureinfo = n.getStringValue(); },
            "msdyn_ForecastDefinitionId": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_ForecastDefinitionId = n.getObjectValue<Msdyn_forecastdefinition>(createMsdyn_forecastdefinitionFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_AsyncOperations": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_ProcessSession": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_forecastrecurrence_SyncErrors": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrence_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_forecastrecurrenceid": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_forecastrecurrenceid = n.getStringValue(); },
            "msdyn_inprogressparticipatingrecordsfetchxml": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_inprogressparticipatingrecordsfetchxml = n.getStringValue(); },
            "msdyn_ishierarchylocked": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_ishierarchylocked = n.getBooleanValue(); },
            "msdyn_lastrecalculatedon": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_lastrecalculatedon = n.getDateValue(); },
            "msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance = n.getCollectionOfObjectValues<Msdyn_forecastinstance>(createMsdyn_forecastinstanceFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_name = n.getStringValue(); },
            "msdyn_recalculatestatuschangedon": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_recalculatestatuschangedon = n.getDateValue(); },
            "msdyn_recalculationstarttime": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_recalculationstarttime = n.getDateValue(); },
            "msdyn_recalculationstatus": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_recalculationstatus = n.getNumberValue(); },
            "msdyn_recalculationstatusdescription": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_recalculationstatusdescription = n.getStringValue(); },
            "msdyn_recurrenceindex": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_recurrenceindex = n.getNumberValue(); },
            "msdyn_validfrom": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_validfrom = n.getDateOnlyValue(); },
            "msdyn_validto": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).msdyn_validto = n.getDateOnlyValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_forecastrecurrence).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actualparticipatingrecordsfetchxml property value. 
     * @returns a string
     */
    public get msdyn_actualparticipatingrecordsfetchxml() {
        return this._msdyn_actualparticipatingrecordsfetchxml;
    };
    /**
     * Sets the msdyn_actualparticipatingrecordsfetchxml property value. 
     * @param value Value to set for the msdyn_actualparticipatingrecordsfetchxml property.
     */
    public set msdyn_actualparticipatingrecordsfetchxml(value: string | undefined) {
        this._msdyn_actualparticipatingrecordsfetchxml = value;
    };
    /**
     * Gets the msdyn_failureinfo property value. 
     * @returns a string
     */
    public get msdyn_failureinfo() {
        return this._msdyn_failureinfo;
    };
    /**
     * Sets the msdyn_failureinfo property value. 
     * @param value Value to set for the msdyn_failureinfo property.
     */
    public set msdyn_failureinfo(value: string | undefined) {
        this._msdyn_failureinfo = value;
    };
    /**
     * Gets the msdyn_ForecastDefinitionId property value. 
     * @returns a msdyn_forecastdefinition
     */
    public get msdyn_ForecastDefinitionId() {
        return this._msdyn_ForecastDefinitionId;
    };
    /**
     * Sets the msdyn_ForecastDefinitionId property value. 
     * @param value Value to set for the msdyn_ForecastDefinitionId property.
     */
    public set msdyn_ForecastDefinitionId(value: Msdyn_forecastdefinition | undefined) {
        this._msdyn_ForecastDefinitionId = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_forecastrecurrence_AsyncOperations() {
        return this._msdyn_forecastrecurrence_AsyncOperations;
    };
    /**
     * Sets the msdyn_forecastrecurrence_AsyncOperations property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_AsyncOperations property.
     */
    public set msdyn_forecastrecurrence_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_forecastrecurrence_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_forecastrecurrence_BulkDeleteFailures() {
        return this._msdyn_forecastrecurrence_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_forecastrecurrence_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_BulkDeleteFailures property.
     */
    public set msdyn_forecastrecurrence_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_forecastrecurrence_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastrecurrence_DuplicateBaseRecord() {
        return this._msdyn_forecastrecurrence_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_forecastrecurrence_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_DuplicateBaseRecord property.
     */
    public set msdyn_forecastrecurrence_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastrecurrence_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastrecurrence_DuplicateMatchingRecord() {
        return this._msdyn_forecastrecurrence_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_forecastrecurrence_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_DuplicateMatchingRecord property.
     */
    public set msdyn_forecastrecurrence_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastrecurrence_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_forecastrecurrence_MailboxTrackingFolders() {
        return this._msdyn_forecastrecurrence_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_forecastrecurrence_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_MailboxTrackingFolders property.
     */
    public set msdyn_forecastrecurrence_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_forecastrecurrence_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses() {
        return this._msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_forecastrecurrence_ProcessSession() {
        return this._msdyn_forecastrecurrence_ProcessSession;
    };
    /**
     * Sets the msdyn_forecastrecurrence_ProcessSession property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_ProcessSession property.
     */
    public set msdyn_forecastrecurrence_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_forecastrecurrence_ProcessSession = value;
    };
    /**
     * Gets the msdyn_forecastrecurrence_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_forecastrecurrence_SyncErrors() {
        return this._msdyn_forecastrecurrence_SyncErrors;
    };
    /**
     * Sets the msdyn_forecastrecurrence_SyncErrors property value. 
     * @param value Value to set for the msdyn_forecastrecurrence_SyncErrors property.
     */
    public set msdyn_forecastrecurrence_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_forecastrecurrence_SyncErrors = value;
    };
    /**
     * Gets the msdyn_forecastrecurrenceid property value. 
     * @returns a string
     */
    public get msdyn_forecastrecurrenceid() {
        return this._msdyn_forecastrecurrenceid;
    };
    /**
     * Sets the msdyn_forecastrecurrenceid property value. 
     * @param value Value to set for the msdyn_forecastrecurrenceid property.
     */
    public set msdyn_forecastrecurrenceid(value: string | undefined) {
        this._msdyn_forecastrecurrenceid = value;
    };
    /**
     * Gets the msdyn_inprogressparticipatingrecordsfetchxml property value. 
     * @returns a string
     */
    public get msdyn_inprogressparticipatingrecordsfetchxml() {
        return this._msdyn_inprogressparticipatingrecordsfetchxml;
    };
    /**
     * Sets the msdyn_inprogressparticipatingrecordsfetchxml property value. 
     * @param value Value to set for the msdyn_inprogressparticipatingrecordsfetchxml property.
     */
    public set msdyn_inprogressparticipatingrecordsfetchxml(value: string | undefined) {
        this._msdyn_inprogressparticipatingrecordsfetchxml = value;
    };
    /**
     * Gets the msdyn_ishierarchylocked property value. 
     * @returns a boolean
     */
    public get msdyn_ishierarchylocked() {
        return this._msdyn_ishierarchylocked;
    };
    /**
     * Sets the msdyn_ishierarchylocked property value. 
     * @param value Value to set for the msdyn_ishierarchylocked property.
     */
    public set msdyn_ishierarchylocked(value: boolean | undefined) {
        this._msdyn_ishierarchylocked = value;
    };
    /**
     * Gets the msdyn_lastrecalculatedon property value. 
     * @returns a Date
     */
    public get msdyn_lastrecalculatedon() {
        return this._msdyn_lastrecalculatedon;
    };
    /**
     * Sets the msdyn_lastrecalculatedon property value. 
     * @param value Value to set for the msdyn_lastrecalculatedon property.
     */
    public set msdyn_lastrecalculatedon(value: Date | undefined) {
        this._msdyn_lastrecalculatedon = value;
    };
    /**
     * Gets the msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance property value. 
     * @returns a msdyn_forecastinstance
     */
    public get msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance() {
        return this._msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance;
    };
    /**
     * Sets the msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance property value. 
     * @param value Value to set for the msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance property.
     */
    public set msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance(value: Msdyn_forecastinstance[] | undefined) {
        this._msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance = value;
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
     * Gets the msdyn_recalculatestatuschangedon property value. 
     * @returns a Date
     */
    public get msdyn_recalculatestatuschangedon() {
        return this._msdyn_recalculatestatuschangedon;
    };
    /**
     * Sets the msdyn_recalculatestatuschangedon property value. 
     * @param value Value to set for the msdyn_recalculatestatuschangedon property.
     */
    public set msdyn_recalculatestatuschangedon(value: Date | undefined) {
        this._msdyn_recalculatestatuschangedon = value;
    };
    /**
     * Gets the msdyn_recalculationstarttime property value. 
     * @returns a Date
     */
    public get msdyn_recalculationstarttime() {
        return this._msdyn_recalculationstarttime;
    };
    /**
     * Sets the msdyn_recalculationstarttime property value. 
     * @param value Value to set for the msdyn_recalculationstarttime property.
     */
    public set msdyn_recalculationstarttime(value: Date | undefined) {
        this._msdyn_recalculationstarttime = value;
    };
    /**
     * Gets the msdyn_recalculationstatus property value. 
     * @returns a integer
     */
    public get msdyn_recalculationstatus() {
        return this._msdyn_recalculationstatus;
    };
    /**
     * Sets the msdyn_recalculationstatus property value. 
     * @param value Value to set for the msdyn_recalculationstatus property.
     */
    public set msdyn_recalculationstatus(value: number | undefined) {
        this._msdyn_recalculationstatus = value;
    };
    /**
     * Gets the msdyn_recalculationstatusdescription property value. 
     * @returns a string
     */
    public get msdyn_recalculationstatusdescription() {
        return this._msdyn_recalculationstatusdescription;
    };
    /**
     * Sets the msdyn_recalculationstatusdescription property value. 
     * @param value Value to set for the msdyn_recalculationstatusdescription property.
     */
    public set msdyn_recalculationstatusdescription(value: string | undefined) {
        this._msdyn_recalculationstatusdescription = value;
    };
    /**
     * Gets the msdyn_recurrenceindex property value. 
     * @returns a integer
     */
    public get msdyn_recurrenceindex() {
        return this._msdyn_recurrenceindex;
    };
    /**
     * Sets the msdyn_recurrenceindex property value. 
     * @param value Value to set for the msdyn_recurrenceindex property.
     */
    public set msdyn_recurrenceindex(value: number | undefined) {
        this._msdyn_recurrenceindex = value;
    };
    /**
     * Gets the msdyn_validfrom property value. 
     * @returns a DateOnly
     */
    public get msdyn_validfrom() {
        return this._msdyn_validfrom;
    };
    /**
     * Sets the msdyn_validfrom property value. 
     * @param value Value to set for the msdyn_validfrom property.
     */
    public set msdyn_validfrom(value: DateOnly | undefined) {
        this._msdyn_validfrom = value;
    };
    /**
     * Gets the msdyn_validto property value. 
     * @returns a DateOnly
     */
    public get msdyn_validto() {
        return this._msdyn_validto;
    };
    /**
     * Sets the msdyn_validto property value. 
     * @param value Value to set for the msdyn_validto property.
     */
    public set msdyn_validto(value: DateOnly | undefined) {
        this._msdyn_validto = value;
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
        writer.writeStringValue("_msdyn_forecastdefinitionid_value", this._msdyn_forecastdefinitionid_value);
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
        writer.writeStringValue("msdyn_actualparticipatingrecordsfetchxml", this.msdyn_actualparticipatingrecordsfetchxml);
        writer.writeStringValue("msdyn_failureinfo", this.msdyn_failureinfo);
        writer.writeObjectValue<Msdyn_forecastdefinition>("msdyn_ForecastDefinitionId", this.msdyn_ForecastDefinitionId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_forecastrecurrence_AsyncOperations", this.msdyn_forecastrecurrence_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_forecastrecurrence_BulkDeleteFailures", this.msdyn_forecastrecurrence_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastrecurrence_DuplicateBaseRecord", this.msdyn_forecastrecurrence_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastrecurrence_DuplicateMatchingRecord", this.msdyn_forecastrecurrence_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_forecastrecurrence_MailboxTrackingFolders", this.msdyn_forecastrecurrence_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses", this.msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_forecastrecurrence_ProcessSession", this.msdyn_forecastrecurrence_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_forecastrecurrence_SyncErrors", this.msdyn_forecastrecurrence_SyncErrors);
        writer.writeStringValue("msdyn_forecastrecurrenceid", this.msdyn_forecastrecurrenceid);
        writer.writeStringValue("msdyn_inprogressparticipatingrecordsfetchxml", this.msdyn_inprogressparticipatingrecordsfetchxml);
        writer.writeBooleanValue("msdyn_ishierarchylocked", this.msdyn_ishierarchylocked);
        writer.writeDateValue("msdyn_lastrecalculatedon", this.msdyn_lastrecalculatedon);
        writer.writeCollectionOfObjectValues<Msdyn_forecastinstance>("msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance", this.msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeDateValue("msdyn_recalculatestatuschangedon", this.msdyn_recalculatestatuschangedon);
        writer.writeDateValue("msdyn_recalculationstarttime", this.msdyn_recalculationstarttime);
        writer.writeNumberValue("msdyn_recalculationstatus", this.msdyn_recalculationstatus);
        writer.writeStringValue("msdyn_recalculationstatusdescription", this.msdyn_recalculationstatusdescription);
        writer.writeNumberValue("msdyn_recurrenceindex", this.msdyn_recurrenceindex);
        writer.writeDateOnlyValue("msdyn_validfrom", this.msdyn_validfrom);
        writer.writeDateOnlyValue("msdyn_validto", this.msdyn_validto);
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
