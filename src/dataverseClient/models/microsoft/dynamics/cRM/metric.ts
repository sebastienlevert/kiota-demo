import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createGoalFromDiscriminatorValue} from './createGoalFromDiscriminatorValue';
import {createMsdyn_forecastdefinitionFromDiscriminatorValue} from './createMsdyn_forecastdefinitionFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRollupfieldFromDiscriminatorValue} from './createRollupfieldFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Crmbaseentity, Goal, Msdyn_forecastdefinition, Organization, Processsession, Rollupfield, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Metric extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _amountdatatype?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _isamount?: boolean | undefined;
    private _isstretchtracked?: boolean | undefined;
    private _metric_AsyncOperations?: Asyncoperation[] | undefined;
    private _metric_goal?: Goal[] | undefined;
    private _metric_ProcessSessions?: Processsession[] | undefined;
    private _metric_rollupfield?: Rollupfield[] | undefined;
    private _metric_SyncErrors?: Syncerror[] | undefined;
    private _metricid?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_metric_msdyn_forecastdefinition_metricid?: Msdyn_forecastdefinition[] | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
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
     * Instantiates a new metric and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Metric)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Metric)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Metric)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Metric)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Metric)._organizationid_value = n.getStringValue(); },
            "amountdatatype": (o, n) => { (o as unknown as Metric).amountdatatype = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Metric).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Metric).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Metric).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Metric).description = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Metric).importsequencenumber = n.getNumberValue(); },
            "isamount": (o, n) => { (o as unknown as Metric).isamount = n.getBooleanValue(); },
            "isstretchtracked": (o, n) => { (o as unknown as Metric).isstretchtracked = n.getBooleanValue(); },
            "metric_AsyncOperations": (o, n) => { (o as unknown as Metric).metric_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "metric_goal": (o, n) => { (o as unknown as Metric).metric_goal = n.getCollectionOfObjectValues<Goal>(createGoalFromDiscriminatorValue); },
            "metric_ProcessSessions": (o, n) => { (o as unknown as Metric).metric_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "metric_rollupfield": (o, n) => { (o as unknown as Metric).metric_rollupfield = n.getCollectionOfObjectValues<Rollupfield>(createRollupfieldFromDiscriminatorValue); },
            "metric_SyncErrors": (o, n) => { (o as unknown as Metric).metric_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "metricid": (o, n) => { (o as unknown as Metric).metricid = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Metric).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Metric).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Metric).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_metric_msdyn_forecastdefinition_metricid": (o, n) => { (o as unknown as Metric).msdyn_metric_msdyn_forecastdefinition_metricid = n.getCollectionOfObjectValues<Msdyn_forecastdefinition>(createMsdyn_forecastdefinitionFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Metric).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Metric).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Metric).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Metric).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Metric).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Metric).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Metric).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Metric).versionnumber = n.getNumberValue(); },
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
     * Gets the isstretchtracked property value. 
     * @returns a boolean
     */
    public get isstretchtracked() {
        return this._isstretchtracked;
    };
    /**
     * Sets the isstretchtracked property value. 
     * @param value Value to set for the isstretchtracked property.
     */
    public set isstretchtracked(value: boolean | undefined) {
        this._isstretchtracked = value;
    };
    /**
     * Gets the metric_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get metric_AsyncOperations() {
        return this._metric_AsyncOperations;
    };
    /**
     * Sets the metric_AsyncOperations property value. 
     * @param value Value to set for the metric_AsyncOperations property.
     */
    public set metric_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._metric_AsyncOperations = value;
    };
    /**
     * Gets the metric_goal property value. 
     * @returns a goal
     */
    public get metric_goal() {
        return this._metric_goal;
    };
    /**
     * Sets the metric_goal property value. 
     * @param value Value to set for the metric_goal property.
     */
    public set metric_goal(value: Goal[] | undefined) {
        this._metric_goal = value;
    };
    /**
     * Gets the metric_ProcessSessions property value. 
     * @returns a processsession
     */
    public get metric_ProcessSessions() {
        return this._metric_ProcessSessions;
    };
    /**
     * Sets the metric_ProcessSessions property value. 
     * @param value Value to set for the metric_ProcessSessions property.
     */
    public set metric_ProcessSessions(value: Processsession[] | undefined) {
        this._metric_ProcessSessions = value;
    };
    /**
     * Gets the metric_rollupfield property value. 
     * @returns a rollupfield
     */
    public get metric_rollupfield() {
        return this._metric_rollupfield;
    };
    /**
     * Sets the metric_rollupfield property value. 
     * @param value Value to set for the metric_rollupfield property.
     */
    public set metric_rollupfield(value: Rollupfield[] | undefined) {
        this._metric_rollupfield = value;
    };
    /**
     * Gets the metric_SyncErrors property value. 
     * @returns a syncerror
     */
    public get metric_SyncErrors() {
        return this._metric_SyncErrors;
    };
    /**
     * Sets the metric_SyncErrors property value. 
     * @param value Value to set for the Metric_SyncErrors property.
     */
    public set metric_SyncErrors(value: Syncerror[] | undefined) {
        this._metric_SyncErrors = value;
    };
    /**
     * Gets the metricid property value. 
     * @returns a string
     */
    public get metricid() {
        return this._metricid;
    };
    /**
     * Sets the metricid property value. 
     * @param value Value to set for the metricid property.
     */
    public set metricid(value: string | undefined) {
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
     * Gets the msdyn_metric_msdyn_forecastdefinition_metricid property value. 
     * @returns a msdyn_forecastdefinition
     */
    public get msdyn_metric_msdyn_forecastdefinition_metricid() {
        return this._msdyn_metric_msdyn_forecastdefinition_metricid;
    };
    /**
     * Sets the msdyn_metric_msdyn_forecastdefinition_metricid property value. 
     * @param value Value to set for the msdyn_metric_msdyn_forecastdefinition_metricid property.
     */
    public set msdyn_metric_msdyn_forecastdefinition_metricid(value: Msdyn_forecastdefinition[] | undefined) {
        this._msdyn_metric_msdyn_forecastdefinition_metricid = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("amountdatatype", this.amountdatatype);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isamount", this.isamount);
        writer.writeBooleanValue("isstretchtracked", this.isstretchtracked);
        writer.writeCollectionOfObjectValues<Asyncoperation>("metric_AsyncOperations", this.metric_AsyncOperations);
        writer.writeCollectionOfObjectValues<Goal>("metric_goal", this.metric_goal);
        writer.writeCollectionOfObjectValues<Processsession>("metric_ProcessSessions", this.metric_ProcessSessions);
        writer.writeCollectionOfObjectValues<Rollupfield>("metric_rollupfield", this.metric_rollupfield);
        writer.writeCollectionOfObjectValues<Syncerror>("metric_SyncErrors", this.metric_SyncErrors);
        writer.writeStringValue("metricid", this.metricid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_forecastdefinition>("msdyn_metric_msdyn_forecastdefinition_metricid", this.msdyn_metric_msdyn_forecastdefinition_metricid);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
