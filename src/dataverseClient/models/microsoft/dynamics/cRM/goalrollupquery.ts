import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createGoalFromDiscriminatorValue} from './createGoalFromDiscriminatorValue';
import {createMsdyn_forecastdefinitionFromDiscriminatorValue} from './createMsdyn_forecastdefinitionFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Businessunit, Crmbaseentity, Duplicaterecord, Goal, Msdyn_forecastdefinition, Principal, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Goalrollupquery extends Crmbaseentity implements Parsable {
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
    private _fetchxml?: string | undefined;
    private _goal_rollupquery_actualdecimal?: Goal[] | undefined;
    private _goal_rollupquery_actualmoney?: Goal[] | undefined;
    private _goal_rollupquery_customdecimal?: Goal[] | undefined;
    private _goal_rollupquery_customint?: Goal[] | undefined;
    private _goal_rollupquery_custommoney?: Goal[] | undefined;
    private _goal_rollupquery_inprogressdecimal?: Goal[] | undefined;
    private _goal_rollupquery_inprogressint?: Goal[] | undefined;
    private _goal_rollupquery_inprogressmoney?: Goal[] | undefined;
    private _goalrollupquery_actualint?: Goal[] | undefined;
    private _goalrollupquery_AsyncOperations?: Asyncoperation[] | undefined;
    private _goalRollupQuery_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _goalRollupQuery_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _goalrollupquery_ProcessSessions?: Processsession[] | undefined;
    private _goalRollupQuery_SyncErrors?: Syncerror[] | undefined;
    private _goalrollupqueryid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery?: Msdyn_forecastdefinition[] | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _queryentitytype?: string | undefined;
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
     * Instantiates a new goalrollupquery and sets the default values.
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
     * Gets the fetchxml property value. 
     * @returns a string
     */
    public get fetchxml() {
        return this._fetchxml;
    };
    /**
     * Sets the fetchxml property value. 
     * @param value Value to set for the fetchxml property.
     */
    public set fetchxml(value: string | undefined) {
        this._fetchxml = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Goalrollupquery)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Goalrollupquery)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Goalrollupquery)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Goalrollupquery)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Goalrollupquery)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Goalrollupquery)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Goalrollupquery)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Goalrollupquery)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Goalrollupquery).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Goalrollupquery).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Goalrollupquery).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "fetchxml": (o, n) => { (o as unknown as Goalrollupquery).fetchxml = n.getStringValue(); },
            "goal_rollupquery_actualdecimal": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_actualdecimal = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_rollupquery_actualmoney": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_actualmoney = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_rollupquery_customdecimal": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_customdecimal = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_rollupquery_customint": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_customint = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_rollupquery_custommoney": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_custommoney = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_rollupquery_inprogressdecimal": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_inprogressdecimal = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_rollupquery_inprogressint": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_inprogressint = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_rollupquery_inprogressmoney": (o, n) => { (o as unknown as Goalrollupquery).goal_rollupquery_inprogressmoney = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goalrollupquery_actualint": (o, n) => { (o as unknown as Goalrollupquery).goalrollupquery_actualint = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goalrollupquery_AsyncOperations": (o, n) => { (o as unknown as Goalrollupquery).goalrollupquery_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "goalRollupQuery_DuplicateBaseRecord": (o, n) => { (o as unknown as Goalrollupquery).goalRollupQuery_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "goalRollupQuery_DuplicateMatchingRecord": (o, n) => { (o as unknown as Goalrollupquery).goalRollupQuery_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "goalrollupquery_ProcessSessions": (o, n) => { (o as unknown as Goalrollupquery).goalrollupquery_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "goalRollupQuery_SyncErrors": (o, n) => { (o as unknown as Goalrollupquery).goalRollupQuery_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "goalrollupqueryid": (o, n) => { (o as unknown as Goalrollupquery).goalrollupqueryid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Goalrollupquery).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Goalrollupquery).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Goalrollupquery).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Goalrollupquery).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery": (o, n) => { (o as unknown as Goalrollupquery).msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery = n.getCollectionOfObjectValues<Msdyn_forecastdefinition>(createMsdyn_forecastdefinitionFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Goalrollupquery).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Goalrollupquery).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Goalrollupquery).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Goalrollupquery).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Goalrollupquery).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "queryentitytype": (o, n) => { (o as unknown as Goalrollupquery).queryentitytype = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Goalrollupquery).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Goalrollupquery).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Goalrollupquery).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Goalrollupquery).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Goalrollupquery).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the goal_rollupquery_actualdecimal property value. 
     * @returns a goal
     */
    public get goal_rollupquery_actualdecimal() {
        return this._goal_rollupquery_actualdecimal;
    };
    /**
     * Sets the goal_rollupquery_actualdecimal property value. 
     * @param value Value to set for the goal_rollupquery_actualdecimal property.
     */
    public set goal_rollupquery_actualdecimal(value: Goal[] | undefined) {
        this._goal_rollupquery_actualdecimal = value;
    };
    /**
     * Gets the goal_rollupquery_actualmoney property value. 
     * @returns a goal
     */
    public get goal_rollupquery_actualmoney() {
        return this._goal_rollupquery_actualmoney;
    };
    /**
     * Sets the goal_rollupquery_actualmoney property value. 
     * @param value Value to set for the goal_rollupquery_actualmoney property.
     */
    public set goal_rollupquery_actualmoney(value: Goal[] | undefined) {
        this._goal_rollupquery_actualmoney = value;
    };
    /**
     * Gets the goal_rollupquery_customdecimal property value. 
     * @returns a goal
     */
    public get goal_rollupquery_customdecimal() {
        return this._goal_rollupquery_customdecimal;
    };
    /**
     * Sets the goal_rollupquery_customdecimal property value. 
     * @param value Value to set for the goal_rollupquery_customdecimal property.
     */
    public set goal_rollupquery_customdecimal(value: Goal[] | undefined) {
        this._goal_rollupquery_customdecimal = value;
    };
    /**
     * Gets the goal_rollupquery_customint property value. 
     * @returns a goal
     */
    public get goal_rollupquery_customint() {
        return this._goal_rollupquery_customint;
    };
    /**
     * Sets the goal_rollupquery_customint property value. 
     * @param value Value to set for the goal_rollupquery_customint property.
     */
    public set goal_rollupquery_customint(value: Goal[] | undefined) {
        this._goal_rollupquery_customint = value;
    };
    /**
     * Gets the goal_rollupquery_custommoney property value. 
     * @returns a goal
     */
    public get goal_rollupquery_custommoney() {
        return this._goal_rollupquery_custommoney;
    };
    /**
     * Sets the goal_rollupquery_custommoney property value. 
     * @param value Value to set for the goal_rollupquery_custommoney property.
     */
    public set goal_rollupquery_custommoney(value: Goal[] | undefined) {
        this._goal_rollupquery_custommoney = value;
    };
    /**
     * Gets the goal_rollupquery_inprogressdecimal property value. 
     * @returns a goal
     */
    public get goal_rollupquery_inprogressdecimal() {
        return this._goal_rollupquery_inprogressdecimal;
    };
    /**
     * Sets the goal_rollupquery_inprogressdecimal property value. 
     * @param value Value to set for the goal_rollupquery_inprogressdecimal property.
     */
    public set goal_rollupquery_inprogressdecimal(value: Goal[] | undefined) {
        this._goal_rollupquery_inprogressdecimal = value;
    };
    /**
     * Gets the goal_rollupquery_inprogressint property value. 
     * @returns a goal
     */
    public get goal_rollupquery_inprogressint() {
        return this._goal_rollupquery_inprogressint;
    };
    /**
     * Sets the goal_rollupquery_inprogressint property value. 
     * @param value Value to set for the goal_rollupquery_inprogressint property.
     */
    public set goal_rollupquery_inprogressint(value: Goal[] | undefined) {
        this._goal_rollupquery_inprogressint = value;
    };
    /**
     * Gets the goal_rollupquery_inprogressmoney property value. 
     * @returns a goal
     */
    public get goal_rollupquery_inprogressmoney() {
        return this._goal_rollupquery_inprogressmoney;
    };
    /**
     * Sets the goal_rollupquery_inprogressmoney property value. 
     * @param value Value to set for the goal_rollupquery_inprogressmoney property.
     */
    public set goal_rollupquery_inprogressmoney(value: Goal[] | undefined) {
        this._goal_rollupquery_inprogressmoney = value;
    };
    /**
     * Gets the goalrollupquery_actualint property value. 
     * @returns a goal
     */
    public get goalrollupquery_actualint() {
        return this._goalrollupquery_actualint;
    };
    /**
     * Sets the goalrollupquery_actualint property value. 
     * @param value Value to set for the goalrollupquery_actualint property.
     */
    public set goalrollupquery_actualint(value: Goal[] | undefined) {
        this._goalrollupquery_actualint = value;
    };
    /**
     * Gets the goalrollupquery_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get goalrollupquery_AsyncOperations() {
        return this._goalrollupquery_AsyncOperations;
    };
    /**
     * Sets the goalrollupquery_AsyncOperations property value. 
     * @param value Value to set for the goalrollupquery_AsyncOperations property.
     */
    public set goalrollupquery_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._goalrollupquery_AsyncOperations = value;
    };
    /**
     * Gets the goalRollupQuery_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get goalRollupQuery_DuplicateBaseRecord() {
        return this._goalRollupQuery_DuplicateBaseRecord;
    };
    /**
     * Sets the goalRollupQuery_DuplicateBaseRecord property value. 
     * @param value Value to set for the GoalRollupQuery_DuplicateBaseRecord property.
     */
    public set goalRollupQuery_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._goalRollupQuery_DuplicateBaseRecord = value;
    };
    /**
     * Gets the goalRollupQuery_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get goalRollupQuery_DuplicateMatchingRecord() {
        return this._goalRollupQuery_DuplicateMatchingRecord;
    };
    /**
     * Sets the goalRollupQuery_DuplicateMatchingRecord property value. 
     * @param value Value to set for the GoalRollupQuery_DuplicateMatchingRecord property.
     */
    public set goalRollupQuery_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._goalRollupQuery_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the goalrollupquery_ProcessSessions property value. 
     * @returns a processsession
     */
    public get goalrollupquery_ProcessSessions() {
        return this._goalrollupquery_ProcessSessions;
    };
    /**
     * Sets the goalrollupquery_ProcessSessions property value. 
     * @param value Value to set for the goalrollupquery_ProcessSessions property.
     */
    public set goalrollupquery_ProcessSessions(value: Processsession[] | undefined) {
        this._goalrollupquery_ProcessSessions = value;
    };
    /**
     * Gets the goalRollupQuery_SyncErrors property value. 
     * @returns a syncerror
     */
    public get goalRollupQuery_SyncErrors() {
        return this._goalRollupQuery_SyncErrors;
    };
    /**
     * Sets the goalRollupQuery_SyncErrors property value. 
     * @param value Value to set for the GoalRollupQuery_SyncErrors property.
     */
    public set goalRollupQuery_SyncErrors(value: Syncerror[] | undefined) {
        this._goalRollupQuery_SyncErrors = value;
    };
    /**
     * Gets the goalrollupqueryid property value. 
     * @returns a string
     */
    public get goalrollupqueryid() {
        return this._goalrollupqueryid;
    };
    /**
     * Sets the goalrollupqueryid property value. 
     * @param value Value to set for the goalrollupqueryid property.
     */
    public set goalrollupqueryid(value: string | undefined) {
        this._goalrollupqueryid = value;
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
     * Gets the msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery property value. 
     * @returns a msdyn_forecastdefinition
     */
    public get msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery() {
        return this._msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery;
    };
    /**
     * Sets the msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery property value. 
     * @param value Value to set for the msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery property.
     */
    public set msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery(value: Msdyn_forecastdefinition[] | undefined) {
        this._msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery = value;
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
     * Gets the queryentitytype property value. 
     * @returns a string
     */
    public get queryentitytype() {
        return this._queryentitytype;
    };
    /**
     * Sets the queryentitytype property value. 
     * @param value Value to set for the queryentitytype property.
     */
    public set queryentitytype(value: string | undefined) {
        this._queryentitytype = value;
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
        writer.writeStringValue("fetchxml", this.fetchxml);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_actualdecimal", this.goal_rollupquery_actualdecimal);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_actualmoney", this.goal_rollupquery_actualmoney);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_customdecimal", this.goal_rollupquery_customdecimal);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_customint", this.goal_rollupquery_customint);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_custommoney", this.goal_rollupquery_custommoney);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_inprogressdecimal", this.goal_rollupquery_inprogressdecimal);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_inprogressint", this.goal_rollupquery_inprogressint);
        writer.writeCollectionOfObjectValues<Goal>("goal_rollupquery_inprogressmoney", this.goal_rollupquery_inprogressmoney);
        writer.writeCollectionOfObjectValues<Goal>("goalrollupquery_actualint", this.goalrollupquery_actualint);
        writer.writeCollectionOfObjectValues<Asyncoperation>("goalrollupquery_AsyncOperations", this.goalrollupquery_AsyncOperations);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("goalRollupQuery_DuplicateBaseRecord", this.goalRollupQuery_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("goalRollupQuery_DuplicateMatchingRecord", this.goalRollupQuery_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Processsession>("goalrollupquery_ProcessSessions", this.goalrollupquery_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("goalRollupQuery_SyncErrors", this.goalRollupQuery_SyncErrors);
        writer.writeStringValue("goalrollupqueryid", this.goalrollupqueryid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_forecastdefinition>("msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery", this.msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeStringValue("queryentitytype", this.queryentitytype);
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
