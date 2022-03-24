import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createMetricFromDiscriminatorValue} from './createMetricFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Crmbaseentity, Metric, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Rollupfield extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __metricid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dateattribute?: string | undefined;
    private _entityfordateattribute?: string | undefined;
    private _goalattribute?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _isstateparententityattribute?: boolean | undefined;
    private _metricid?: Metric | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _rollupfield_AsyncOperations?: Asyncoperation[] | undefined;
    private _rollupfield_ProcessSessions?: Processsession[] | undefined;
    private _rollupField_SyncErrors?: Syncerror[] | undefined;
    private _rollupfieldid?: string | undefined;
    private _sourceattribute?: string | undefined;
    private _sourceentity?: string | undefined;
    private _sourcestate?: number | undefined;
    private _sourcestatus?: number | undefined;
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
     * Instantiates a new rollupfield and sets the default values.
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
     * Gets the dateattribute property value. 
     * @returns a string
     */
    public get dateattribute() {
        return this._dateattribute;
    };
    /**
     * Sets the dateattribute property value. 
     * @param value Value to set for the dateattribute property.
     */
    public set dateattribute(value: string | undefined) {
        this._dateattribute = value;
    };
    /**
     * Gets the entityfordateattribute property value. 
     * @returns a string
     */
    public get entityfordateattribute() {
        return this._entityfordateattribute;
    };
    /**
     * Sets the entityfordateattribute property value. 
     * @param value Value to set for the entityfordateattribute property.
     */
    public set entityfordateattribute(value: string | undefined) {
        this._entityfordateattribute = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Rollupfield)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Rollupfield)._createdonbehalfby_value = n.getStringValue(); },
            "_metricid_value": (o, n) => { (o as unknown as Rollupfield)._metricid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Rollupfield)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Rollupfield)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Rollupfield)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Rollupfield).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Rollupfield).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Rollupfield).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dateattribute": (o, n) => { (o as unknown as Rollupfield).dateattribute = n.getStringValue(); },
            "entityfordateattribute": (o, n) => { (o as unknown as Rollupfield).entityfordateattribute = n.getStringValue(); },
            "goalattribute": (o, n) => { (o as unknown as Rollupfield).goalattribute = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Rollupfield).importsequencenumber = n.getNumberValue(); },
            "isstateparententityattribute": (o, n) => { (o as unknown as Rollupfield).isstateparententityattribute = n.getBooleanValue(); },
            "metricid": (o, n) => { (o as unknown as Rollupfield).metricid = n.getObjectValue<Metric>(createMetricFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Rollupfield).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Rollupfield).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Rollupfield).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "rollupfield_AsyncOperations": (o, n) => { (o as unknown as Rollupfield).rollupfield_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "rollupfield_ProcessSessions": (o, n) => { (o as unknown as Rollupfield).rollupfield_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "rollupField_SyncErrors": (o, n) => { (o as unknown as Rollupfield).rollupField_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "rollupfieldid": (o, n) => { (o as unknown as Rollupfield).rollupfieldid = n.getStringValue(); },
            "sourceattribute": (o, n) => { (o as unknown as Rollupfield).sourceattribute = n.getStringValue(); },
            "sourceentity": (o, n) => { (o as unknown as Rollupfield).sourceentity = n.getStringValue(); },
            "sourcestate": (o, n) => { (o as unknown as Rollupfield).sourcestate = n.getNumberValue(); },
            "sourcestatus": (o, n) => { (o as unknown as Rollupfield).sourcestatus = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Rollupfield).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Rollupfield).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Rollupfield).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the goalattribute property value. 
     * @returns a string
     */
    public get goalattribute() {
        return this._goalattribute;
    };
    /**
     * Sets the goalattribute property value. 
     * @param value Value to set for the goalattribute property.
     */
    public set goalattribute(value: string | undefined) {
        this._goalattribute = value;
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
     * Gets the isstateparententityattribute property value. 
     * @returns a boolean
     */
    public get isstateparententityattribute() {
        return this._isstateparententityattribute;
    };
    /**
     * Sets the isstateparententityattribute property value. 
     * @param value Value to set for the isstateparententityattribute property.
     */
    public set isstateparententityattribute(value: boolean | undefined) {
        this._isstateparententityattribute = value;
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
     * Gets the rollupfield_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get rollupfield_AsyncOperations() {
        return this._rollupfield_AsyncOperations;
    };
    /**
     * Sets the rollupfield_AsyncOperations property value. 
     * @param value Value to set for the rollupfield_AsyncOperations property.
     */
    public set rollupfield_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._rollupfield_AsyncOperations = value;
    };
    /**
     * Gets the rollupfield_ProcessSessions property value. 
     * @returns a processsession
     */
    public get rollupfield_ProcessSessions() {
        return this._rollupfield_ProcessSessions;
    };
    /**
     * Sets the rollupfield_ProcessSessions property value. 
     * @param value Value to set for the rollupfield_ProcessSessions property.
     */
    public set rollupfield_ProcessSessions(value: Processsession[] | undefined) {
        this._rollupfield_ProcessSessions = value;
    };
    /**
     * Gets the rollupField_SyncErrors property value. 
     * @returns a syncerror
     */
    public get rollupField_SyncErrors() {
        return this._rollupField_SyncErrors;
    };
    /**
     * Sets the rollupField_SyncErrors property value. 
     * @param value Value to set for the RollupField_SyncErrors property.
     */
    public set rollupField_SyncErrors(value: Syncerror[] | undefined) {
        this._rollupField_SyncErrors = value;
    };
    /**
     * Gets the rollupfieldid property value. 
     * @returns a string
     */
    public get rollupfieldid() {
        return this._rollupfieldid;
    };
    /**
     * Sets the rollupfieldid property value. 
     * @param value Value to set for the rollupfieldid property.
     */
    public set rollupfieldid(value: string | undefined) {
        this._rollupfieldid = value;
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
        writer.writeStringValue("_metricid_value", this._metricid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("dateattribute", this.dateattribute);
        writer.writeStringValue("entityfordateattribute", this.entityfordateattribute);
        writer.writeStringValue("goalattribute", this.goalattribute);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isstateparententityattribute", this.isstateparententityattribute);
        writer.writeObjectValue<Metric>("metricid", this.metricid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("rollupfield_AsyncOperations", this.rollupfield_AsyncOperations);
        writer.writeCollectionOfObjectValues<Processsession>("rollupfield_ProcessSessions", this.rollupfield_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("rollupField_SyncErrors", this.rollupField_SyncErrors);
        writer.writeStringValue("rollupfieldid", this.rollupfieldid);
        writer.writeStringValue("sourceattribute", this.sourceattribute);
        writer.writeStringValue("sourceentity", this.sourceentity);
        writer.writeNumberValue("sourcestate", this.sourcestate);
        writer.writeNumberValue("sourcestatus", this.sourcestatus);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the sourceattribute property value. 
     * @returns a string
     */
    public get sourceattribute() {
        return this._sourceattribute;
    };
    /**
     * Sets the sourceattribute property value. 
     * @param value Value to set for the sourceattribute property.
     */
    public set sourceattribute(value: string | undefined) {
        this._sourceattribute = value;
    };
    /**
     * Gets the sourceentity property value. 
     * @returns a string
     */
    public get sourceentity() {
        return this._sourceentity;
    };
    /**
     * Sets the sourceentity property value. 
     * @param value Value to set for the sourceentity property.
     */
    public set sourceentity(value: string | undefined) {
        this._sourceentity = value;
    };
    /**
     * Gets the sourcestate property value. 
     * @returns a integer
     */
    public get sourcestate() {
        return this._sourcestate;
    };
    /**
     * Sets the sourcestate property value. 
     * @param value Value to set for the sourcestate property.
     */
    public set sourcestate(value: number | undefined) {
        this._sourcestate = value;
    };
    /**
     * Gets the sourcestatus property value. 
     * @returns a integer
     */
    public get sourcestatus() {
        return this._sourcestatus;
    };
    /**
     * Sets the sourcestatus property value. 
     * @param value Value to set for the sourcestatus property.
     */
    public set sourcestatus(value: number | undefined) {
        this._sourcestatus = value;
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
