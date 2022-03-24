import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPlugintypeFromDiscriminatorValue} from './createPlugintypeFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Organization, Plugintype, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Plugintypestatistic extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __plugintypeid_value?: string | undefined;
    private _averageexecutetimeinmilliseconds?: number | undefined;
    private _crashcontributionpercent?: number | undefined;
    private _crashcount?: number | undefined;
    private _crashpercent?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _executecount?: number | undefined;
    private _failurecount?: number | undefined;
    private _failurepercent?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _plugintypeid?: Plugintype | undefined;
    private _plugintypestatisticid?: string | undefined;
    private _terminatecpucontributionpercent?: number | undefined;
    private _terminatehandlescontributionpercent?: number | undefined;
    private _terminatememorycontributionpercent?: number | undefined;
    private _terminateothercontributionpercent?: number | undefined;
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
     * Gets the _plugintypeid_value property value. 
     * @returns a string
     */
    public get _plugintypeid_value() {
        return this.__plugintypeid_value;
    };
    /**
     * Sets the _plugintypeid_value property value. 
     * @param value Value to set for the _plugintypeid_value property.
     */
    public set _plugintypeid_value(value: string | undefined) {
        this.__plugintypeid_value = value;
    };
    /**
     * Gets the averageexecutetimeinmilliseconds property value. 
     * @returns a integer
     */
    public get averageexecutetimeinmilliseconds() {
        return this._averageexecutetimeinmilliseconds;
    };
    /**
     * Sets the averageexecutetimeinmilliseconds property value. 
     * @param value Value to set for the averageexecutetimeinmilliseconds property.
     */
    public set averageexecutetimeinmilliseconds(value: number | undefined) {
        this._averageexecutetimeinmilliseconds = value;
    };
    /**
     * Instantiates a new plugintypestatistic and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the crashcontributionpercent property value. 
     * @returns a integer
     */
    public get crashcontributionpercent() {
        return this._crashcontributionpercent;
    };
    /**
     * Sets the crashcontributionpercent property value. 
     * @param value Value to set for the crashcontributionpercent property.
     */
    public set crashcontributionpercent(value: number | undefined) {
        this._crashcontributionpercent = value;
    };
    /**
     * Gets the crashcount property value. 
     * @returns a integer
     */
    public get crashcount() {
        return this._crashcount;
    };
    /**
     * Sets the crashcount property value. 
     * @param value Value to set for the crashcount property.
     */
    public set crashcount(value: number | undefined) {
        this._crashcount = value;
    };
    /**
     * Gets the crashpercent property value. 
     * @returns a integer
     */
    public get crashpercent() {
        return this._crashpercent;
    };
    /**
     * Sets the crashpercent property value. 
     * @param value Value to set for the crashpercent property.
     */
    public set crashpercent(value: number | undefined) {
        this._crashpercent = value;
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
     * Gets the executecount property value. 
     * @returns a integer
     */
    public get executecount() {
        return this._executecount;
    };
    /**
     * Sets the executecount property value. 
     * @param value Value to set for the executecount property.
     */
    public set executecount(value: number | undefined) {
        this._executecount = value;
    };
    /**
     * Gets the failurecount property value. 
     * @returns a integer
     */
    public get failurecount() {
        return this._failurecount;
    };
    /**
     * Sets the failurecount property value. 
     * @param value Value to set for the failurecount property.
     */
    public set failurecount(value: number | undefined) {
        this._failurecount = value;
    };
    /**
     * Gets the failurepercent property value. 
     * @returns a integer
     */
    public get failurepercent() {
        return this._failurepercent;
    };
    /**
     * Sets the failurepercent property value. 
     * @param value Value to set for the failurepercent property.
     */
    public set failurepercent(value: number | undefined) {
        this._failurepercent = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Plugintypestatistic)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Plugintypestatistic)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Plugintypestatistic)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Plugintypestatistic)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Plugintypestatistic)._organizationid_value = n.getStringValue(); },
            "_plugintypeid_value": (o, n) => { (o as unknown as Plugintypestatistic)._plugintypeid_value = n.getStringValue(); },
            "averageexecutetimeinmilliseconds": (o, n) => { (o as unknown as Plugintypestatistic).averageexecutetimeinmilliseconds = n.getNumberValue(); },
            "crashcontributionpercent": (o, n) => { (o as unknown as Plugintypestatistic).crashcontributionpercent = n.getNumberValue(); },
            "crashcount": (o, n) => { (o as unknown as Plugintypestatistic).crashcount = n.getNumberValue(); },
            "crashpercent": (o, n) => { (o as unknown as Plugintypestatistic).crashpercent = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Plugintypestatistic).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Plugintypestatistic).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Plugintypestatistic).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "executecount": (o, n) => { (o as unknown as Plugintypestatistic).executecount = n.getNumberValue(); },
            "failurecount": (o, n) => { (o as unknown as Plugintypestatistic).failurecount = n.getNumberValue(); },
            "failurepercent": (o, n) => { (o as unknown as Plugintypestatistic).failurepercent = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Plugintypestatistic).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Plugintypestatistic).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Plugintypestatistic).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Plugintypestatistic).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "plugintypeid": (o, n) => { (o as unknown as Plugintypestatistic).plugintypeid = n.getObjectValue<Plugintype>(createPlugintypeFromDiscriminatorValue); },
            "plugintypestatisticid": (o, n) => { (o as unknown as Plugintypestatistic).plugintypestatisticid = n.getStringValue(); },
            "terminatecpucontributionpercent": (o, n) => { (o as unknown as Plugintypestatistic).terminatecpucontributionpercent = n.getNumberValue(); },
            "terminatehandlescontributionpercent": (o, n) => { (o as unknown as Plugintypestatistic).terminatehandlescontributionpercent = n.getNumberValue(); },
            "terminatememorycontributionpercent": (o, n) => { (o as unknown as Plugintypestatistic).terminatememorycontributionpercent = n.getNumberValue(); },
            "terminateothercontributionpercent": (o, n) => { (o as unknown as Plugintypestatistic).terminateothercontributionpercent = n.getNumberValue(); },
        };
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
     * Gets the plugintypeid property value. 
     * @returns a plugintype
     */
    public get plugintypeid() {
        return this._plugintypeid;
    };
    /**
     * Sets the plugintypeid property value. 
     * @param value Value to set for the plugintypeid property.
     */
    public set plugintypeid(value: Plugintype | undefined) {
        this._plugintypeid = value;
    };
    /**
     * Gets the plugintypestatisticid property value. 
     * @returns a string
     */
    public get plugintypestatisticid() {
        return this._plugintypestatisticid;
    };
    /**
     * Sets the plugintypestatisticid property value. 
     * @param value Value to set for the plugintypestatisticid property.
     */
    public set plugintypestatisticid(value: string | undefined) {
        this._plugintypestatisticid = value;
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
        writer.writeStringValue("_plugintypeid_value", this._plugintypeid_value);
        writer.writeNumberValue("averageexecutetimeinmilliseconds", this.averageexecutetimeinmilliseconds);
        writer.writeNumberValue("crashcontributionpercent", this.crashcontributionpercent);
        writer.writeNumberValue("crashcount", this.crashcount);
        writer.writeNumberValue("crashpercent", this.crashpercent);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("executecount", this.executecount);
        writer.writeNumberValue("failurecount", this.failurecount);
        writer.writeNumberValue("failurepercent", this.failurepercent);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeObjectValue<Plugintype>("plugintypeid", this.plugintypeid);
        writer.writeStringValue("plugintypestatisticid", this.plugintypestatisticid);
        writer.writeNumberValue("terminatecpucontributionpercent", this.terminatecpucontributionpercent);
        writer.writeNumberValue("terminatehandlescontributionpercent", this.terminatehandlescontributionpercent);
        writer.writeNumberValue("terminatememorycontributionpercent", this.terminatememorycontributionpercent);
        writer.writeNumberValue("terminateothercontributionpercent", this.terminateothercontributionpercent);
    };
    /**
     * Gets the terminatecpucontributionpercent property value. 
     * @returns a integer
     */
    public get terminatecpucontributionpercent() {
        return this._terminatecpucontributionpercent;
    };
    /**
     * Sets the terminatecpucontributionpercent property value. 
     * @param value Value to set for the terminatecpucontributionpercent property.
     */
    public set terminatecpucontributionpercent(value: number | undefined) {
        this._terminatecpucontributionpercent = value;
    };
    /**
     * Gets the terminatehandlescontributionpercent property value. 
     * @returns a integer
     */
    public get terminatehandlescontributionpercent() {
        return this._terminatehandlescontributionpercent;
    };
    /**
     * Sets the terminatehandlescontributionpercent property value. 
     * @param value Value to set for the terminatehandlescontributionpercent property.
     */
    public set terminatehandlescontributionpercent(value: number | undefined) {
        this._terminatehandlescontributionpercent = value;
    };
    /**
     * Gets the terminatememorycontributionpercent property value. 
     * @returns a integer
     */
    public get terminatememorycontributionpercent() {
        return this._terminatememorycontributionpercent;
    };
    /**
     * Sets the terminatememorycontributionpercent property value. 
     * @param value Value to set for the terminatememorycontributionpercent property.
     */
    public set terminatememorycontributionpercent(value: number | undefined) {
        this._terminatememorycontributionpercent = value;
    };
    /**
     * Gets the terminateothercontributionpercent property value. 
     * @returns a integer
     */
    public get terminateothercontributionpercent() {
        return this._terminateothercontributionpercent;
    };
    /**
     * Sets the terminateothercontributionpercent property value. 
     * @param value Value to set for the terminateothercontributionpercent property.
     */
    public set terminateothercontributionpercent(value: number | undefined) {
        this._terminateothercontributionpercent = value;
    };
}
