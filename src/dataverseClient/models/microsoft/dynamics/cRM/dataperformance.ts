import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {Crmbaseentity, Organization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Dataperformance extends Crmbaseentity implements Parsable {
    private __organizationid_value?: string | undefined;
    private _anyoptimizationapplied?: boolean | undefined;
    private _anyoptimizationavailable?: boolean | undefined;
    private _component?: string | undefined;
    private _count?: number | undefined;
    private _dataperformanceid?: string | undefined;
    private _entity?: string | undefined;
    private _estimatedoptimizationimpact?: number | undefined;
    private _executionperiod?: string | undefined;
    private _lastactionresult?: string | undefined;
    private _lastoptimizationdate?: Date | undefined;
    private _maxtime?: number | undefined;
    private _mediantime?: number | undefined;
    private _mintime?: number | undefined;
    private _operation?: string | undefined;
    private _optimizationstatus?: string | undefined;
    private _optimizationstorage?: number | undefined;
    private _organizationid?: Organization | undefined;
    private _realizedoptimizationimpact?: string | undefined;
    private _solution?: string | undefined;
    private _weight?: number | undefined;
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
     * Gets the anyoptimizationapplied property value. 
     * @returns a boolean
     */
    public get anyoptimizationapplied() {
        return this._anyoptimizationapplied;
    };
    /**
     * Sets the anyoptimizationapplied property value. 
     * @param value Value to set for the anyoptimizationapplied property.
     */
    public set anyoptimizationapplied(value: boolean | undefined) {
        this._anyoptimizationapplied = value;
    };
    /**
     * Gets the anyoptimizationavailable property value. 
     * @returns a boolean
     */
    public get anyoptimizationavailable() {
        return this._anyoptimizationavailable;
    };
    /**
     * Sets the anyoptimizationavailable property value. 
     * @param value Value to set for the anyoptimizationavailable property.
     */
    public set anyoptimizationavailable(value: boolean | undefined) {
        this._anyoptimizationavailable = value;
    };
    /**
     * Gets the component property value. 
     * @returns a string
     */
    public get component() {
        return this._component;
    };
    /**
     * Sets the component property value. 
     * @param value Value to set for the component property.
     */
    public set component(value: string | undefined) {
        this._component = value;
    };
    /**
     * Instantiates a new dataperformance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the count property value. 
     * @returns a integer
     */
    public get count() {
        return this._count;
    };
    /**
     * Sets the count property value. 
     * @param value Value to set for the count property.
     */
    public set count(value: number | undefined) {
        this._count = value;
    };
    /**
     * Gets the dataperformanceid property value. 
     * @returns a string
     */
    public get dataperformanceid() {
        return this._dataperformanceid;
    };
    /**
     * Sets the dataperformanceid property value. 
     * @param value Value to set for the dataperformanceid property.
     */
    public set dataperformanceid(value: string | undefined) {
        this._dataperformanceid = value;
    };
    /**
     * Gets the entity property value. 
     * @returns a string
     */
    public get entity() {
        return this._entity;
    };
    /**
     * Sets the entity property value. 
     * @param value Value to set for the entity property.
     */
    public set entity(value: string | undefined) {
        this._entity = value;
    };
    /**
     * Gets the estimatedoptimizationimpact property value. 
     * @returns a int64
     */
    public get estimatedoptimizationimpact() {
        return this._estimatedoptimizationimpact;
    };
    /**
     * Sets the estimatedoptimizationimpact property value. 
     * @param value Value to set for the estimatedoptimizationimpact property.
     */
    public set estimatedoptimizationimpact(value: number | undefined) {
        this._estimatedoptimizationimpact = value;
    };
    /**
     * Gets the executionperiod property value. 
     * @returns a string
     */
    public get executionperiod() {
        return this._executionperiod;
    };
    /**
     * Sets the executionperiod property value. 
     * @param value Value to set for the executionperiod property.
     */
    public set executionperiod(value: string | undefined) {
        this._executionperiod = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_organizationid_value": (o, n) => { (o as unknown as Dataperformance)._organizationid_value = n.getStringValue(); },
            "anyoptimizationapplied": (o, n) => { (o as unknown as Dataperformance).anyoptimizationapplied = n.getBooleanValue(); },
            "anyoptimizationavailable": (o, n) => { (o as unknown as Dataperformance).anyoptimizationavailable = n.getBooleanValue(); },
            "component": (o, n) => { (o as unknown as Dataperformance).component = n.getStringValue(); },
            "count": (o, n) => { (o as unknown as Dataperformance).count = n.getNumberValue(); },
            "dataperformanceid": (o, n) => { (o as unknown as Dataperformance).dataperformanceid = n.getStringValue(); },
            "entity": (o, n) => { (o as unknown as Dataperformance).entity = n.getStringValue(); },
            "estimatedoptimizationimpact": (o, n) => { (o as unknown as Dataperformance).estimatedoptimizationimpact = n.getNumberValue(); },
            "executionperiod": (o, n) => { (o as unknown as Dataperformance).executionperiod = n.getStringValue(); },
            "lastactionresult": (o, n) => { (o as unknown as Dataperformance).lastactionresult = n.getStringValue(); },
            "lastoptimizationdate": (o, n) => { (o as unknown as Dataperformance).lastoptimizationdate = n.getDateValue(); },
            "maxtime": (o, n) => { (o as unknown as Dataperformance).maxtime = n.getNumberValue(); },
            "mediantime": (o, n) => { (o as unknown as Dataperformance).mediantime = n.getNumberValue(); },
            "mintime": (o, n) => { (o as unknown as Dataperformance).mintime = n.getNumberValue(); },
            "operation": (o, n) => { (o as unknown as Dataperformance).operation = n.getStringValue(); },
            "optimizationstatus": (o, n) => { (o as unknown as Dataperformance).optimizationstatus = n.getStringValue(); },
            "optimizationstorage": (o, n) => { (o as unknown as Dataperformance).optimizationstorage = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Dataperformance).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "realizedoptimizationimpact": (o, n) => { (o as unknown as Dataperformance).realizedoptimizationimpact = n.getStringValue(); },
            "solution": (o, n) => { (o as unknown as Dataperformance).solution = n.getStringValue(); },
            "weight": (o, n) => { (o as unknown as Dataperformance).weight = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lastactionresult property value. 
     * @returns a string
     */
    public get lastactionresult() {
        return this._lastactionresult;
    };
    /**
     * Sets the lastactionresult property value. 
     * @param value Value to set for the lastactionresult property.
     */
    public set lastactionresult(value: string | undefined) {
        this._lastactionresult = value;
    };
    /**
     * Gets the lastoptimizationdate property value. 
     * @returns a Date
     */
    public get lastoptimizationdate() {
        return this._lastoptimizationdate;
    };
    /**
     * Sets the lastoptimizationdate property value. 
     * @param value Value to set for the lastoptimizationdate property.
     */
    public set lastoptimizationdate(value: Date | undefined) {
        this._lastoptimizationdate = value;
    };
    /**
     * Gets the maxtime property value. 
     * @returns a int64
     */
    public get maxtime() {
        return this._maxtime;
    };
    /**
     * Sets the maxtime property value. 
     * @param value Value to set for the maxtime property.
     */
    public set maxtime(value: number | undefined) {
        this._maxtime = value;
    };
    /**
     * Gets the mediantime property value. 
     * @returns a int64
     */
    public get mediantime() {
        return this._mediantime;
    };
    /**
     * Sets the mediantime property value. 
     * @param value Value to set for the mediantime property.
     */
    public set mediantime(value: number | undefined) {
        this._mediantime = value;
    };
    /**
     * Gets the mintime property value. 
     * @returns a int64
     */
    public get mintime() {
        return this._mintime;
    };
    /**
     * Sets the mintime property value. 
     * @param value Value to set for the mintime property.
     */
    public set mintime(value: number | undefined) {
        this._mintime = value;
    };
    /**
     * Gets the operation property value. 
     * @returns a string
     */
    public get operation() {
        return this._operation;
    };
    /**
     * Sets the operation property value. 
     * @param value Value to set for the operation property.
     */
    public set operation(value: string | undefined) {
        this._operation = value;
    };
    /**
     * Gets the optimizationstatus property value. 
     * @returns a string
     */
    public get optimizationstatus() {
        return this._optimizationstatus;
    };
    /**
     * Sets the optimizationstatus property value. 
     * @param value Value to set for the optimizationstatus property.
     */
    public set optimizationstatus(value: string | undefined) {
        this._optimizationstatus = value;
    };
    /**
     * Gets the optimizationstorage property value. 
     * @returns a int64
     */
    public get optimizationstorage() {
        return this._optimizationstorage;
    };
    /**
     * Sets the optimizationstorage property value. 
     * @param value Value to set for the optimizationstorage property.
     */
    public set optimizationstorage(value: number | undefined) {
        this._optimizationstorage = value;
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
     * Gets the realizedoptimizationimpact property value. 
     * @returns a string
     */
    public get realizedoptimizationimpact() {
        return this._realizedoptimizationimpact;
    };
    /**
     * Sets the realizedoptimizationimpact property value. 
     * @param value Value to set for the realizedoptimizationimpact property.
     */
    public set realizedoptimizationimpact(value: string | undefined) {
        this._realizedoptimizationimpact = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeBooleanValue("anyoptimizationapplied", this.anyoptimizationapplied);
        writer.writeBooleanValue("anyoptimizationavailable", this.anyoptimizationavailable);
        writer.writeStringValue("component", this.component);
        writer.writeNumberValue("count", this.count);
        writer.writeStringValue("dataperformanceid", this.dataperformanceid);
        writer.writeStringValue("entity", this.entity);
        writer.writeNumberValue("estimatedoptimizationimpact", this.estimatedoptimizationimpact);
        writer.writeStringValue("executionperiod", this.executionperiod);
        writer.writeStringValue("lastactionresult", this.lastactionresult);
        writer.writeDateValue("lastoptimizationdate", this.lastoptimizationdate);
        writer.writeNumberValue("maxtime", this.maxtime);
        writer.writeNumberValue("mediantime", this.mediantime);
        writer.writeNumberValue("mintime", this.mintime);
        writer.writeStringValue("operation", this.operation);
        writer.writeStringValue("optimizationstatus", this.optimizationstatus);
        writer.writeNumberValue("optimizationstorage", this.optimizationstorage);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("realizedoptimizationimpact", this.realizedoptimizationimpact);
        writer.writeStringValue("solution", this.solution);
        writer.writeNumberValue("weight", this.weight);
    };
    /**
     * Gets the solution property value. 
     * @returns a string
     */
    public get solution() {
        return this._solution;
    };
    /**
     * Sets the solution property value. 
     * @param value Value to set for the solution property.
     */
    public set solution(value: string | undefined) {
        this._solution = value;
    };
    /**
     * Gets the weight property value. 
     * @returns a int64
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. 
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        this._weight = value;
    };
}
