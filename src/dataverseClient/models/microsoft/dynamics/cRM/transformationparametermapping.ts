import {createLookupmappingFromDiscriminatorValue} from './createLookupmappingFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransformationmappingFromDiscriminatorValue} from './createTransformationmappingFromDiscriminatorValue';
import {Crmbaseentity, Lookupmapping, Systemuser, Transformationmapping} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Transformationparametermapping extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __transformationmappingid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _data?: string | undefined;
    private _datatypecode?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _lookUpMapping_TransformationParameterMapping?: Lookupmapping[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overwritetime?: Date | undefined;
    private _parameterarrayindex?: number | undefined;
    private _parametersequence?: number | undefined;
    private _parametertypecode?: number | undefined;
    private _solutionid?: string | undefined;
    private _transformationmappingid?: Transformationmapping | undefined;
    private _transformationparametermappingid?: string | undefined;
    private _transformationparametermappingidunique?: string | undefined;
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
     * Gets the _transformationmappingid_value property value. 
     * @returns a string
     */
    public get _transformationmappingid_value() {
        return this.__transformationmappingid_value;
    };
    /**
     * Sets the _transformationmappingid_value property value. 
     * @param value Value to set for the _transformationmappingid_value property.
     */
    public set _transformationmappingid_value(value: string | undefined) {
        this.__transformationmappingid_value = value;
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
     * Instantiates a new transformationparametermapping and sets the default values.
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
     * Gets the data property value. 
     * @returns a string
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. 
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
    };
    /**
     * Gets the datatypecode property value. 
     * @returns a integer
     */
    public get datatypecode() {
        return this._datatypecode;
    };
    /**
     * Sets the datatypecode property value. 
     * @param value Value to set for the datatypecode property.
     */
    public set datatypecode(value: number | undefined) {
        this._datatypecode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Transformationparametermapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Transformationparametermapping)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Transformationparametermapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Transformationparametermapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "_transformationmappingid_value": (o, n) => { (o as unknown as Transformationparametermapping)._transformationmappingid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Transformationparametermapping).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Transformationparametermapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Transformationparametermapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Transformationparametermapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "data": (o, n) => { (o as unknown as Transformationparametermapping).data = n.getStringValue(); },
            "datatypecode": (o, n) => { (o as unknown as Transformationparametermapping).datatypecode = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Transformationparametermapping).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Transformationparametermapping).ismanaged = n.getBooleanValue(); },
            "lookUpMapping_TransformationParameterMapping": (o, n) => { (o as unknown as Transformationparametermapping).lookUpMapping_TransformationParameterMapping = n.getCollectionOfObjectValues<Lookupmapping>(createLookupmappingFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Transformationparametermapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Transformationparametermapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Transformationparametermapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Transformationparametermapping).overwritetime = n.getDateValue(); },
            "parameterarrayindex": (o, n) => { (o as unknown as Transformationparametermapping).parameterarrayindex = n.getNumberValue(); },
            "parametersequence": (o, n) => { (o as unknown as Transformationparametermapping).parametersequence = n.getNumberValue(); },
            "parametertypecode": (o, n) => { (o as unknown as Transformationparametermapping).parametertypecode = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Transformationparametermapping).solutionid = n.getStringValue(); },
            "transformationmappingid": (o, n) => { (o as unknown as Transformationparametermapping).transformationmappingid = n.getObjectValue<Transformationmapping>(createTransformationmappingFromDiscriminatorValue); },
            "transformationparametermappingid": (o, n) => { (o as unknown as Transformationparametermapping).transformationparametermappingid = n.getStringValue(); },
            "transformationparametermappingidunique": (o, n) => { (o as unknown as Transformationparametermapping).transformationparametermappingidunique = n.getStringValue(); },
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
     * Gets the lookUpMapping_TransformationParameterMapping property value. 
     * @returns a lookupmapping
     */
    public get lookUpMapping_TransformationParameterMapping() {
        return this._lookUpMapping_TransformationParameterMapping;
    };
    /**
     * Sets the lookUpMapping_TransformationParameterMapping property value. 
     * @param value Value to set for the LookUpMapping_TransformationParameterMapping property.
     */
    public set lookUpMapping_TransformationParameterMapping(value: Lookupmapping[] | undefined) {
        this._lookUpMapping_TransformationParameterMapping = value;
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
     * Gets the parameterarrayindex property value. 
     * @returns a integer
     */
    public get parameterarrayindex() {
        return this._parameterarrayindex;
    };
    /**
     * Sets the parameterarrayindex property value. 
     * @param value Value to set for the parameterarrayindex property.
     */
    public set parameterarrayindex(value: number | undefined) {
        this._parameterarrayindex = value;
    };
    /**
     * Gets the parametersequence property value. 
     * @returns a integer
     */
    public get parametersequence() {
        return this._parametersequence;
    };
    /**
     * Sets the parametersequence property value. 
     * @param value Value to set for the parametersequence property.
     */
    public set parametersequence(value: number | undefined) {
        this._parametersequence = value;
    };
    /**
     * Gets the parametertypecode property value. 
     * @returns a integer
     */
    public get parametertypecode() {
        return this._parametertypecode;
    };
    /**
     * Sets the parametertypecode property value. 
     * @param value Value to set for the parametertypecode property.
     */
    public set parametertypecode(value: number | undefined) {
        this._parametertypecode = value;
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
        writer.writeStringValue("_transformationmappingid_value", this._transformationmappingid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("data", this.data);
        writer.writeNumberValue("datatypecode", this.datatypecode);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeCollectionOfObjectValues<Lookupmapping>("lookUpMapping_TransformationParameterMapping", this.lookUpMapping_TransformationParameterMapping);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeNumberValue("parameterarrayindex", this.parameterarrayindex);
        writer.writeNumberValue("parametersequence", this.parametersequence);
        writer.writeNumberValue("parametertypecode", this.parametertypecode);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeObjectValue<Transformationmapping>("transformationmappingid", this.transformationmappingid);
        writer.writeStringValue("transformationparametermappingid", this.transformationparametermappingid);
        writer.writeStringValue("transformationparametermappingidunique", this.transformationparametermappingidunique);
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
     * Gets the transformationmappingid property value. 
     * @returns a transformationmapping
     */
    public get transformationmappingid() {
        return this._transformationmappingid;
    };
    /**
     * Sets the transformationmappingid property value. 
     * @param value Value to set for the transformationmappingid property.
     */
    public set transformationmappingid(value: Transformationmapping | undefined) {
        this._transformationmappingid = value;
    };
    /**
     * Gets the transformationparametermappingid property value. 
     * @returns a string
     */
    public get transformationparametermappingid() {
        return this._transformationparametermappingid;
    };
    /**
     * Sets the transformationparametermappingid property value. 
     * @param value Value to set for the transformationparametermappingid property.
     */
    public set transformationparametermappingid(value: string | undefined) {
        this._transformationparametermappingid = value;
    };
    /**
     * Gets the transformationparametermappingidunique property value. 
     * @returns a string
     */
    public get transformationparametermappingidunique() {
        return this._transformationparametermappingidunique;
    };
    /**
     * Sets the transformationparametermappingidunique property value. 
     * @param value Value to set for the transformationparametermappingidunique property.
     */
    public set transformationparametermappingidunique(value: string | undefined) {
        this._transformationparametermappingidunique = value;
    };
}
