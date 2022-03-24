import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createGoalrollupqueryFromDiscriminatorValue} from './createGoalrollupqueryFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMetricFromDiscriminatorValue} from './createMetricFromDiscriminatorValue';
import {createMsdyn_forecastinstanceFromDiscriminatorValue} from './createMsdyn_forecastinstanceFromDiscriminatorValue';
import {createMsdyn_forecastrecurrenceFromDiscriminatorValue} from './createMsdyn_forecastrecurrenceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Goalrollupquery, Mailboxtrackingfolder, Metric, Msdyn_forecastinstance, Msdyn_forecastrecurrence, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_forecastdefinition extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_metricid_value?: string | undefined;
    private __msdyn_rollupquery_value?: string | undefined;
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
    private _msdyn_fiscalmonth?: number | undefined;
    private _msdyn_fiscalquarter?: number | undefined;
    private _msdyn_fiscalyear?: number | undefined;
    private _msdyn_forecastdefinition_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_forecastdefinition_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_forecastdefinition_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastdefinition_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_forecastdefinition_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_forecastdefinition_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_forecastdefinition_ProcessSession?: Processsession[] | undefined;
    private _msdyn_forecastdefinition_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_forecastdefinitionid?: string | undefined;
    private _msdyn_forecastdefinitionname?: string | undefined;
    private _msdyn_forecastperiodtype?: number | undefined;
    private _msdyn_metricid?: Metric | undefined;
    private _msdyn_msdyn_forecastdefinition_msdyn_forecastinstance?: Msdyn_forecastinstance[] | undefined;
    private _msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence?: Msdyn_forecastrecurrence[] | undefined;
    private _msdyn_numberofrecurrences?: number | undefined;
    private _msdyn_quotasource?: number | undefined;
    private _msdyn_rollupquery?: Goalrollupquery | undefined;
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
     * Gets the _msdyn_metricid_value property value. 
     * @returns a string
     */
    public get _msdyn_metricid_value() {
        return this.__msdyn_metricid_value;
    };
    /**
     * Sets the _msdyn_metricid_value property value. 
     * @param value Value to set for the _msdyn_metricid_value property.
     */
    public set _msdyn_metricid_value(value: string | undefined) {
        this.__msdyn_metricid_value = value;
    };
    /**
     * Gets the _msdyn_rollupquery_value property value. 
     * @returns a string
     */
    public get _msdyn_rollupquery_value() {
        return this.__msdyn_rollupquery_value;
    };
    /**
     * Sets the _msdyn_rollupquery_value property value. 
     * @param value Value to set for the _msdyn_rollupquery_value property.
     */
    public set _msdyn_rollupquery_value(value: string | undefined) {
        this.__msdyn_rollupquery_value = value;
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
     * Instantiates a new msdyn_forecastdefinition and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_metricid_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._msdyn_metricid_value = n.getStringValue(); },
            "_msdyn_rollupquery_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._msdyn_rollupquery_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_forecastdefinition)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_forecastdefinition).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_forecastdefinition).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastdefinition).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_forecastdefinition).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_forecastdefinition).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_forecastdefinition).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_forecastdefinition).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_fiscalmonth": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_fiscalmonth = n.getNumberValue(); },
            "msdyn_fiscalquarter": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_fiscalquarter = n.getNumberValue(); },
            "msdyn_fiscalyear": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_fiscalyear = n.getNumberValue(); },
            "msdyn_forecastdefinition_AsyncOperations": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_forecastdefinition_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_forecastdefinition_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastdefinition_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_forecastdefinition_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_forecastdefinition_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_forecastdefinition_ProcessSession": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_forecastdefinition_SyncErrors": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinition_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_forecastdefinitionid": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinitionid = n.getStringValue(); },
            "msdyn_forecastdefinitionname": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastdefinitionname = n.getStringValue(); },
            "msdyn_forecastperiodtype": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_forecastperiodtype = n.getNumberValue(); },
            "msdyn_metricid": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_metricid = n.getObjectValue<Metric>(createMetricFromDiscriminatorValue); },
            "msdyn_msdyn_forecastdefinition_msdyn_forecastinstance": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_msdyn_forecastdefinition_msdyn_forecastinstance = n.getCollectionOfObjectValues<Msdyn_forecastinstance>(createMsdyn_forecastinstanceFromDiscriminatorValue); },
            "msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence = n.getCollectionOfObjectValues<Msdyn_forecastrecurrence>(createMsdyn_forecastrecurrenceFromDiscriminatorValue); },
            "msdyn_numberofrecurrences": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_numberofrecurrences = n.getNumberValue(); },
            "msdyn_quotasource": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_quotasource = n.getNumberValue(); },
            "msdyn_rollupquery": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_rollupquery = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "msdyn_validfrom": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_validfrom = n.getDateOnlyValue(); },
            "msdyn_validto": (o, n) => { (o as unknown as Msdyn_forecastdefinition).msdyn_validto = n.getDateOnlyValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_forecastdefinition).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_forecastdefinition).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_forecastdefinition).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_forecastdefinition).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_forecastdefinition).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_forecastdefinition).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_forecastdefinition).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_forecastdefinition).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_forecastdefinition).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_forecastdefinition).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_fiscalmonth property value. 
     * @returns a integer
     */
    public get msdyn_fiscalmonth() {
        return this._msdyn_fiscalmonth;
    };
    /**
     * Sets the msdyn_fiscalmonth property value. 
     * @param value Value to set for the msdyn_fiscalmonth property.
     */
    public set msdyn_fiscalmonth(value: number | undefined) {
        this._msdyn_fiscalmonth = value;
    };
    /**
     * Gets the msdyn_fiscalquarter property value. 
     * @returns a integer
     */
    public get msdyn_fiscalquarter() {
        return this._msdyn_fiscalquarter;
    };
    /**
     * Sets the msdyn_fiscalquarter property value. 
     * @param value Value to set for the msdyn_fiscalquarter property.
     */
    public set msdyn_fiscalquarter(value: number | undefined) {
        this._msdyn_fiscalquarter = value;
    };
    /**
     * Gets the msdyn_fiscalyear property value. 
     * @returns a integer
     */
    public get msdyn_fiscalyear() {
        return this._msdyn_fiscalyear;
    };
    /**
     * Sets the msdyn_fiscalyear property value. 
     * @param value Value to set for the msdyn_fiscalyear property.
     */
    public set msdyn_fiscalyear(value: number | undefined) {
        this._msdyn_fiscalyear = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_forecastdefinition_AsyncOperations() {
        return this._msdyn_forecastdefinition_AsyncOperations;
    };
    /**
     * Sets the msdyn_forecastdefinition_AsyncOperations property value. 
     * @param value Value to set for the msdyn_forecastdefinition_AsyncOperations property.
     */
    public set msdyn_forecastdefinition_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_forecastdefinition_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_forecastdefinition_BulkDeleteFailures() {
        return this._msdyn_forecastdefinition_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_forecastdefinition_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_forecastdefinition_BulkDeleteFailures property.
     */
    public set msdyn_forecastdefinition_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_forecastdefinition_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastdefinition_DuplicateBaseRecord() {
        return this._msdyn_forecastdefinition_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_forecastdefinition_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_forecastdefinition_DuplicateBaseRecord property.
     */
    public set msdyn_forecastdefinition_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastdefinition_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_forecastdefinition_DuplicateMatchingRecord() {
        return this._msdyn_forecastdefinition_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_forecastdefinition_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_forecastdefinition_DuplicateMatchingRecord property.
     */
    public set msdyn_forecastdefinition_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_forecastdefinition_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_forecastdefinition_MailboxTrackingFolders() {
        return this._msdyn_forecastdefinition_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_forecastdefinition_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_forecastdefinition_MailboxTrackingFolders property.
     */
    public set msdyn_forecastdefinition_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_forecastdefinition_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_forecastdefinition_PrincipalObjectAttributeAccesses() {
        return this._msdyn_forecastdefinition_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_forecastdefinition_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_forecastdefinition_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_forecastdefinition_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_forecastdefinition_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_forecastdefinition_ProcessSession() {
        return this._msdyn_forecastdefinition_ProcessSession;
    };
    /**
     * Sets the msdyn_forecastdefinition_ProcessSession property value. 
     * @param value Value to set for the msdyn_forecastdefinition_ProcessSession property.
     */
    public set msdyn_forecastdefinition_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_forecastdefinition_ProcessSession = value;
    };
    /**
     * Gets the msdyn_forecastdefinition_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_forecastdefinition_SyncErrors() {
        return this._msdyn_forecastdefinition_SyncErrors;
    };
    /**
     * Sets the msdyn_forecastdefinition_SyncErrors property value. 
     * @param value Value to set for the msdyn_forecastdefinition_SyncErrors property.
     */
    public set msdyn_forecastdefinition_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_forecastdefinition_SyncErrors = value;
    };
    /**
     * Gets the msdyn_forecastdefinitionid property value. 
     * @returns a string
     */
    public get msdyn_forecastdefinitionid() {
        return this._msdyn_forecastdefinitionid;
    };
    /**
     * Sets the msdyn_forecastdefinitionid property value. 
     * @param value Value to set for the msdyn_forecastdefinitionid property.
     */
    public set msdyn_forecastdefinitionid(value: string | undefined) {
        this._msdyn_forecastdefinitionid = value;
    };
    /**
     * Gets the msdyn_forecastdefinitionname property value. 
     * @returns a string
     */
    public get msdyn_forecastdefinitionname() {
        return this._msdyn_forecastdefinitionname;
    };
    /**
     * Sets the msdyn_forecastdefinitionname property value. 
     * @param value Value to set for the msdyn_forecastdefinitionname property.
     */
    public set msdyn_forecastdefinitionname(value: string | undefined) {
        this._msdyn_forecastdefinitionname = value;
    };
    /**
     * Gets the msdyn_forecastperiodtype property value. 
     * @returns a integer
     */
    public get msdyn_forecastperiodtype() {
        return this._msdyn_forecastperiodtype;
    };
    /**
     * Sets the msdyn_forecastperiodtype property value. 
     * @param value Value to set for the msdyn_forecastperiodtype property.
     */
    public set msdyn_forecastperiodtype(value: number | undefined) {
        this._msdyn_forecastperiodtype = value;
    };
    /**
     * Gets the msdyn_metricid property value. 
     * @returns a metric
     */
    public get msdyn_metricid() {
        return this._msdyn_metricid;
    };
    /**
     * Sets the msdyn_metricid property value. 
     * @param value Value to set for the msdyn_metricid property.
     */
    public set msdyn_metricid(value: Metric | undefined) {
        this._msdyn_metricid = value;
    };
    /**
     * Gets the msdyn_msdyn_forecastdefinition_msdyn_forecastinstance property value. 
     * @returns a msdyn_forecastinstance
     */
    public get msdyn_msdyn_forecastdefinition_msdyn_forecastinstance() {
        return this._msdyn_msdyn_forecastdefinition_msdyn_forecastinstance;
    };
    /**
     * Sets the msdyn_msdyn_forecastdefinition_msdyn_forecastinstance property value. 
     * @param value Value to set for the msdyn_msdyn_forecastdefinition_msdyn_forecastinstance property.
     */
    public set msdyn_msdyn_forecastdefinition_msdyn_forecastinstance(value: Msdyn_forecastinstance[] | undefined) {
        this._msdyn_msdyn_forecastdefinition_msdyn_forecastinstance = value;
    };
    /**
     * Gets the msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence property value. 
     * @returns a msdyn_forecastrecurrence
     */
    public get msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence() {
        return this._msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence;
    };
    /**
     * Sets the msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence property value. 
     * @param value Value to set for the msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence property.
     */
    public set msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence(value: Msdyn_forecastrecurrence[] | undefined) {
        this._msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence = value;
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
     * Gets the msdyn_quotasource property value. 
     * @returns a integer
     */
    public get msdyn_quotasource() {
        return this._msdyn_quotasource;
    };
    /**
     * Sets the msdyn_quotasource property value. 
     * @param value Value to set for the msdyn_quotasource property.
     */
    public set msdyn_quotasource(value: number | undefined) {
        this._msdyn_quotasource = value;
    };
    /**
     * Gets the msdyn_rollupquery property value. 
     * @returns a goalrollupquery
     */
    public get msdyn_rollupquery() {
        return this._msdyn_rollupquery;
    };
    /**
     * Sets the msdyn_rollupquery property value. 
     * @param value Value to set for the msdyn_rollupquery property.
     */
    public set msdyn_rollupquery(value: Goalrollupquery | undefined) {
        this._msdyn_rollupquery = value;
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
        writer.writeStringValue("_msdyn_metricid_value", this._msdyn_metricid_value);
        writer.writeStringValue("_msdyn_rollupquery_value", this._msdyn_rollupquery_value);
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
        writer.writeNumberValue("msdyn_fiscalmonth", this.msdyn_fiscalmonth);
        writer.writeNumberValue("msdyn_fiscalquarter", this.msdyn_fiscalquarter);
        writer.writeNumberValue("msdyn_fiscalyear", this.msdyn_fiscalyear);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_forecastdefinition_AsyncOperations", this.msdyn_forecastdefinition_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_forecastdefinition_BulkDeleteFailures", this.msdyn_forecastdefinition_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastdefinition_DuplicateBaseRecord", this.msdyn_forecastdefinition_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_forecastdefinition_DuplicateMatchingRecord", this.msdyn_forecastdefinition_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_forecastdefinition_MailboxTrackingFolders", this.msdyn_forecastdefinition_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_forecastdefinition_PrincipalObjectAttributeAccesses", this.msdyn_forecastdefinition_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_forecastdefinition_ProcessSession", this.msdyn_forecastdefinition_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_forecastdefinition_SyncErrors", this.msdyn_forecastdefinition_SyncErrors);
        writer.writeStringValue("msdyn_forecastdefinitionid", this.msdyn_forecastdefinitionid);
        writer.writeStringValue("msdyn_forecastdefinitionname", this.msdyn_forecastdefinitionname);
        writer.writeNumberValue("msdyn_forecastperiodtype", this.msdyn_forecastperiodtype);
        writer.writeObjectValue<Metric>("msdyn_metricid", this.msdyn_metricid);
        writer.writeCollectionOfObjectValues<Msdyn_forecastinstance>("msdyn_msdyn_forecastdefinition_msdyn_forecastinstance", this.msdyn_msdyn_forecastdefinition_msdyn_forecastinstance);
        writer.writeCollectionOfObjectValues<Msdyn_forecastrecurrence>("msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence", this.msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence);
        writer.writeNumberValue("msdyn_numberofrecurrences", this.msdyn_numberofrecurrences);
        writer.writeNumberValue("msdyn_quotasource", this.msdyn_quotasource);
        writer.writeObjectValue<Goalrollupquery>("msdyn_rollupquery", this.msdyn_rollupquery);
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
