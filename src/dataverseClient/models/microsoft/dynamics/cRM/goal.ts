import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createGoalFromDiscriminatorValue} from './createGoalFromDiscriminatorValue';
import {createGoalrollupqueryFromDiscriminatorValue} from './createGoalrollupqueryFromDiscriminatorValue';
import {createMetricFromDiscriminatorValue} from './createMetricFromDiscriminatorValue';
import {createMsdyn_forecastinstanceFromDiscriminatorValue} from './createMsdyn_forecastinstanceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Goalrollupquery, Metric, Msdyn_forecastinstance, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Goal extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __goalownerid_value?: string | undefined;
    private __goalwitherrorid_value?: string | undefined;
    private __metricid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentgoalid_value?: string | undefined;
    private __rollupqueryactualdecimalid_value?: string | undefined;
    private __rollupqueryactualintegerid_value?: string | undefined;
    private __rollupqueryactualmoneyid_value?: string | undefined;
    private __rollupquerycustomdecimalid_value?: string | undefined;
    private __rollupquerycustomintegerid_value?: string | undefined;
    private __rollupquerycustommoneyid_value?: string | undefined;
    private __rollupqueryinprogressdecimalid_value?: string | undefined;
    private __rollupqueryinprogressintegerid_value?: string | undefined;
    private __rollupqueryinprogressmoneyid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _actualdecimal?: number | undefined;
    private _actualinteger?: number | undefined;
    private _actualmoney?: number | undefined;
    private _actualmoney_base?: number | undefined;
    private _actualstring?: string | undefined;
    private _amountdatatype?: number | undefined;
    private _computedtargetasoftodaydecimal?: number | undefined;
    private _computedtargetasoftodayinteger?: number | undefined;
    private _computedtargetasoftodaymoney?: number | undefined;
    private _computedtargetasoftodaymoney_base?: number | undefined;
    private _computedtargetasoftodaypercentageachieved?: number | undefined;
    private _consideronlygoalownersrecords?: boolean | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customrollupfielddecimal?: number | undefined;
    private _customrollupfieldinteger?: number | undefined;
    private _customrollupfieldmoney?: number | undefined;
    private _customrollupfieldmoney_base?: number | undefined;
    private _customrollupfieldstring?: string | undefined;
    private _depth?: number | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _fiscalperiod?: number | undefined;
    private _fiscalyear?: number | undefined;
    private _goal_Annotation?: Annotation[] | undefined;
    private _goal_AsyncOperations?: Asyncoperation[] | undefined;
    private _goal_connections1?: Connection[] | undefined;
    private _goal_connections2?: Connection[] | undefined;
    private _goal_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _goal_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _goal_parent_goal?: Goal[] | undefined;
    private _goal_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _goal_ProcessSessions?: Processsession[] | undefined;
    private _goal_RollupError_Goal?: Goal[] | undefined;
    private _goal_SyncErrors?: Syncerror[] | undefined;
    private _goalenddate?: Date | undefined;
    private _goalid?: string | undefined;
    private _goalownerid_systemuser?: Systemuser | undefined;
    private _goalownerid_team?: Team | undefined;
    private _goalstartdate?: Date | undefined;
    private _goalwitherrorid?: Goal | undefined;
    private _importsequencenumber?: number | undefined;
    private _inprogressdecimal?: number | undefined;
    private _inprogressinteger?: number | undefined;
    private _inprogressmoney?: number | undefined;
    private _inprogressmoney_base?: number | undefined;
    private _inprogressstring?: string | undefined;
    private _isamount?: boolean | undefined;
    private _isfiscalperiodgoal?: boolean | undefined;
    private _isoverridden?: boolean | undefined;
    private _isoverride?: boolean | undefined;
    private _lastrolledupdate?: Date | undefined;
    private _metricid?: Metric | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_goal_msdyn_forecastinstance?: Msdyn_forecastinstance[] | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentgoalid?: Goal | undefined;
    private _percentage?: number | undefined;
    private _rolluperrorcode?: number | undefined;
    private _rolluponlyfromchildgoals?: boolean | undefined;
    private _rollupqueryactualdecimalid?: Goalrollupquery | undefined;
    private _rollupqueryactualintegerid?: Goalrollupquery | undefined;
    private _rollupqueryactualmoneyid?: Goalrollupquery | undefined;
    private _rollupquerycustomdecimalid?: Goalrollupquery | undefined;
    private _rollupquerycustomintegerid?: Goalrollupquery | undefined;
    private _rollupquerycustommoneyid?: Goalrollupquery | undefined;
    private _rollupqueryinprogressdecimalid?: Goalrollupquery | undefined;
    private _rollupqueryinprogressintegerid?: Goalrollupquery | undefined;
    private _rollupqueryinprogressmoneyid?: Goalrollupquery | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _stretchtargetdecimal?: number | undefined;
    private _stretchtargetinteger?: number | undefined;
    private _stretchtargetmoney?: number | undefined;
    private _stretchtargetmoney_base?: number | undefined;
    private _stretchtargetstring?: string | undefined;
    private _targetdecimal?: number | undefined;
    private _targetinteger?: number | undefined;
    private _targetmoney?: number | undefined;
    private _targetmoney_base?: number | undefined;
    private _targetstring?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _treeid?: string | undefined;
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
     * Gets the _goalownerid_value property value. 
     * @returns a string
     */
    public get _goalownerid_value() {
        return this.__goalownerid_value;
    };
    /**
     * Sets the _goalownerid_value property value. 
     * @param value Value to set for the _goalownerid_value property.
     */
    public set _goalownerid_value(value: string | undefined) {
        this.__goalownerid_value = value;
    };
    /**
     * Gets the _goalwitherrorid_value property value. 
     * @returns a string
     */
    public get _goalwitherrorid_value() {
        return this.__goalwitherrorid_value;
    };
    /**
     * Sets the _goalwitherrorid_value property value. 
     * @param value Value to set for the _goalwitherrorid_value property.
     */
    public set _goalwitherrorid_value(value: string | undefined) {
        this.__goalwitherrorid_value = value;
    };
    /**
     * Gets the _metricid_value property value. 
     * @returns a string
     */
    public get _metricid_value() {
        return this.__metricid_value;
    };
    /**
     * Sets the _metricid_value property value. 
     * @param value Value to set for the _metricid_value property.
     */
    public set _metricid_value(value: string | undefined) {
        this.__metricid_value = value;
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
     * Gets the _parentgoalid_value property value. 
     * @returns a string
     */
    public get _parentgoalid_value() {
        return this.__parentgoalid_value;
    };
    /**
     * Sets the _parentgoalid_value property value. 
     * @param value Value to set for the _parentgoalid_value property.
     */
    public set _parentgoalid_value(value: string | undefined) {
        this.__parentgoalid_value = value;
    };
    /**
     * Gets the _rollupqueryactualdecimalid_value property value. 
     * @returns a string
     */
    public get _rollupqueryactualdecimalid_value() {
        return this.__rollupqueryactualdecimalid_value;
    };
    /**
     * Sets the _rollupqueryactualdecimalid_value property value. 
     * @param value Value to set for the _rollupqueryactualdecimalid_value property.
     */
    public set _rollupqueryactualdecimalid_value(value: string | undefined) {
        this.__rollupqueryactualdecimalid_value = value;
    };
    /**
     * Gets the _rollupqueryactualintegerid_value property value. 
     * @returns a string
     */
    public get _rollupqueryactualintegerid_value() {
        return this.__rollupqueryactualintegerid_value;
    };
    /**
     * Sets the _rollupqueryactualintegerid_value property value. 
     * @param value Value to set for the _rollupqueryactualintegerid_value property.
     */
    public set _rollupqueryactualintegerid_value(value: string | undefined) {
        this.__rollupqueryactualintegerid_value = value;
    };
    /**
     * Gets the _rollupqueryactualmoneyid_value property value. 
     * @returns a string
     */
    public get _rollupqueryactualmoneyid_value() {
        return this.__rollupqueryactualmoneyid_value;
    };
    /**
     * Sets the _rollupqueryactualmoneyid_value property value. 
     * @param value Value to set for the _rollupqueryactualmoneyid_value property.
     */
    public set _rollupqueryactualmoneyid_value(value: string | undefined) {
        this.__rollupqueryactualmoneyid_value = value;
    };
    /**
     * Gets the _rollupquerycustomdecimalid_value property value. 
     * @returns a string
     */
    public get _rollupquerycustomdecimalid_value() {
        return this.__rollupquerycustomdecimalid_value;
    };
    /**
     * Sets the _rollupquerycustomdecimalid_value property value. 
     * @param value Value to set for the _rollupquerycustomdecimalid_value property.
     */
    public set _rollupquerycustomdecimalid_value(value: string | undefined) {
        this.__rollupquerycustomdecimalid_value = value;
    };
    /**
     * Gets the _rollupquerycustomintegerid_value property value. 
     * @returns a string
     */
    public get _rollupquerycustomintegerid_value() {
        return this.__rollupquerycustomintegerid_value;
    };
    /**
     * Sets the _rollupquerycustomintegerid_value property value. 
     * @param value Value to set for the _rollupquerycustomintegerid_value property.
     */
    public set _rollupquerycustomintegerid_value(value: string | undefined) {
        this.__rollupquerycustomintegerid_value = value;
    };
    /**
     * Gets the _rollupquerycustommoneyid_value property value. 
     * @returns a string
     */
    public get _rollupquerycustommoneyid_value() {
        return this.__rollupquerycustommoneyid_value;
    };
    /**
     * Sets the _rollupquerycustommoneyid_value property value. 
     * @param value Value to set for the _rollupquerycustommoneyid_value property.
     */
    public set _rollupquerycustommoneyid_value(value: string | undefined) {
        this.__rollupquerycustommoneyid_value = value;
    };
    /**
     * Gets the _rollupqueryinprogressdecimalid_value property value. 
     * @returns a string
     */
    public get _rollupqueryinprogressdecimalid_value() {
        return this.__rollupqueryinprogressdecimalid_value;
    };
    /**
     * Sets the _rollupqueryinprogressdecimalid_value property value. 
     * @param value Value to set for the _rollupqueryinprogressdecimalid_value property.
     */
    public set _rollupqueryinprogressdecimalid_value(value: string | undefined) {
        this.__rollupqueryinprogressdecimalid_value = value;
    };
    /**
     * Gets the _rollupqueryinprogressintegerid_value property value. 
     * @returns a string
     */
    public get _rollupqueryinprogressintegerid_value() {
        return this.__rollupqueryinprogressintegerid_value;
    };
    /**
     * Sets the _rollupqueryinprogressintegerid_value property value. 
     * @param value Value to set for the _rollupqueryinprogressintegerid_value property.
     */
    public set _rollupqueryinprogressintegerid_value(value: string | undefined) {
        this.__rollupqueryinprogressintegerid_value = value;
    };
    /**
     * Gets the _rollupqueryinprogressmoneyid_value property value. 
     * @returns a string
     */
    public get _rollupqueryinprogressmoneyid_value() {
        return this.__rollupqueryinprogressmoneyid_value;
    };
    /**
     * Sets the _rollupqueryinprogressmoneyid_value property value. 
     * @param value Value to set for the _rollupqueryinprogressmoneyid_value property.
     */
    public set _rollupqueryinprogressmoneyid_value(value: string | undefined) {
        this.__rollupqueryinprogressmoneyid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the actualdecimal property value. 
     * @returns a int64
     */
    public get actualdecimal() {
        return this._actualdecimal;
    };
    /**
     * Sets the actualdecimal property value. 
     * @param value Value to set for the actualdecimal property.
     */
    public set actualdecimal(value: number | undefined) {
        this._actualdecimal = value;
    };
    /**
     * Gets the actualinteger property value. 
     * @returns a integer
     */
    public get actualinteger() {
        return this._actualinteger;
    };
    /**
     * Sets the actualinteger property value. 
     * @param value Value to set for the actualinteger property.
     */
    public set actualinteger(value: number | undefined) {
        this._actualinteger = value;
    };
    /**
     * Gets the actualmoney property value. 
     * @returns a int64
     */
    public get actualmoney() {
        return this._actualmoney;
    };
    /**
     * Sets the actualmoney property value. 
     * @param value Value to set for the actualmoney property.
     */
    public set actualmoney(value: number | undefined) {
        this._actualmoney = value;
    };
    /**
     * Gets the actualmoney_base property value. 
     * @returns a int64
     */
    public get actualmoney_base() {
        return this._actualmoney_base;
    };
    /**
     * Sets the actualmoney_base property value. 
     * @param value Value to set for the actualmoney_base property.
     */
    public set actualmoney_base(value: number | undefined) {
        this._actualmoney_base = value;
    };
    /**
     * Gets the actualstring property value. 
     * @returns a string
     */
    public get actualstring() {
        return this._actualstring;
    };
    /**
     * Sets the actualstring property value. 
     * @param value Value to set for the actualstring property.
     */
    public set actualstring(value: string | undefined) {
        this._actualstring = value;
    };
    /**
     * Gets the amountdatatype property value. 
     * @returns a integer
     */
    public get amountdatatype() {
        return this._amountdatatype;
    };
    /**
     * Sets the amountdatatype property value. 
     * @param value Value to set for the amountdatatype property.
     */
    public set amountdatatype(value: number | undefined) {
        this._amountdatatype = value;
    };
    /**
     * Gets the computedtargetasoftodaydecimal property value. 
     * @returns a int64
     */
    public get computedtargetasoftodaydecimal() {
        return this._computedtargetasoftodaydecimal;
    };
    /**
     * Sets the computedtargetasoftodaydecimal property value. 
     * @param value Value to set for the computedtargetasoftodaydecimal property.
     */
    public set computedtargetasoftodaydecimal(value: number | undefined) {
        this._computedtargetasoftodaydecimal = value;
    };
    /**
     * Gets the computedtargetasoftodayinteger property value. 
     * @returns a integer
     */
    public get computedtargetasoftodayinteger() {
        return this._computedtargetasoftodayinteger;
    };
    /**
     * Sets the computedtargetasoftodayinteger property value. 
     * @param value Value to set for the computedtargetasoftodayinteger property.
     */
    public set computedtargetasoftodayinteger(value: number | undefined) {
        this._computedtargetasoftodayinteger = value;
    };
    /**
     * Gets the computedtargetasoftodaymoney property value. 
     * @returns a int64
     */
    public get computedtargetasoftodaymoney() {
        return this._computedtargetasoftodaymoney;
    };
    /**
     * Sets the computedtargetasoftodaymoney property value. 
     * @param value Value to set for the computedtargetasoftodaymoney property.
     */
    public set computedtargetasoftodaymoney(value: number | undefined) {
        this._computedtargetasoftodaymoney = value;
    };
    /**
     * Gets the computedtargetasoftodaymoney_base property value. 
     * @returns a int64
     */
    public get computedtargetasoftodaymoney_base() {
        return this._computedtargetasoftodaymoney_base;
    };
    /**
     * Sets the computedtargetasoftodaymoney_base property value. 
     * @param value Value to set for the computedtargetasoftodaymoney_base property.
     */
    public set computedtargetasoftodaymoney_base(value: number | undefined) {
        this._computedtargetasoftodaymoney_base = value;
    };
    /**
     * Gets the computedtargetasoftodaypercentageachieved property value. 
     * @returns a int64
     */
    public get computedtargetasoftodaypercentageachieved() {
        return this._computedtargetasoftodaypercentageachieved;
    };
    /**
     * Sets the computedtargetasoftodaypercentageachieved property value. 
     * @param value Value to set for the computedtargetasoftodaypercentageachieved property.
     */
    public set computedtargetasoftodaypercentageachieved(value: number | undefined) {
        this._computedtargetasoftodaypercentageachieved = value;
    };
    /**
     * Gets the consideronlygoalownersrecords property value. 
     * @returns a boolean
     */
    public get consideronlygoalownersrecords() {
        return this._consideronlygoalownersrecords;
    };
    /**
     * Sets the consideronlygoalownersrecords property value. 
     * @param value Value to set for the consideronlygoalownersrecords property.
     */
    public set consideronlygoalownersrecords(value: boolean | undefined) {
        this._consideronlygoalownersrecords = value;
    };
    /**
     * Instantiates a new goal and sets the default values.
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
     * Gets the customrollupfielddecimal property value. 
     * @returns a int64
     */
    public get customrollupfielddecimal() {
        return this._customrollupfielddecimal;
    };
    /**
     * Sets the customrollupfielddecimal property value. 
     * @param value Value to set for the customrollupfielddecimal property.
     */
    public set customrollupfielddecimal(value: number | undefined) {
        this._customrollupfielddecimal = value;
    };
    /**
     * Gets the customrollupfieldinteger property value. 
     * @returns a integer
     */
    public get customrollupfieldinteger() {
        return this._customrollupfieldinteger;
    };
    /**
     * Sets the customrollupfieldinteger property value. 
     * @param value Value to set for the customrollupfieldinteger property.
     */
    public set customrollupfieldinteger(value: number | undefined) {
        this._customrollupfieldinteger = value;
    };
    /**
     * Gets the customrollupfieldmoney property value. 
     * @returns a int64
     */
    public get customrollupfieldmoney() {
        return this._customrollupfieldmoney;
    };
    /**
     * Sets the customrollupfieldmoney property value. 
     * @param value Value to set for the customrollupfieldmoney property.
     */
    public set customrollupfieldmoney(value: number | undefined) {
        this._customrollupfieldmoney = value;
    };
    /**
     * Gets the customrollupfieldmoney_base property value. 
     * @returns a int64
     */
    public get customrollupfieldmoney_base() {
        return this._customrollupfieldmoney_base;
    };
    /**
     * Sets the customrollupfieldmoney_base property value. 
     * @param value Value to set for the customrollupfieldmoney_base property.
     */
    public set customrollupfieldmoney_base(value: number | undefined) {
        this._customrollupfieldmoney_base = value;
    };
    /**
     * Gets the customrollupfieldstring property value. 
     * @returns a string
     */
    public get customrollupfieldstring() {
        return this._customrollupfieldstring;
    };
    /**
     * Sets the customrollupfieldstring property value. 
     * @param value Value to set for the customrollupfieldstring property.
     */
    public set customrollupfieldstring(value: string | undefined) {
        this._customrollupfieldstring = value;
    };
    /**
     * Gets the depth property value. 
     * @returns a integer
     */
    public get depth() {
        return this._depth;
    };
    /**
     * Sets the depth property value. 
     * @param value Value to set for the depth property.
     */
    public set depth(value: number | undefined) {
        this._depth = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the fiscalperiod property value. 
     * @returns a integer
     */
    public get fiscalperiod() {
        return this._fiscalperiod;
    };
    /**
     * Sets the fiscalperiod property value. 
     * @param value Value to set for the fiscalperiod property.
     */
    public set fiscalperiod(value: number | undefined) {
        this._fiscalperiod = value;
    };
    /**
     * Gets the fiscalyear property value. 
     * @returns a integer
     */
    public get fiscalyear() {
        return this._fiscalyear;
    };
    /**
     * Sets the fiscalyear property value. 
     * @param value Value to set for the fiscalyear property.
     */
    public set fiscalyear(value: number | undefined) {
        this._fiscalyear = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Goal)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Goal)._createdonbehalfby_value = n.getStringValue(); },
            "_goalownerid_value": (o, n) => { (o as unknown as Goal)._goalownerid_value = n.getStringValue(); },
            "_goalwitherrorid_value": (o, n) => { (o as unknown as Goal)._goalwitherrorid_value = n.getStringValue(); },
            "_metricid_value": (o, n) => { (o as unknown as Goal)._metricid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Goal)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Goal)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Goal)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Goal)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Goal)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Goal)._owninguser_value = n.getStringValue(); },
            "_parentgoalid_value": (o, n) => { (o as unknown as Goal)._parentgoalid_value = n.getStringValue(); },
            "_rollupqueryactualdecimalid_value": (o, n) => { (o as unknown as Goal)._rollupqueryactualdecimalid_value = n.getStringValue(); },
            "_rollupqueryactualintegerid_value": (o, n) => { (o as unknown as Goal)._rollupqueryactualintegerid_value = n.getStringValue(); },
            "_rollupqueryactualmoneyid_value": (o, n) => { (o as unknown as Goal)._rollupqueryactualmoneyid_value = n.getStringValue(); },
            "_rollupquerycustomdecimalid_value": (o, n) => { (o as unknown as Goal)._rollupquerycustomdecimalid_value = n.getStringValue(); },
            "_rollupquerycustomintegerid_value": (o, n) => { (o as unknown as Goal)._rollupquerycustomintegerid_value = n.getStringValue(); },
            "_rollupquerycustommoneyid_value": (o, n) => { (o as unknown as Goal)._rollupquerycustommoneyid_value = n.getStringValue(); },
            "_rollupqueryinprogressdecimalid_value": (o, n) => { (o as unknown as Goal)._rollupqueryinprogressdecimalid_value = n.getStringValue(); },
            "_rollupqueryinprogressintegerid_value": (o, n) => { (o as unknown as Goal)._rollupqueryinprogressintegerid_value = n.getStringValue(); },
            "_rollupqueryinprogressmoneyid_value": (o, n) => { (o as unknown as Goal)._rollupqueryinprogressmoneyid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Goal)._transactioncurrencyid_value = n.getStringValue(); },
            "actualdecimal": (o, n) => { (o as unknown as Goal).actualdecimal = n.getNumberValue(); },
            "actualinteger": (o, n) => { (o as unknown as Goal).actualinteger = n.getNumberValue(); },
            "actualmoney": (o, n) => { (o as unknown as Goal).actualmoney = n.getNumberValue(); },
            "actualmoney_base": (o, n) => { (o as unknown as Goal).actualmoney_base = n.getNumberValue(); },
            "actualstring": (o, n) => { (o as unknown as Goal).actualstring = n.getStringValue(); },
            "amountdatatype": (o, n) => { (o as unknown as Goal).amountdatatype = n.getNumberValue(); },
            "computedtargetasoftodaydecimal": (o, n) => { (o as unknown as Goal).computedtargetasoftodaydecimal = n.getNumberValue(); },
            "computedtargetasoftodayinteger": (o, n) => { (o as unknown as Goal).computedtargetasoftodayinteger = n.getNumberValue(); },
            "computedtargetasoftodaymoney": (o, n) => { (o as unknown as Goal).computedtargetasoftodaymoney = n.getNumberValue(); },
            "computedtargetasoftodaymoney_base": (o, n) => { (o as unknown as Goal).computedtargetasoftodaymoney_base = n.getNumberValue(); },
            "computedtargetasoftodaypercentageachieved": (o, n) => { (o as unknown as Goal).computedtargetasoftodaypercentageachieved = n.getNumberValue(); },
            "consideronlygoalownersrecords": (o, n) => { (o as unknown as Goal).consideronlygoalownersrecords = n.getBooleanValue(); },
            "createdby": (o, n) => { (o as unknown as Goal).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Goal).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Goal).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customrollupfielddecimal": (o, n) => { (o as unknown as Goal).customrollupfielddecimal = n.getNumberValue(); },
            "customrollupfieldinteger": (o, n) => { (o as unknown as Goal).customrollupfieldinteger = n.getNumberValue(); },
            "customrollupfieldmoney": (o, n) => { (o as unknown as Goal).customrollupfieldmoney = n.getNumberValue(); },
            "customrollupfieldmoney_base": (o, n) => { (o as unknown as Goal).customrollupfieldmoney_base = n.getNumberValue(); },
            "customrollupfieldstring": (o, n) => { (o as unknown as Goal).customrollupfieldstring = n.getStringValue(); },
            "depth": (o, n) => { (o as unknown as Goal).depth = n.getNumberValue(); },
            "entityimage": (o, n) => { (o as unknown as Goal).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Goal).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Goal).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Goal).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Goal).exchangerate = n.getNumberValue(); },
            "fiscalperiod": (o, n) => { (o as unknown as Goal).fiscalperiod = n.getNumberValue(); },
            "fiscalyear": (o, n) => { (o as unknown as Goal).fiscalyear = n.getNumberValue(); },
            "goal_Annotation": (o, n) => { (o as unknown as Goal).goal_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "goal_AsyncOperations": (o, n) => { (o as unknown as Goal).goal_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "goal_connections1": (o, n) => { (o as unknown as Goal).goal_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "goal_connections2": (o, n) => { (o as unknown as Goal).goal_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "goal_DuplicateBaseRecord": (o, n) => { (o as unknown as Goal).goal_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "goal_DuplicateMatchingRecord": (o, n) => { (o as unknown as Goal).goal_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "goal_parent_goal": (o, n) => { (o as unknown as Goal).goal_parent_goal = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_principalobjectattributeaccess": (o, n) => { (o as unknown as Goal).goal_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "goal_ProcessSessions": (o, n) => { (o as unknown as Goal).goal_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "goal_RollupError_Goal": (o, n) => { (o as unknown as Goal).goal_RollupError_Goal = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "goal_SyncErrors": (o, n) => { (o as unknown as Goal).goal_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "goalenddate": (o, n) => { (o as unknown as Goal).goalenddate = n.getDateValue(); },
            "goalid": (o, n) => { (o as unknown as Goal).goalid = n.getStringValue(); },
            "goalownerid_systemuser": (o, n) => { (o as unknown as Goal).goalownerid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "goalownerid_team": (o, n) => { (o as unknown as Goal).goalownerid_team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "goalstartdate": (o, n) => { (o as unknown as Goal).goalstartdate = n.getDateValue(); },
            "goalwitherrorid": (o, n) => { (o as unknown as Goal).goalwitherrorid = n.getObjectValue<Goal>(createGoalFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Goal).importsequencenumber = n.getNumberValue(); },
            "inprogressdecimal": (o, n) => { (o as unknown as Goal).inprogressdecimal = n.getNumberValue(); },
            "inprogressinteger": (o, n) => { (o as unknown as Goal).inprogressinteger = n.getNumberValue(); },
            "inprogressmoney": (o, n) => { (o as unknown as Goal).inprogressmoney = n.getNumberValue(); },
            "inprogressmoney_base": (o, n) => { (o as unknown as Goal).inprogressmoney_base = n.getNumberValue(); },
            "inprogressstring": (o, n) => { (o as unknown as Goal).inprogressstring = n.getStringValue(); },
            "isamount": (o, n) => { (o as unknown as Goal).isamount = n.getBooleanValue(); },
            "isfiscalperiodgoal": (o, n) => { (o as unknown as Goal).isfiscalperiodgoal = n.getBooleanValue(); },
            "isoverridden": (o, n) => { (o as unknown as Goal).isoverridden = n.getBooleanValue(); },
            "isoverride": (o, n) => { (o as unknown as Goal).isoverride = n.getBooleanValue(); },
            "lastrolledupdate": (o, n) => { (o as unknown as Goal).lastrolledupdate = n.getDateValue(); },
            "metricid": (o, n) => { (o as unknown as Goal).metricid = n.getObjectValue<Metric>(createMetricFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Goal).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Goal).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Goal).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_goal_msdyn_forecastinstance": (o, n) => { (o as unknown as Goal).msdyn_goal_msdyn_forecastinstance = n.getCollectionOfObjectValues<Msdyn_forecastinstance>(createMsdyn_forecastinstanceFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Goal).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Goal).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Goal).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Goal).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Goal).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentgoalid": (o, n) => { (o as unknown as Goal).parentgoalid = n.getObjectValue<Goal>(createGoalFromDiscriminatorValue); },
            "percentage": (o, n) => { (o as unknown as Goal).percentage = n.getNumberValue(); },
            "rolluperrorcode": (o, n) => { (o as unknown as Goal).rolluperrorcode = n.getNumberValue(); },
            "rolluponlyfromchildgoals": (o, n) => { (o as unknown as Goal).rolluponlyfromchildgoals = n.getBooleanValue(); },
            "rollupqueryactualdecimalid": (o, n) => { (o as unknown as Goal).rollupqueryactualdecimalid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupqueryactualintegerid": (o, n) => { (o as unknown as Goal).rollupqueryactualintegerid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupqueryactualmoneyid": (o, n) => { (o as unknown as Goal).rollupqueryactualmoneyid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupquerycustomdecimalid": (o, n) => { (o as unknown as Goal).rollupquerycustomdecimalid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupquerycustomintegerid": (o, n) => { (o as unknown as Goal).rollupquerycustomintegerid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupquerycustommoneyid": (o, n) => { (o as unknown as Goal).rollupquerycustommoneyid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupqueryinprogressdecimalid": (o, n) => { (o as unknown as Goal).rollupqueryinprogressdecimalid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupqueryinprogressintegerid": (o, n) => { (o as unknown as Goal).rollupqueryinprogressintegerid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "rollupqueryinprogressmoneyid": (o, n) => { (o as unknown as Goal).rollupqueryinprogressmoneyid = n.getObjectValue<Goalrollupquery>(createGoalrollupqueryFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Goal).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Goal).statuscode = n.getNumberValue(); },
            "stretchtargetdecimal": (o, n) => { (o as unknown as Goal).stretchtargetdecimal = n.getNumberValue(); },
            "stretchtargetinteger": (o, n) => { (o as unknown as Goal).stretchtargetinteger = n.getNumberValue(); },
            "stretchtargetmoney": (o, n) => { (o as unknown as Goal).stretchtargetmoney = n.getNumberValue(); },
            "stretchtargetmoney_base": (o, n) => { (o as unknown as Goal).stretchtargetmoney_base = n.getNumberValue(); },
            "stretchtargetstring": (o, n) => { (o as unknown as Goal).stretchtargetstring = n.getStringValue(); },
            "targetdecimal": (o, n) => { (o as unknown as Goal).targetdecimal = n.getNumberValue(); },
            "targetinteger": (o, n) => { (o as unknown as Goal).targetinteger = n.getNumberValue(); },
            "targetmoney": (o, n) => { (o as unknown as Goal).targetmoney = n.getNumberValue(); },
            "targetmoney_base": (o, n) => { (o as unknown as Goal).targetmoney_base = n.getNumberValue(); },
            "targetstring": (o, n) => { (o as unknown as Goal).targetstring = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Goal).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Goal).title = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Goal).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "treeid": (o, n) => { (o as unknown as Goal).treeid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Goal).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Goal).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the goal_Annotation property value. 
     * @returns a annotation
     */
    public get goal_Annotation() {
        return this._goal_Annotation;
    };
    /**
     * Sets the goal_Annotation property value. 
     * @param value Value to set for the Goal_Annotation property.
     */
    public set goal_Annotation(value: Annotation[] | undefined) {
        this._goal_Annotation = value;
    };
    /**
     * Gets the goal_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get goal_AsyncOperations() {
        return this._goal_AsyncOperations;
    };
    /**
     * Sets the goal_AsyncOperations property value. 
     * @param value Value to set for the Goal_AsyncOperations property.
     */
    public set goal_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._goal_AsyncOperations = value;
    };
    /**
     * Gets the goal_connections1 property value. 
     * @returns a connection
     */
    public get goal_connections1() {
        return this._goal_connections1;
    };
    /**
     * Sets the goal_connections1 property value. 
     * @param value Value to set for the goal_connections1 property.
     */
    public set goal_connections1(value: Connection[] | undefined) {
        this._goal_connections1 = value;
    };
    /**
     * Gets the goal_connections2 property value. 
     * @returns a connection
     */
    public get goal_connections2() {
        return this._goal_connections2;
    };
    /**
     * Sets the goal_connections2 property value. 
     * @param value Value to set for the goal_connections2 property.
     */
    public set goal_connections2(value: Connection[] | undefined) {
        this._goal_connections2 = value;
    };
    /**
     * Gets the goal_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get goal_DuplicateBaseRecord() {
        return this._goal_DuplicateBaseRecord;
    };
    /**
     * Sets the goal_DuplicateBaseRecord property value. 
     * @param value Value to set for the Goal_DuplicateBaseRecord property.
     */
    public set goal_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._goal_DuplicateBaseRecord = value;
    };
    /**
     * Gets the goal_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get goal_DuplicateMatchingRecord() {
        return this._goal_DuplicateMatchingRecord;
    };
    /**
     * Sets the goal_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Goal_DuplicateMatchingRecord property.
     */
    public set goal_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._goal_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the goal_parent_goal property value. 
     * @returns a goal
     */
    public get goal_parent_goal() {
        return this._goal_parent_goal;
    };
    /**
     * Sets the goal_parent_goal property value. 
     * @param value Value to set for the goal_parent_goal property.
     */
    public set goal_parent_goal(value: Goal[] | undefined) {
        this._goal_parent_goal = value;
    };
    /**
     * Gets the goal_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get goal_principalobjectattributeaccess() {
        return this._goal_principalobjectattributeaccess;
    };
    /**
     * Sets the goal_principalobjectattributeaccess property value. 
     * @param value Value to set for the goal_principalobjectattributeaccess property.
     */
    public set goal_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._goal_principalobjectattributeaccess = value;
    };
    /**
     * Gets the goal_ProcessSessions property value. 
     * @returns a processsession
     */
    public get goal_ProcessSessions() {
        return this._goal_ProcessSessions;
    };
    /**
     * Sets the goal_ProcessSessions property value. 
     * @param value Value to set for the Goal_ProcessSessions property.
     */
    public set goal_ProcessSessions(value: Processsession[] | undefined) {
        this._goal_ProcessSessions = value;
    };
    /**
     * Gets the goal_RollupError_Goal property value. 
     * @returns a goal
     */
    public get goal_RollupError_Goal() {
        return this._goal_RollupError_Goal;
    };
    /**
     * Sets the goal_RollupError_Goal property value. 
     * @param value Value to set for the Goal_RollupError_Goal property.
     */
    public set goal_RollupError_Goal(value: Goal[] | undefined) {
        this._goal_RollupError_Goal = value;
    };
    /**
     * Gets the goal_SyncErrors property value. 
     * @returns a syncerror
     */
    public get goal_SyncErrors() {
        return this._goal_SyncErrors;
    };
    /**
     * Sets the goal_SyncErrors property value. 
     * @param value Value to set for the Goal_SyncErrors property.
     */
    public set goal_SyncErrors(value: Syncerror[] | undefined) {
        this._goal_SyncErrors = value;
    };
    /**
     * Gets the goalenddate property value. 
     * @returns a Date
     */
    public get goalenddate() {
        return this._goalenddate;
    };
    /**
     * Sets the goalenddate property value. 
     * @param value Value to set for the goalenddate property.
     */
    public set goalenddate(value: Date | undefined) {
        this._goalenddate = value;
    };
    /**
     * Gets the goalid property value. 
     * @returns a string
     */
    public get goalid() {
        return this._goalid;
    };
    /**
     * Sets the goalid property value. 
     * @param value Value to set for the goalid property.
     */
    public set goalid(value: string | undefined) {
        this._goalid = value;
    };
    /**
     * Gets the goalownerid_systemuser property value. 
     * @returns a systemuser
     */
    public get goalownerid_systemuser() {
        return this._goalownerid_systemuser;
    };
    /**
     * Sets the goalownerid_systemuser property value. 
     * @param value Value to set for the goalownerid_systemuser property.
     */
    public set goalownerid_systemuser(value: Systemuser | undefined) {
        this._goalownerid_systemuser = value;
    };
    /**
     * Gets the goalownerid_team property value. 
     * @returns a team
     */
    public get goalownerid_team() {
        return this._goalownerid_team;
    };
    /**
     * Sets the goalownerid_team property value. 
     * @param value Value to set for the goalownerid_team property.
     */
    public set goalownerid_team(value: Team | undefined) {
        this._goalownerid_team = value;
    };
    /**
     * Gets the goalstartdate property value. 
     * @returns a Date
     */
    public get goalstartdate() {
        return this._goalstartdate;
    };
    /**
     * Sets the goalstartdate property value. 
     * @param value Value to set for the goalstartdate property.
     */
    public set goalstartdate(value: Date | undefined) {
        this._goalstartdate = value;
    };
    /**
     * Gets the goalwitherrorid property value. 
     * @returns a goal
     */
    public get goalwitherrorid() {
        return this._goalwitherrorid;
    };
    /**
     * Sets the goalwitherrorid property value. 
     * @param value Value to set for the goalwitherrorid property.
     */
    public set goalwitherrorid(value: Goal | undefined) {
        this._goalwitherrorid = value;
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
     * Gets the inprogressdecimal property value. 
     * @returns a int64
     */
    public get inprogressdecimal() {
        return this._inprogressdecimal;
    };
    /**
     * Sets the inprogressdecimal property value. 
     * @param value Value to set for the inprogressdecimal property.
     */
    public set inprogressdecimal(value: number | undefined) {
        this._inprogressdecimal = value;
    };
    /**
     * Gets the inprogressinteger property value. 
     * @returns a integer
     */
    public get inprogressinteger() {
        return this._inprogressinteger;
    };
    /**
     * Sets the inprogressinteger property value. 
     * @param value Value to set for the inprogressinteger property.
     */
    public set inprogressinteger(value: number | undefined) {
        this._inprogressinteger = value;
    };
    /**
     * Gets the inprogressmoney property value. 
     * @returns a int64
     */
    public get inprogressmoney() {
        return this._inprogressmoney;
    };
    /**
     * Sets the inprogressmoney property value. 
     * @param value Value to set for the inprogressmoney property.
     */
    public set inprogressmoney(value: number | undefined) {
        this._inprogressmoney = value;
    };
    /**
     * Gets the inprogressmoney_base property value. 
     * @returns a int64
     */
    public get inprogressmoney_base() {
        return this._inprogressmoney_base;
    };
    /**
     * Sets the inprogressmoney_base property value. 
     * @param value Value to set for the inprogressmoney_base property.
     */
    public set inprogressmoney_base(value: number | undefined) {
        this._inprogressmoney_base = value;
    };
    /**
     * Gets the inprogressstring property value. 
     * @returns a string
     */
    public get inprogressstring() {
        return this._inprogressstring;
    };
    /**
     * Sets the inprogressstring property value. 
     * @param value Value to set for the inprogressstring property.
     */
    public set inprogressstring(value: string | undefined) {
        this._inprogressstring = value;
    };
    /**
     * Gets the isamount property value. 
     * @returns a boolean
     */
    public get isamount() {
        return this._isamount;
    };
    /**
     * Sets the isamount property value. 
     * @param value Value to set for the isamount property.
     */
    public set isamount(value: boolean | undefined) {
        this._isamount = value;
    };
    /**
     * Gets the isfiscalperiodgoal property value. 
     * @returns a boolean
     */
    public get isfiscalperiodgoal() {
        return this._isfiscalperiodgoal;
    };
    /**
     * Sets the isfiscalperiodgoal property value. 
     * @param value Value to set for the isfiscalperiodgoal property.
     */
    public set isfiscalperiodgoal(value: boolean | undefined) {
        this._isfiscalperiodgoal = value;
    };
    /**
     * Gets the isoverridden property value. 
     * @returns a boolean
     */
    public get isoverridden() {
        return this._isoverridden;
    };
    /**
     * Sets the isoverridden property value. 
     * @param value Value to set for the isoverridden property.
     */
    public set isoverridden(value: boolean | undefined) {
        this._isoverridden = value;
    };
    /**
     * Gets the isoverride property value. 
     * @returns a boolean
     */
    public get isoverride() {
        return this._isoverride;
    };
    /**
     * Sets the isoverride property value. 
     * @param value Value to set for the isoverride property.
     */
    public set isoverride(value: boolean | undefined) {
        this._isoverride = value;
    };
    /**
     * Gets the lastrolledupdate property value. 
     * @returns a Date
     */
    public get lastrolledupdate() {
        return this._lastrolledupdate;
    };
    /**
     * Sets the lastrolledupdate property value. 
     * @param value Value to set for the lastrolledupdate property.
     */
    public set lastrolledupdate(value: Date | undefined) {
        this._lastrolledupdate = value;
    };
    /**
     * Gets the metricid property value. 
     * @returns a metric
     */
    public get metricid() {
        return this._metricid;
    };
    /**
     * Sets the metricid property value. 
     * @param value Value to set for the metricid property.
     */
    public set metricid(value: Metric | undefined) {
        this._metricid = value;
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
     * Gets the msdyn_goal_msdyn_forecastinstance property value. 
     * @returns a msdyn_forecastinstance
     */
    public get msdyn_goal_msdyn_forecastinstance() {
        return this._msdyn_goal_msdyn_forecastinstance;
    };
    /**
     * Sets the msdyn_goal_msdyn_forecastinstance property value. 
     * @param value Value to set for the msdyn_goal_msdyn_forecastinstance property.
     */
    public set msdyn_goal_msdyn_forecastinstance(value: Msdyn_forecastinstance[] | undefined) {
        this._msdyn_goal_msdyn_forecastinstance = value;
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
     * Gets the parentgoalid property value. 
     * @returns a goal
     */
    public get parentgoalid() {
        return this._parentgoalid;
    };
    /**
     * Sets the parentgoalid property value. 
     * @param value Value to set for the parentgoalid property.
     */
    public set parentgoalid(value: Goal | undefined) {
        this._parentgoalid = value;
    };
    /**
     * Gets the percentage property value. 
     * @returns a int64
     */
    public get percentage() {
        return this._percentage;
    };
    /**
     * Sets the percentage property value. 
     * @param value Value to set for the percentage property.
     */
    public set percentage(value: number | undefined) {
        this._percentage = value;
    };
    /**
     * Gets the rolluperrorcode property value. 
     * @returns a integer
     */
    public get rolluperrorcode() {
        return this._rolluperrorcode;
    };
    /**
     * Sets the rolluperrorcode property value. 
     * @param value Value to set for the rolluperrorcode property.
     */
    public set rolluperrorcode(value: number | undefined) {
        this._rolluperrorcode = value;
    };
    /**
     * Gets the rolluponlyfromchildgoals property value. 
     * @returns a boolean
     */
    public get rolluponlyfromchildgoals() {
        return this._rolluponlyfromchildgoals;
    };
    /**
     * Sets the rolluponlyfromchildgoals property value. 
     * @param value Value to set for the rolluponlyfromchildgoals property.
     */
    public set rolluponlyfromchildgoals(value: boolean | undefined) {
        this._rolluponlyfromchildgoals = value;
    };
    /**
     * Gets the rollupqueryactualdecimalid property value. 
     * @returns a goalrollupquery
     */
    public get rollupqueryactualdecimalid() {
        return this._rollupqueryactualdecimalid;
    };
    /**
     * Sets the rollupqueryactualdecimalid property value. 
     * @param value Value to set for the rollupqueryactualdecimalid property.
     */
    public set rollupqueryactualdecimalid(value: Goalrollupquery | undefined) {
        this._rollupqueryactualdecimalid = value;
    };
    /**
     * Gets the rollupqueryactualintegerid property value. 
     * @returns a goalrollupquery
     */
    public get rollupqueryactualintegerid() {
        return this._rollupqueryactualintegerid;
    };
    /**
     * Sets the rollupqueryactualintegerid property value. 
     * @param value Value to set for the rollupqueryactualintegerid property.
     */
    public set rollupqueryactualintegerid(value: Goalrollupquery | undefined) {
        this._rollupqueryactualintegerid = value;
    };
    /**
     * Gets the rollupqueryactualmoneyid property value. 
     * @returns a goalrollupquery
     */
    public get rollupqueryactualmoneyid() {
        return this._rollupqueryactualmoneyid;
    };
    /**
     * Sets the rollupqueryactualmoneyid property value. 
     * @param value Value to set for the rollupqueryactualmoneyid property.
     */
    public set rollupqueryactualmoneyid(value: Goalrollupquery | undefined) {
        this._rollupqueryactualmoneyid = value;
    };
    /**
     * Gets the rollupquerycustomdecimalid property value. 
     * @returns a goalrollupquery
     */
    public get rollupquerycustomdecimalid() {
        return this._rollupquerycustomdecimalid;
    };
    /**
     * Sets the rollupquerycustomdecimalid property value. 
     * @param value Value to set for the rollupquerycustomdecimalid property.
     */
    public set rollupquerycustomdecimalid(value: Goalrollupquery | undefined) {
        this._rollupquerycustomdecimalid = value;
    };
    /**
     * Gets the rollupquerycustomintegerid property value. 
     * @returns a goalrollupquery
     */
    public get rollupquerycustomintegerid() {
        return this._rollupquerycustomintegerid;
    };
    /**
     * Sets the rollupquerycustomintegerid property value. 
     * @param value Value to set for the rollupquerycustomintegerid property.
     */
    public set rollupquerycustomintegerid(value: Goalrollupquery | undefined) {
        this._rollupquerycustomintegerid = value;
    };
    /**
     * Gets the rollupquerycustommoneyid property value. 
     * @returns a goalrollupquery
     */
    public get rollupquerycustommoneyid() {
        return this._rollupquerycustommoneyid;
    };
    /**
     * Sets the rollupquerycustommoneyid property value. 
     * @param value Value to set for the rollupquerycustommoneyid property.
     */
    public set rollupquerycustommoneyid(value: Goalrollupquery | undefined) {
        this._rollupquerycustommoneyid = value;
    };
    /**
     * Gets the rollupqueryinprogressdecimalid property value. 
     * @returns a goalrollupquery
     */
    public get rollupqueryinprogressdecimalid() {
        return this._rollupqueryinprogressdecimalid;
    };
    /**
     * Sets the rollupqueryinprogressdecimalid property value. 
     * @param value Value to set for the rollupqueryinprogressdecimalid property.
     */
    public set rollupqueryinprogressdecimalid(value: Goalrollupquery | undefined) {
        this._rollupqueryinprogressdecimalid = value;
    };
    /**
     * Gets the rollupqueryinprogressintegerid property value. 
     * @returns a goalrollupquery
     */
    public get rollupqueryinprogressintegerid() {
        return this._rollupqueryinprogressintegerid;
    };
    /**
     * Sets the rollupqueryinprogressintegerid property value. 
     * @param value Value to set for the rollupqueryinprogressintegerid property.
     */
    public set rollupqueryinprogressintegerid(value: Goalrollupquery | undefined) {
        this._rollupqueryinprogressintegerid = value;
    };
    /**
     * Gets the rollupqueryinprogressmoneyid property value. 
     * @returns a goalrollupquery
     */
    public get rollupqueryinprogressmoneyid() {
        return this._rollupqueryinprogressmoneyid;
    };
    /**
     * Sets the rollupqueryinprogressmoneyid property value. 
     * @param value Value to set for the rollupqueryinprogressmoneyid property.
     */
    public set rollupqueryinprogressmoneyid(value: Goalrollupquery | undefined) {
        this._rollupqueryinprogressmoneyid = value;
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
        writer.writeStringValue("_goalownerid_value", this._goalownerid_value);
        writer.writeStringValue("_goalwitherrorid_value", this._goalwitherrorid_value);
        writer.writeStringValue("_metricid_value", this._metricid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentgoalid_value", this._parentgoalid_value);
        writer.writeStringValue("_rollupqueryactualdecimalid_value", this._rollupqueryactualdecimalid_value);
        writer.writeStringValue("_rollupqueryactualintegerid_value", this._rollupqueryactualintegerid_value);
        writer.writeStringValue("_rollupqueryactualmoneyid_value", this._rollupqueryactualmoneyid_value);
        writer.writeStringValue("_rollupquerycustomdecimalid_value", this._rollupquerycustomdecimalid_value);
        writer.writeStringValue("_rollupquerycustomintegerid_value", this._rollupquerycustomintegerid_value);
        writer.writeStringValue("_rollupquerycustommoneyid_value", this._rollupquerycustommoneyid_value);
        writer.writeStringValue("_rollupqueryinprogressdecimalid_value", this._rollupqueryinprogressdecimalid_value);
        writer.writeStringValue("_rollupqueryinprogressintegerid_value", this._rollupqueryinprogressintegerid_value);
        writer.writeStringValue("_rollupqueryinprogressmoneyid_value", this._rollupqueryinprogressmoneyid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("actualdecimal", this.actualdecimal);
        writer.writeNumberValue("actualinteger", this.actualinteger);
        writer.writeNumberValue("actualmoney", this.actualmoney);
        writer.writeNumberValue("actualmoney_base", this.actualmoney_base);
        writer.writeStringValue("actualstring", this.actualstring);
        writer.writeNumberValue("amountdatatype", this.amountdatatype);
        writer.writeNumberValue("computedtargetasoftodaydecimal", this.computedtargetasoftodaydecimal);
        writer.writeNumberValue("computedtargetasoftodayinteger", this.computedtargetasoftodayinteger);
        writer.writeNumberValue("computedtargetasoftodaymoney", this.computedtargetasoftodaymoney);
        writer.writeNumberValue("computedtargetasoftodaymoney_base", this.computedtargetasoftodaymoney_base);
        writer.writeNumberValue("computedtargetasoftodaypercentageachieved", this.computedtargetasoftodaypercentageachieved);
        writer.writeBooleanValue("consideronlygoalownersrecords", this.consideronlygoalownersrecords);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("customrollupfielddecimal", this.customrollupfielddecimal);
        writer.writeNumberValue("customrollupfieldinteger", this.customrollupfieldinteger);
        writer.writeNumberValue("customrollupfieldmoney", this.customrollupfieldmoney);
        writer.writeNumberValue("customrollupfieldmoney_base", this.customrollupfieldmoney_base);
        writer.writeStringValue("customrollupfieldstring", this.customrollupfieldstring);
        writer.writeNumberValue("depth", this.depth);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("fiscalperiod", this.fiscalperiod);
        writer.writeNumberValue("fiscalyear", this.fiscalyear);
        writer.writeCollectionOfObjectValues<Annotation>("goal_Annotation", this.goal_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("goal_AsyncOperations", this.goal_AsyncOperations);
        writer.writeCollectionOfObjectValues<Connection>("goal_connections1", this.goal_connections1);
        writer.writeCollectionOfObjectValues<Connection>("goal_connections2", this.goal_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("goal_DuplicateBaseRecord", this.goal_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("goal_DuplicateMatchingRecord", this.goal_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Goal>("goal_parent_goal", this.goal_parent_goal);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("goal_principalobjectattributeaccess", this.goal_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("goal_ProcessSessions", this.goal_ProcessSessions);
        writer.writeCollectionOfObjectValues<Goal>("goal_RollupError_Goal", this.goal_RollupError_Goal);
        writer.writeCollectionOfObjectValues<Syncerror>("goal_SyncErrors", this.goal_SyncErrors);
        writer.writeDateValue("goalenddate", this.goalenddate);
        writer.writeStringValue("goalid", this.goalid);
        writer.writeObjectValue<Systemuser>("goalownerid_systemuser", this.goalownerid_systemuser);
        writer.writeObjectValue<Team>("goalownerid_team", this.goalownerid_team);
        writer.writeDateValue("goalstartdate", this.goalstartdate);
        writer.writeObjectValue<Goal>("goalwitherrorid", this.goalwitherrorid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("inprogressdecimal", this.inprogressdecimal);
        writer.writeNumberValue("inprogressinteger", this.inprogressinteger);
        writer.writeNumberValue("inprogressmoney", this.inprogressmoney);
        writer.writeNumberValue("inprogressmoney_base", this.inprogressmoney_base);
        writer.writeStringValue("inprogressstring", this.inprogressstring);
        writer.writeBooleanValue("isamount", this.isamount);
        writer.writeBooleanValue("isfiscalperiodgoal", this.isfiscalperiodgoal);
        writer.writeBooleanValue("isoverridden", this.isoverridden);
        writer.writeBooleanValue("isoverride", this.isoverride);
        writer.writeDateValue("lastrolledupdate", this.lastrolledupdate);
        writer.writeObjectValue<Metric>("metricid", this.metricid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_forecastinstance>("msdyn_goal_msdyn_forecastinstance", this.msdyn_goal_msdyn_forecastinstance);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Goal>("parentgoalid", this.parentgoalid);
        writer.writeNumberValue("percentage", this.percentage);
        writer.writeNumberValue("rolluperrorcode", this.rolluperrorcode);
        writer.writeBooleanValue("rolluponlyfromchildgoals", this.rolluponlyfromchildgoals);
        writer.writeObjectValue<Goalrollupquery>("rollupqueryactualdecimalid", this.rollupqueryactualdecimalid);
        writer.writeObjectValue<Goalrollupquery>("rollupqueryactualintegerid", this.rollupqueryactualintegerid);
        writer.writeObjectValue<Goalrollupquery>("rollupqueryactualmoneyid", this.rollupqueryactualmoneyid);
        writer.writeObjectValue<Goalrollupquery>("rollupquerycustomdecimalid", this.rollupquerycustomdecimalid);
        writer.writeObjectValue<Goalrollupquery>("rollupquerycustomintegerid", this.rollupquerycustomintegerid);
        writer.writeObjectValue<Goalrollupquery>("rollupquerycustommoneyid", this.rollupquerycustommoneyid);
        writer.writeObjectValue<Goalrollupquery>("rollupqueryinprogressdecimalid", this.rollupqueryinprogressdecimalid);
        writer.writeObjectValue<Goalrollupquery>("rollupqueryinprogressintegerid", this.rollupqueryinprogressintegerid);
        writer.writeObjectValue<Goalrollupquery>("rollupqueryinprogressmoneyid", this.rollupqueryinprogressmoneyid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("stretchtargetdecimal", this.stretchtargetdecimal);
        writer.writeNumberValue("stretchtargetinteger", this.stretchtargetinteger);
        writer.writeNumberValue("stretchtargetmoney", this.stretchtargetmoney);
        writer.writeNumberValue("stretchtargetmoney_base", this.stretchtargetmoney_base);
        writer.writeStringValue("stretchtargetstring", this.stretchtargetstring);
        writer.writeNumberValue("targetdecimal", this.targetdecimal);
        writer.writeNumberValue("targetinteger", this.targetinteger);
        writer.writeNumberValue("targetmoney", this.targetmoney);
        writer.writeNumberValue("targetmoney_base", this.targetmoney_base);
        writer.writeStringValue("targetstring", this.targetstring);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("treeid", this.treeid);
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
     * Gets the stretchtargetdecimal property value. 
     * @returns a int64
     */
    public get stretchtargetdecimal() {
        return this._stretchtargetdecimal;
    };
    /**
     * Sets the stretchtargetdecimal property value. 
     * @param value Value to set for the stretchtargetdecimal property.
     */
    public set stretchtargetdecimal(value: number | undefined) {
        this._stretchtargetdecimal = value;
    };
    /**
     * Gets the stretchtargetinteger property value. 
     * @returns a integer
     */
    public get stretchtargetinteger() {
        return this._stretchtargetinteger;
    };
    /**
     * Sets the stretchtargetinteger property value. 
     * @param value Value to set for the stretchtargetinteger property.
     */
    public set stretchtargetinteger(value: number | undefined) {
        this._stretchtargetinteger = value;
    };
    /**
     * Gets the stretchtargetmoney property value. 
     * @returns a int64
     */
    public get stretchtargetmoney() {
        return this._stretchtargetmoney;
    };
    /**
     * Sets the stretchtargetmoney property value. 
     * @param value Value to set for the stretchtargetmoney property.
     */
    public set stretchtargetmoney(value: number | undefined) {
        this._stretchtargetmoney = value;
    };
    /**
     * Gets the stretchtargetmoney_base property value. 
     * @returns a int64
     */
    public get stretchtargetmoney_base() {
        return this._stretchtargetmoney_base;
    };
    /**
     * Sets the stretchtargetmoney_base property value. 
     * @param value Value to set for the stretchtargetmoney_base property.
     */
    public set stretchtargetmoney_base(value: number | undefined) {
        this._stretchtargetmoney_base = value;
    };
    /**
     * Gets the stretchtargetstring property value. 
     * @returns a string
     */
    public get stretchtargetstring() {
        return this._stretchtargetstring;
    };
    /**
     * Sets the stretchtargetstring property value. 
     * @param value Value to set for the stretchtargetstring property.
     */
    public set stretchtargetstring(value: string | undefined) {
        this._stretchtargetstring = value;
    };
    /**
     * Gets the targetdecimal property value. 
     * @returns a int64
     */
    public get targetdecimal() {
        return this._targetdecimal;
    };
    /**
     * Sets the targetdecimal property value. 
     * @param value Value to set for the targetdecimal property.
     */
    public set targetdecimal(value: number | undefined) {
        this._targetdecimal = value;
    };
    /**
     * Gets the targetinteger property value. 
     * @returns a integer
     */
    public get targetinteger() {
        return this._targetinteger;
    };
    /**
     * Sets the targetinteger property value. 
     * @param value Value to set for the targetinteger property.
     */
    public set targetinteger(value: number | undefined) {
        this._targetinteger = value;
    };
    /**
     * Gets the targetmoney property value. 
     * @returns a int64
     */
    public get targetmoney() {
        return this._targetmoney;
    };
    /**
     * Sets the targetmoney property value. 
     * @param value Value to set for the targetmoney property.
     */
    public set targetmoney(value: number | undefined) {
        this._targetmoney = value;
    };
    /**
     * Gets the targetmoney_base property value. 
     * @returns a int64
     */
    public get targetmoney_base() {
        return this._targetmoney_base;
    };
    /**
     * Sets the targetmoney_base property value. 
     * @param value Value to set for the targetmoney_base property.
     */
    public set targetmoney_base(value: number | undefined) {
        this._targetmoney_base = value;
    };
    /**
     * Gets the targetstring property value. 
     * @returns a string
     */
    public get targetstring() {
        return this._targetstring;
    };
    /**
     * Sets the targetstring property value. 
     * @param value Value to set for the targetstring property.
     */
    public set targetstring(value: string | undefined) {
        this._targetstring = value;
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
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the treeid property value. 
     * @returns a string
     */
    public get treeid() {
        return this._treeid;
    };
    /**
     * Sets the treeid property value. 
     * @param value Value to set for the treeid property.
     */
    public set treeid(value: string | undefined) {
        this._treeid = value;
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
