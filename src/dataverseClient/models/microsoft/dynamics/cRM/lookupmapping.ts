import {createColumnmappingFromDiscriminatorValue} from './createColumnmappingFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransformationparametermappingFromDiscriminatorValue} from './createTransformationparametermappingFromDiscriminatorValue';
import {Columnmapping, Crmbaseentity, Systemuser, Transformationparametermapping} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Lookupmapping extends Crmbaseentity implements Parsable {
    private __columnmappingid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __transformationparametermappingid_value?: string | undefined;
    private _columnmappingid?: Columnmapping | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _lookupattributename?: string | undefined;
    private _lookupentityname?: string | undefined;
    private _lookupmappingid?: string | undefined;
    private _lookupmappingidunique?: string | undefined;
    private _lookupsourcecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overwritetime?: Date | undefined;
    private _processcode?: number | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _transformationparametermappingid?: Transformationparametermapping | undefined;
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
     * Gets the _transformationparametermappingid_value property value. 
     * @returns a string
     */
    public get _transformationparametermappingid_value() {
        return this.__transformationparametermappingid_value;
    };
    /**
     * Sets the _transformationparametermappingid_value property value. 
     * @param value Value to set for the _transformationparametermappingid_value property.
     */
    public set _transformationparametermappingid_value(value: string | undefined) {
        this.__transformationparametermappingid_value = value;
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
     * Instantiates a new lookupmapping and sets the default values.
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
            "_columnmappingid_value": (o, n) => { (o as unknown as Lookupmapping)._columnmappingid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Lookupmapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Lookupmapping)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Lookupmapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Lookupmapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "_transformationparametermappingid_value": (o, n) => { (o as unknown as Lookupmapping)._transformationparametermappingid_value = n.getStringValue(); },
            "columnmappingid": (o, n) => { (o as unknown as Lookupmapping).columnmappingid = n.getObjectValue<Columnmapping>(createColumnmappingFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Lookupmapping).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Lookupmapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Lookupmapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Lookupmapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "introducedversion": (o, n) => { (o as unknown as Lookupmapping).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Lookupmapping).ismanaged = n.getBooleanValue(); },
            "lookupattributename": (o, n) => { (o as unknown as Lookupmapping).lookupattributename = n.getStringValue(); },
            "lookupentityname": (o, n) => { (o as unknown as Lookupmapping).lookupentityname = n.getStringValue(); },
            "lookupmappingid": (o, n) => { (o as unknown as Lookupmapping).lookupmappingid = n.getStringValue(); },
            "lookupmappingidunique": (o, n) => { (o as unknown as Lookupmapping).lookupmappingidunique = n.getStringValue(); },
            "lookupsourcecode": (o, n) => { (o as unknown as Lookupmapping).lookupsourcecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Lookupmapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Lookupmapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Lookupmapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Lookupmapping).overwritetime = n.getDateValue(); },
            "processcode": (o, n) => { (o as unknown as Lookupmapping).processcode = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Lookupmapping).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Lookupmapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Lookupmapping).statuscode = n.getNumberValue(); },
            "transformationparametermappingid": (o, n) => { (o as unknown as Lookupmapping).transformationparametermappingid = n.getObjectValue<Transformationparametermapping>(createTransformationparametermappingFromDiscriminatorValue); },
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
     * Gets the lookupattributename property value. 
     * @returns a string
     */
    public get lookupattributename() {
        return this._lookupattributename;
    };
    /**
     * Sets the lookupattributename property value. 
     * @param value Value to set for the lookupattributename property.
     */
    public set lookupattributename(value: string | undefined) {
        this._lookupattributename = value;
    };
    /**
     * Gets the lookupentityname property value. 
     * @returns a string
     */
    public get lookupentityname() {
        return this._lookupentityname;
    };
    /**
     * Sets the lookupentityname property value. 
     * @param value Value to set for the lookupentityname property.
     */
    public set lookupentityname(value: string | undefined) {
        this._lookupentityname = value;
    };
    /**
     * Gets the lookupmappingid property value. 
     * @returns a string
     */
    public get lookupmappingid() {
        return this._lookupmappingid;
    };
    /**
     * Sets the lookupmappingid property value. 
     * @param value Value to set for the lookupmappingid property.
     */
    public set lookupmappingid(value: string | undefined) {
        this._lookupmappingid = value;
    };
    /**
     * Gets the lookupmappingidunique property value. 
     * @returns a string
     */
    public get lookupmappingidunique() {
        return this._lookupmappingidunique;
    };
    /**
     * Sets the lookupmappingidunique property value. 
     * @param value Value to set for the lookupmappingidunique property.
     */
    public set lookupmappingidunique(value: string | undefined) {
        this._lookupmappingidunique = value;
    };
    /**
     * Gets the lookupsourcecode property value. 
     * @returns a integer
     */
    public get lookupsourcecode() {
        return this._lookupsourcecode;
    };
    /**
     * Sets the lookupsourcecode property value. 
     * @param value Value to set for the lookupsourcecode property.
     */
    public set lookupsourcecode(value: number | undefined) {
        this._lookupsourcecode = value;
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
        writer.writeStringValue("_transformationparametermappingid_value", this._transformationparametermappingid_value);
        writer.writeObjectValue<Columnmapping>("columnmappingid", this.columnmappingid);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("lookupattributename", this.lookupattributename);
        writer.writeStringValue("lookupentityname", this.lookupentityname);
        writer.writeStringValue("lookupmappingid", this.lookupmappingid);
        writer.writeStringValue("lookupmappingidunique", this.lookupmappingidunique);
        writer.writeNumberValue("lookupsourcecode", this.lookupsourcecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeNumberValue("processcode", this.processcode);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeObjectValue<Transformationparametermapping>("transformationparametermappingid", this.transformationparametermappingid);
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
     * Gets the transformationparametermappingid property value. 
     * @returns a transformationparametermapping
     */
    public get transformationparametermappingid() {
        return this._transformationparametermappingid;
    };
    /**
     * Sets the transformationparametermappingid property value. 
     * @param value Value to set for the transformationparametermappingid property.
     */
    public set transformationparametermappingid(value: Transformationparametermapping | undefined) {
        this._transformationparametermappingid = value;
    };
}
