import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTimezonelocalizednameFromDiscriminatorValue} from './createTimezonelocalizednameFromDiscriminatorValue';
import {createTimezoneruleFromDiscriminatorValue} from './createTimezoneruleFromDiscriminatorValue';
import {Crmbaseentity, Systemuser, Timezonelocalizedname, Timezonerule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Timezonedefinition extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _bias?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _daylightname?: string | undefined;
    private _lk_timezonelocalizedname_timezonedefinitionid?: Timezonelocalizedname[] | undefined;
    private _lk_timezonerule_timezonedefinitionid?: Timezonerule[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _retiredorder?: number | undefined;
    private _standardname?: string | undefined;
    private _timezonecode?: number | undefined;
    private _timezonedefinitionid?: string | undefined;
    private _userinterfacename?: string | undefined;
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
     * Gets the bias property value. 
     * @returns a integer
     */
    public get bias() {
        return this._bias;
    };
    /**
     * Sets the bias property value. 
     * @param value Value to set for the bias property.
     */
    public set bias(value: number | undefined) {
        this._bias = value;
    };
    /**
     * Instantiates a new timezonedefinition and sets the default values.
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
     * Gets the daylightname property value. 
     * @returns a string
     */
    public get daylightname() {
        return this._daylightname;
    };
    /**
     * Sets the daylightname property value. 
     * @param value Value to set for the daylightname property.
     */
    public set daylightname(value: string | undefined) {
        this._daylightname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Timezonedefinition)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Timezonedefinition)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Timezonedefinition)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Timezonedefinition)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Timezonedefinition)._organizationid_value = n.getStringValue(); },
            "bias": (o, n) => { (o as unknown as Timezonedefinition).bias = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Timezonedefinition).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Timezonedefinition).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Timezonedefinition).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "daylightname": (o, n) => { (o as unknown as Timezonedefinition).daylightname = n.getStringValue(); },
            "lk_timezonelocalizedname_timezonedefinitionid": (o, n) => { (o as unknown as Timezonedefinition).lk_timezonelocalizedname_timezonedefinitionid = n.getCollectionOfObjectValues<Timezonelocalizedname>(createTimezonelocalizednameFromDiscriminatorValue); },
            "lk_timezonerule_timezonedefinitionid": (o, n) => { (o as unknown as Timezonedefinition).lk_timezonerule_timezonedefinitionid = n.getCollectionOfObjectValues<Timezonerule>(createTimezoneruleFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Timezonedefinition).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Timezonedefinition).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Timezonedefinition).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "retiredorder": (o, n) => { (o as unknown as Timezonedefinition).retiredorder = n.getNumberValue(); },
            "standardname": (o, n) => { (o as unknown as Timezonedefinition).standardname = n.getStringValue(); },
            "timezonecode": (o, n) => { (o as unknown as Timezonedefinition).timezonecode = n.getNumberValue(); },
            "timezonedefinitionid": (o, n) => { (o as unknown as Timezonedefinition).timezonedefinitionid = n.getStringValue(); },
            "userinterfacename": (o, n) => { (o as unknown as Timezonedefinition).userinterfacename = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Timezonedefinition).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lk_timezonelocalizedname_timezonedefinitionid property value. 
     * @returns a timezonelocalizedname
     */
    public get lk_timezonelocalizedname_timezonedefinitionid() {
        return this._lk_timezonelocalizedname_timezonedefinitionid;
    };
    /**
     * Sets the lk_timezonelocalizedname_timezonedefinitionid property value. 
     * @param value Value to set for the lk_timezonelocalizedname_timezonedefinitionid property.
     */
    public set lk_timezonelocalizedname_timezonedefinitionid(value: Timezonelocalizedname[] | undefined) {
        this._lk_timezonelocalizedname_timezonedefinitionid = value;
    };
    /**
     * Gets the lk_timezonerule_timezonedefinitionid property value. 
     * @returns a timezonerule
     */
    public get lk_timezonerule_timezonedefinitionid() {
        return this._lk_timezonerule_timezonedefinitionid;
    };
    /**
     * Sets the lk_timezonerule_timezonedefinitionid property value. 
     * @param value Value to set for the lk_timezonerule_timezonedefinitionid property.
     */
    public set lk_timezonerule_timezonedefinitionid(value: Timezonerule[] | undefined) {
        this._lk_timezonerule_timezonedefinitionid = value;
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
     * Gets the retiredorder property value. 
     * @returns a integer
     */
    public get retiredorder() {
        return this._retiredorder;
    };
    /**
     * Sets the retiredorder property value. 
     * @param value Value to set for the retiredorder property.
     */
    public set retiredorder(value: number | undefined) {
        this._retiredorder = value;
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
        writer.writeNumberValue("bias", this.bias);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("daylightname", this.daylightname);
        writer.writeCollectionOfObjectValues<Timezonelocalizedname>("lk_timezonelocalizedname_timezonedefinitionid", this.lk_timezonelocalizedname_timezonedefinitionid);
        writer.writeCollectionOfObjectValues<Timezonerule>("lk_timezonerule_timezonedefinitionid", this.lk_timezonerule_timezonedefinitionid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("retiredorder", this.retiredorder);
        writer.writeStringValue("standardname", this.standardname);
        writer.writeNumberValue("timezonecode", this.timezonecode);
        writer.writeStringValue("timezonedefinitionid", this.timezonedefinitionid);
        writer.writeStringValue("userinterfacename", this.userinterfacename);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the standardname property value. 
     * @returns a string
     */
    public get standardname() {
        return this._standardname;
    };
    /**
     * Sets the standardname property value. 
     * @param value Value to set for the standardname property.
     */
    public set standardname(value: string | undefined) {
        this._standardname = value;
    };
    /**
     * Gets the timezonecode property value. 
     * @returns a integer
     */
    public get timezonecode() {
        return this._timezonecode;
    };
    /**
     * Sets the timezonecode property value. 
     * @param value Value to set for the timezonecode property.
     */
    public set timezonecode(value: number | undefined) {
        this._timezonecode = value;
    };
    /**
     * Gets the timezonedefinitionid property value. 
     * @returns a string
     */
    public get timezonedefinitionid() {
        return this._timezonedefinitionid;
    };
    /**
     * Sets the timezonedefinitionid property value. 
     * @param value Value to set for the timezonedefinitionid property.
     */
    public set timezonedefinitionid(value: string | undefined) {
        this._timezonedefinitionid = value;
    };
    /**
     * Gets the userinterfacename property value. 
     * @returns a string
     */
    public get userinterfacename() {
        return this._userinterfacename;
    };
    /**
     * Sets the userinterfacename property value. 
     * @param value Value to set for the userinterfacename property.
     */
    public set userinterfacename(value: string | undefined) {
        this._userinterfacename = value;
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
