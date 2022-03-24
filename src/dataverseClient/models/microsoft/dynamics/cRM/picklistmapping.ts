import {createColumnmappingFromDiscriminatorValue} from './createColumnmappingFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Columnmapping, Crmbaseentity, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Picklistmapping extends Crmbaseentity implements Parsable {
    private __columnmappingid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _columnmappingid?: Columnmapping | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overwritetime?: Date | undefined;
    private _picklistmappingid?: string | undefined;
    private _picklistmappingidunique?: string | undefined;
    private _processcode?: number | undefined;
    private _solutionid?: string | undefined;
    private _sourcevalue?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _targetvalue?: number | undefined;
    /**
     * Gets the _columnmappingid_value property value. 
     * @returns a string
     */
    public get _columnmappingid_value() {
        return this.__columnmappingid_value;
    };
    /**
     * Sets the _columnmappingid_value property value. 
     * @param value Value to set for the _columnmappingid_value property.
     */
    public set _columnmappingid_value(value: string | undefined) {
        this.__columnmappingid_value = value;
    };
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
     * Gets the columnmappingid property value. 
     * @returns a columnmapping
     */
    public get columnmappingid() {
        return this._columnmappingid;
    };
    /**
     * Sets the columnmappingid property value. 
     * @param value Value to set for the columnmappingid property.
     */
    public set columnmappingid(value: Columnmapping | undefined) {
        this._columnmappingid = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new picklistmapping and sets the default values.
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
            "_columnmappingid_value": (o, n) => { (o as unknown as Picklistmapping)._columnmappingid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Picklistmapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Picklistmapping)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Picklistmapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Picklistmapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "columnmappingid": (o, n) => { (o as unknown as Picklistmapping).columnmappingid = n.getObjectValue<Columnmapping>(createColumnmappingFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Picklistmapping).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Picklistmapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Picklistmapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Picklistmapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "introducedversion": (o, n) => { (o as unknown as Picklistmapping).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Picklistmapping).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Picklistmapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Picklistmapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Picklistmapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Picklistmapping).overwritetime = n.getDateValue(); },
            "picklistmappingid": (o, n) => { (o as unknown as Picklistmapping).picklistmappingid = n.getStringValue(); },
            "picklistmappingidunique": (o, n) => { (o as unknown as Picklistmapping).picklistmappingidunique = n.getStringValue(); },
            "processcode": (o, n) => { (o as unknown as Picklistmapping).processcode = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Picklistmapping).solutionid = n.getStringValue(); },
            "sourcevalue": (o, n) => { (o as unknown as Picklistmapping).sourcevalue = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Picklistmapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Picklistmapping).statuscode = n.getNumberValue(); },
            "targetvalue": (o, n) => { (o as unknown as Picklistmapping).targetvalue = n.getNumberValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the picklistmappingid property value. 
     * @returns a string
     */
    public get picklistmappingid() {
        return this._picklistmappingid;
    };
    /**
     * Sets the picklistmappingid property value. 
     * @param value Value to set for the picklistmappingid property.
     */
    public set picklistmappingid(value: string | undefined) {
        this._picklistmappingid = value;
    };
    /**
     * Gets the picklistmappingidunique property value. 
     * @returns a string
     */
    public get picklistmappingidunique() {
        return this._picklistmappingidunique;
    };
    /**
     * Sets the picklistmappingidunique property value. 
     * @param value Value to set for the picklistmappingidunique property.
     */
    public set picklistmappingidunique(value: string | undefined) {
        this._picklistmappingidunique = value;
    };
    /**
     * Gets the processcode property value. 
     * @returns a integer
     */
    public get processcode() {
        return this._processcode;
    };
    /**
     * Sets the processcode property value. 
     * @param value Value to set for the processcode property.
     */
    public set processcode(value: number | undefined) {
        this._processcode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_columnmappingid_value", this._columnmappingid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeObjectValue<Columnmapping>("columnmappingid", this.columnmappingid);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("picklistmappingid", this.picklistmappingid);
        writer.writeStringValue("picklistmappingidunique", this.picklistmappingidunique);
        writer.writeNumberValue("processcode", this.processcode);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("sourcevalue", this.sourcevalue);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("targetvalue", this.targetvalue);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the sourcevalue property value. 
     * @returns a string
     */
    public get sourcevalue() {
        return this._sourcevalue;
    };
    /**
     * Sets the sourcevalue property value. 
     * @param value Value to set for the sourcevalue property.
     */
    public set sourcevalue(value: string | undefined) {
        this._sourcevalue = value;
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
     * Gets the targetvalue property value. 
     * @returns a integer
     */
    public get targetvalue() {
        return this._targetvalue;
    };
    /**
     * Sets the targetvalue property value. 
     * @param value Value to set for the targetvalue property.
     */
    public set targetvalue(value: number | undefined) {
        this._targetvalue = value;
    };
}
