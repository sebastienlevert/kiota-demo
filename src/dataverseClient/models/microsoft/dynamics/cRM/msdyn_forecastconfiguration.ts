import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_forecastconfiguration extends Crmbaseentity implements Parsable {
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
    private _msdyn_addedweekindex?: number | undefined;
    private _msdyn_additionalfilter?: string | undefined;
    private _msdyn_advancedsettings?: string | undefined;
    private _msdyn_calendartemplate?: number | undefined;
    private _msdyn_columns?: string | undefined;
    private _msdyn_enddate?: Date | undefined;
    private _msdyn_errormessage?: string | undefined;
    private _msdyn_fiscalyearstartdate?: Date | undefined;
    private _msdyn_forecastcategoryattribute?: string | undefined;
    private _msdyn_forecastconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_forecastconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_forecastconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_forecastconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_forecastconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_forecastconfigurationid?: string | undefined;
    private _msdyn_forecasttimezone?: string | undefined;
    private _msdyn_hierarchyentity?: string | undefined;
    private _msdyn_hierarchyfilter?: string | undefined;
    private _msdyn_hierarchyrelationship?: string | undefined;
    private _msdyn_isdefault?: boolean | undefined;
    private _msdyn_issnapshotscheduled?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_numberofrecurrences?: number | undefined;
    private _msdyn_periodtype?: number | undefined;
    private _msdyn_permissionsdata?: string | undefined;
    private _msdyn_pivots?: string | undefined;
    private _msdyn_previewflags?: string | undefined;
    private _msdyn_publisheddatetime?: Date | undefined;
    private _msdyn_rollupdefaultviewid?: string | undefined;
    private _msdyn_rollupentity?: string | undefined;
    private _msdyn_rootentityrecordid?: string | undefined;
    private _msdyn_snapshotschedule?: string | undefined;
    private _msdyn_startdate?: Date | undefined;
    private _msdyn_startingfiscalmonth?: number | undefined;
    private _msdyn_startingfiscalquarter?: number | undefined;
    private _msdyn_startingfiscalyear?: number | undefined;
    private _msdyn_templatetype?: string | undefined;
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
     * Instantiates a new msdyn_forecastconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_forecastconfiguration)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_addedweekindex": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_addedweekindex = n.getNumberValue(); },
            "msdyn_additionalfilter": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_additionalfilter = n.getStringValue(); },
            "msdyn_advancedsettings": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_advancedsettings = n.getStringValue(); },
            "msdyn_calendartemplate": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_calendartemplate = n.getNumberValue(); },
            "msdyn_columns": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_columns = n.getStringValue(); },
            "msdyn_enddate": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_enddate = n.getDateValue(); },
            "msdyn_errormessage": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_errormessage = n.getStringValue(); },
            "msdyn_fiscalyearstartdate": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_fiscalyearstartdate = n.getDateValue(); },
            "msdyn_forecastcategoryattribute": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastcategoryattribute = n.getStringValue(); },
            "msdyn_forecastconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_forecastconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_forecastconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_forecastconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_forecastconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_forecastconfigurationid": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecastconfigurationid = n.getStringValue(); },
            "msdyn_forecasttimezone": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_forecasttimezone = n.getStringValue(); },
            "msdyn_hierarchyentity": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_hierarchyentity = n.getStringValue(); },
            "msdyn_hierarchyfilter": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_hierarchyfilter = n.getStringValue(); },
            "msdyn_hierarchyrelationship": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_hierarchyrelationship = n.getStringValue(); },
            "msdyn_isdefault": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_isdefault = n.getBooleanValue(); },
            "msdyn_issnapshotscheduled": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_issnapshotscheduled = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_numberofrecurrences": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_numberofrecurrences = n.getNumberValue(); },
            "msdyn_periodtype": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_periodtype = n.getNumberValue(); },
            "msdyn_permissionsdata": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_permissionsdata = n.getStringValue(); },
            "msdyn_pivots": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_pivots = n.getStringValue(); },
            "msdyn_previewflags": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_previewflags = n.getStringValue(); },
            "msdyn_publisheddatetime": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_publisheddatetime = n.getDateValue(); },
            "msdyn_rollupdefaultviewid": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_rollupdefaultviewid = n.getStringValue(); },
            "msdyn_rollupentity": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_rollupentity = n.getStringValue(); },
            "msdyn_rootentityrecordid": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_rootentityrecordid = n.getStringValue(); },
            "msdyn_snapshotschedule": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_snapshotschedule = n.getStringValue(); },
            "msdyn_startdate": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_startdate = n.getDateValue(); },
            "msdyn_startingfiscalmonth": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_startingfiscalmonth = n.getNumberValue(); },
            "msdyn_startingfiscalquarter": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_startingfiscalquarter = n.getNumberValue(); },
            "msdyn_startingfiscalyear": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_startingfiscalyear = n.getNumberValue(); },
            "msdyn_templatetype": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).msdyn_templatetype = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_forecastconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_addedweekindex property value. 
     * @returns a integer
     */
    public get msdyn_addedweekindex() {
        return this._msdyn_addedweekindex;
    };
    /**
     * Sets the msdyn_addedweekindex property value. 
     * @param value Value to set for the msdyn_addedweekindex property.
     */
    public set msdyn_addedweekindex(value: number | undefined) {
        this._msdyn_addedweekindex = value;
    };
    /**
     * Gets the msdyn_additionalfilter property value. 
     * @returns a string
     */
    public get msdyn_additionalfilter() {
        return this._msdyn_additionalfilter;
    };
    /**
     * Sets the msdyn_additionalfilter property value. 
     * @param value Value to set for the msdyn_additionalfilter property.
     */
    public set msdyn_additionalfilter(value: string | undefined) {
        this._msdyn_additionalfilter = value;
    };
    /**
     * Gets the msdyn_advancedsettings property value. 
     * @returns a string
     */
    public get msdyn_advancedsettings() {
        return this._msdyn_advancedsettings;
    };
    /**
     * Sets the msdyn_advancedsettings property value. 
     * @param value Value to set for the msdyn_advancedsettings property.
     */
    public set msdyn_advancedsettings(value: string | undefined) {
        this._msdyn_advancedsettings = value;
    };
    /**
     * Gets the msdyn_calendartemplate property value. 
     * @returns a integer
     */
    public get msdyn_calendartemplate() {
        return this._msdyn_calendartemplate;
    };
    /**
     * Sets the msdyn_calendartemplate property value. 
     * @param value Value to set for the msdyn_calendartemplate property.
     */
    public set msdyn_calendartemplate(value: number | undefined) {
        this._msdyn_calendartemplate = value;
    };
    /**
     * Gets the msdyn_columns property value. 
     * @returns a string
     */
    public get msdyn_columns() {
        return this._msdyn_columns;
    };
    /**
     * Sets the msdyn_columns property value. 
     * @param value Value to set for the msdyn_columns property.
     */
    public set msdyn_columns(value: string | undefined) {
        this._msdyn_columns = value;
    };
    /**
     * Gets the msdyn_enddate property value. 
     * @returns a Date
     */
    public get msdyn_enddate() {
        return this._msdyn_enddate;
    };
    /**
     * Sets the msdyn_enddate property value. 
     * @param value Value to set for the msdyn_enddate property.
     */
    public set msdyn_enddate(value: Date | undefined) {
        this._msdyn_enddate = value;
    };
    /**
     * Gets the msdyn_errormessage property value. 
     * @returns a string
     */
    public get msdyn_errormessage() {
        return this._msdyn_errormessage;
    };
    /**
     * Sets the msdyn_errormessage property value. 
     * @param value Value to set for the msdyn_errormessage property.
     */
    public set msdyn_errormessage(value: string | undefined) {
        this._msdyn_errormessage = value;
    };
    /**
     * Gets the msdyn_fiscalyearstartdate property value. 
     * @returns a Date
     */
    public get msdyn_fiscalyearstartdate() {
        return this._msdyn_fiscalyearstartdate;
    };
    /**
     * Sets the msdyn_fiscalyearstartdate property value. 
     * @param value Value to set for the msdyn_fiscalyearstartdate property.
     */
    public set msdyn_fiscalyearstartdate(value: Date | undefined) {
        this._msdyn_fiscalyearstartdate = value;
    };
    /**
     * Gets the msdyn_forecastcategoryattribute property value. 
     * @returns a string
     */
    public get msdyn_forecastcategoryattribute() {
        return this._msdyn_forecastcategoryattribute;
    };
    /**
     * Sets the msdyn_forecastcategoryattribute property value. 
     * @param value Value to set for the msdyn_forecastcategoryattribute property.
     */
    public set msdyn_forecastcategoryattribute(value: string | undefined) {
        this._msdyn_forecastcategoryattribute = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_forecastconfiguration_AsyncOperations() {
        return this._msdyn_forecastconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_forecastconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_AsyncOperations property.
     */
    public set msdyn_forecastconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_forecastconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_forecastconfiguration_BulkDeleteFailures() {
        return this._msdyn_forecastconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_forecastconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_forecastconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_forecastconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastconfiguration_DuplicateBaseRecord() {
        return this._msdyn_forecastconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_forecastconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_forecastconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_forecastconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_forecastconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_forecastconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_forecastconfiguration_MailboxTrackingFolders() {
        return this._msdyn_forecastconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_forecastconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_forecastconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_forecastconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_forecastconfiguration_ProcessSession() {
        return this._msdyn_forecastconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_forecastconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_ProcessSession property.
     */
    public set msdyn_forecastconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_forecastconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_forecastconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_forecastconfiguration_SyncErrors() {
        return this._msdyn_forecastconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_forecastconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_forecastconfiguration_SyncErrors property.
     */
    public set msdyn_forecastconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_forecastconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_forecastconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_forecastconfigurationid() {
        return this._msdyn_forecastconfigurationid;
    };
    /**
     * Sets the msdyn_forecastconfigurationid property value. 
     * @param value Value to set for the msdyn_forecastconfigurationid property.
     */
    public set msdyn_forecastconfigurationid(value: string | undefined) {
        this._msdyn_forecastconfigurationid = value;
    };
    /**
     * Gets the msdyn_forecasttimezone property value. 
     * @returns a string
     */
    public get msdyn_forecasttimezone() {
        return this._msdyn_forecasttimezone;
    };
    /**
     * Sets the msdyn_forecasttimezone property value. 
     * @param value Value to set for the msdyn_forecasttimezone property.
     */
    public set msdyn_forecasttimezone(value: string | undefined) {
        this._msdyn_forecasttimezone = value;
    };
    /**
     * Gets the msdyn_hierarchyentity property value. 
     * @returns a string
     */
    public get msdyn_hierarchyentity() {
        return this._msdyn_hierarchyentity;
    };
    /**
     * Sets the msdyn_hierarchyentity property value. 
     * @param value Value to set for the msdyn_hierarchyentity property.
     */
    public set msdyn_hierarchyentity(value: string | undefined) {
        this._msdyn_hierarchyentity = value;
    };
    /**
     * Gets the msdyn_hierarchyfilter property value. 
     * @returns a string
     */
    public get msdyn_hierarchyfilter() {
        return this._msdyn_hierarchyfilter;
    };
    /**
     * Sets the msdyn_hierarchyfilter property value. 
     * @param value Value to set for the msdyn_hierarchyfilter property.
     */
    public set msdyn_hierarchyfilter(value: string | undefined) {
        this._msdyn_hierarchyfilter = value;
    };
    /**
     * Gets the msdyn_hierarchyrelationship property value. 
     * @returns a string
     */
    public get msdyn_hierarchyrelationship() {
        return this._msdyn_hierarchyrelationship;
    };
    /**
     * Sets the msdyn_hierarchyrelationship property value. 
     * @param value Value to set for the msdyn_hierarchyrelationship property.
     */
    public set msdyn_hierarchyrelationship(value: string | undefined) {
        this._msdyn_hierarchyrelationship = value;
    };
    /**
     * Gets the msdyn_isdefault property value. 
     * @returns a boolean
     */
    public get msdyn_isdefault() {
        return this._msdyn_isdefault;
    };
    /**
     * Sets the msdyn_isdefault property value. 
     * @param value Value to set for the msdyn_isdefault property.
     */
    public set msdyn_isdefault(value: boolean | undefined) {
        this._msdyn_isdefault = value;
    };
    /**
     * Gets the msdyn_issnapshotscheduled property value. 
     * @returns a boolean
     */
    public get msdyn_issnapshotscheduled() {
        return this._msdyn_issnapshotscheduled;
    };
    /**
     * Sets the msdyn_issnapshotscheduled property value. 
     * @param value Value to set for the msdyn_issnapshotscheduled property.
     */
    public set msdyn_issnapshotscheduled(value: boolean | undefined) {
        this._msdyn_issnapshotscheduled = value;
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
     * Gets the msdyn_numberofrecurrences property value. 
     * @returns a integer
     */
    public get msdyn_numberofrecurrences() {
        return this._msdyn_numberofrecurrences;
    };
    /**
     * Sets the msdyn_numberofrecurrences property value. 
     * @param value Value to set for the msdyn_numberofrecurrences property.
     */
    public set msdyn_numberofrecurrences(value: number | undefined) {
        this._msdyn_numberofrecurrences = value;
    };
    /**
     * Gets the msdyn_periodtype property value. 
     * @returns a integer
     */
    public get msdyn_periodtype() {
        return this._msdyn_periodtype;
    };
    /**
     * Sets the msdyn_periodtype property value. 
     * @param value Value to set for the msdyn_periodtype property.
     */
    public set msdyn_periodtype(value: number | undefined) {
        this._msdyn_periodtype = value;
    };
    /**
     * Gets the msdyn_permissionsdata property value. 
     * @returns a string
     */
    public get msdyn_permissionsdata() {
        return this._msdyn_permissionsdata;
    };
    /**
     * Sets the msdyn_permissionsdata property value. 
     * @param value Value to set for the msdyn_permissionsdata property.
     */
    public set msdyn_permissionsdata(value: string | undefined) {
        this._msdyn_permissionsdata = value;
    };
    /**
     * Gets the msdyn_pivots property value. 
     * @returns a string
     */
    public get msdyn_pivots() {
        return this._msdyn_pivots;
    };
    /**
     * Sets the msdyn_pivots property value. 
     * @param value Value to set for the msdyn_pivots property.
     */
    public set msdyn_pivots(value: string | undefined) {
        this._msdyn_pivots = value;
    };
    /**
     * Gets the msdyn_previewflags property value. 
     * @returns a string
     */
    public get msdyn_previewflags() {
        return this._msdyn_previewflags;
    };
    /**
     * Sets the msdyn_previewflags property value. 
     * @param value Value to set for the msdyn_previewflags property.
     */
    public set msdyn_previewflags(value: string | undefined) {
        this._msdyn_previewflags = value;
    };
    /**
     * Gets the msdyn_publisheddatetime property value. 
     * @returns a Date
     */
    public get msdyn_publisheddatetime() {
        return this._msdyn_publisheddatetime;
    };
    /**
     * Sets the msdyn_publisheddatetime property value. 
     * @param value Value to set for the msdyn_publisheddatetime property.
     */
    public set msdyn_publisheddatetime(value: Date | undefined) {
        this._msdyn_publisheddatetime = value;
    };
    /**
     * Gets the msdyn_rollupdefaultviewid property value. 
     * @returns a string
     */
    public get msdyn_rollupdefaultviewid() {
        return this._msdyn_rollupdefaultviewid;
    };
    /**
     * Sets the msdyn_rollupdefaultviewid property value. 
     * @param value Value to set for the msdyn_rollupdefaultviewid property.
     */
    public set msdyn_rollupdefaultviewid(value: string | undefined) {
        this._msdyn_rollupdefaultviewid = value;
    };
    /**
     * Gets the msdyn_rollupentity property value. 
     * @returns a string
     */
    public get msdyn_rollupentity() {
        return this._msdyn_rollupentity;
    };
    /**
     * Sets the msdyn_rollupentity property value. 
     * @param value Value to set for the msdyn_rollupentity property.
     */
    public set msdyn_rollupentity(value: string | undefined) {
        this._msdyn_rollupentity = value;
    };
    /**
     * Gets the msdyn_rootentityrecordid property value. 
     * @returns a string
     */
    public get msdyn_rootentityrecordid() {
        return this._msdyn_rootentityrecordid;
    };
    /**
     * Sets the msdyn_rootentityrecordid property value. 
     * @param value Value to set for the msdyn_rootentityrecordid property.
     */
    public set msdyn_rootentityrecordid(value: string | undefined) {
        this._msdyn_rootentityrecordid = value;
    };
    /**
     * Gets the msdyn_snapshotschedule property value. 
     * @returns a string
     */
    public get msdyn_snapshotschedule() {
        return this._msdyn_snapshotschedule;
    };
    /**
     * Sets the msdyn_snapshotschedule property value. 
     * @param value Value to set for the msdyn_snapshotschedule property.
     */
    public set msdyn_snapshotschedule(value: string | undefined) {
        this._msdyn_snapshotschedule = value;
    };
    /**
     * Gets the msdyn_startdate property value. 
     * @returns a Date
     */
    public get msdyn_startdate() {
        return this._msdyn_startdate;
    };
    /**
     * Sets the msdyn_startdate property value. 
     * @param value Value to set for the msdyn_startdate property.
     */
    public set msdyn_startdate(value: Date | undefined) {
        this._msdyn_startdate = value;
    };
    /**
     * Gets the msdyn_startingfiscalmonth property value. 
     * @returns a integer
     */
    public get msdyn_startingfiscalmonth() {
        return this._msdyn_startingfiscalmonth;
    };
    /**
     * Sets the msdyn_startingfiscalmonth property value. 
     * @param value Value to set for the msdyn_startingfiscalmonth property.
     */
    public set msdyn_startingfiscalmonth(value: number | undefined) {
        this._msdyn_startingfiscalmonth = value;
    };
    /**
     * Gets the msdyn_startingfiscalquarter property value. 
     * @returns a integer
     */
    public get msdyn_startingfiscalquarter() {
        return this._msdyn_startingfiscalquarter;
    };
    /**
     * Sets the msdyn_startingfiscalquarter property value. 
     * @param value Value to set for the msdyn_startingfiscalquarter property.
     */
    public set msdyn_startingfiscalquarter(value: number | undefined) {
        this._msdyn_startingfiscalquarter = value;
    };
    /**
     * Gets the msdyn_startingfiscalyear property value. 
     * @returns a integer
     */
    public get msdyn_startingfiscalyear() {
        return this._msdyn_startingfiscalyear;
    };
    /**
     * Sets the msdyn_startingfiscalyear property value. 
     * @param value Value to set for the msdyn_startingfiscalyear property.
     */
    public set msdyn_startingfiscalyear(value: number | undefined) {
        this._msdyn_startingfiscalyear = value;
    };
    /**
     * Gets the msdyn_templatetype property value. 
     * @returns a string
     */
    public get msdyn_templatetype() {
        return this._msdyn_templatetype;
    };
    /**
     * Sets the msdyn_templatetype property value. 
     * @param value Value to set for the msdyn_templatetype property.
     */
    public set msdyn_templatetype(value: string | undefined) {
        this._msdyn_templatetype = value;
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
        writer.writeNumberValue("msdyn_addedweekindex", this.msdyn_addedweekindex);
        writer.writeStringValue("msdyn_additionalfilter", this.msdyn_additionalfilter);
        writer.writeStringValue("msdyn_advancedsettings", this.msdyn_advancedsettings);
        writer.writeNumberValue("msdyn_calendartemplate", this.msdyn_calendartemplate);
        writer.writeStringValue("msdyn_columns", this.msdyn_columns);
        writer.writeDateValue("msdyn_enddate", this.msdyn_enddate);
        writer.writeStringValue("msdyn_errormessage", this.msdyn_errormessage);
        writer.writeDateValue("msdyn_fiscalyearstartdate", this.msdyn_fiscalyearstartdate);
        writer.writeStringValue("msdyn_forecastcategoryattribute", this.msdyn_forecastcategoryattribute);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_forecastconfiguration_AsyncOperations", this.msdyn_forecastconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_forecastconfiguration_BulkDeleteFailures", this.msdyn_forecastconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastconfiguration_DuplicateBaseRecord", this.msdyn_forecastconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastconfiguration_DuplicateMatchingRecord", this.msdyn_forecastconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_forecastconfiguration_MailboxTrackingFolders", this.msdyn_forecastconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_forecastconfiguration_ProcessSession", this.msdyn_forecastconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_forecastconfiguration_SyncErrors", this.msdyn_forecastconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_forecastconfigurationid", this.msdyn_forecastconfigurationid);
        writer.writeStringValue("msdyn_forecasttimezone", this.msdyn_forecasttimezone);
        writer.writeStringValue("msdyn_hierarchyentity", this.msdyn_hierarchyentity);
        writer.writeStringValue("msdyn_hierarchyfilter", this.msdyn_hierarchyfilter);
        writer.writeStringValue("msdyn_hierarchyrelationship", this.msdyn_hierarchyrelationship);
        writer.writeBooleanValue("msdyn_isdefault", this.msdyn_isdefault);
        writer.writeBooleanValue("msdyn_issnapshotscheduled", this.msdyn_issnapshotscheduled);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_numberofrecurrences", this.msdyn_numberofrecurrences);
        writer.writeNumberValue("msdyn_periodtype", this.msdyn_periodtype);
        writer.writeStringValue("msdyn_permissionsdata", this.msdyn_permissionsdata);
        writer.writeStringValue("msdyn_pivots", this.msdyn_pivots);
        writer.writeStringValue("msdyn_previewflags", this.msdyn_previewflags);
        writer.writeDateValue("msdyn_publisheddatetime", this.msdyn_publisheddatetime);
        writer.writeStringValue("msdyn_rollupdefaultviewid", this.msdyn_rollupdefaultviewid);
        writer.writeStringValue("msdyn_rollupentity", this.msdyn_rollupentity);
        writer.writeStringValue("msdyn_rootentityrecordid", this.msdyn_rootentityrecordid);
        writer.writeStringValue("msdyn_snapshotschedule", this.msdyn_snapshotschedule);
        writer.writeDateValue("msdyn_startdate", this.msdyn_startdate);
        writer.writeNumberValue("msdyn_startingfiscalmonth", this.msdyn_startingfiscalmonth);
        writer.writeNumberValue("msdyn_startingfiscalquarter", this.msdyn_startingfiscalquarter);
        writer.writeNumberValue("msdyn_startingfiscalyear", this.msdyn_startingfiscalyear);
        writer.writeStringValue("msdyn_templatetype", this.msdyn_templatetype);
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
