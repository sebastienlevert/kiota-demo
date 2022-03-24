import {createImportmapFromDiscriminatorValue} from './createImportmapFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransformationparametermappingFromDiscriminatorValue} from './createTransformationparametermappingFromDiscriminatorValue';
import {Crmbaseentity, Importmap, Systemuser, Transformationparametermapping} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Transformationmapping extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __importmapid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importmapid?: Importmap | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overwritetime?: Date | undefined;
    private _processcode?: number | undefined;
    private _solutionid?: string | undefined;
    private _sourceentityname?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _targetentityname?: string | undefined;
    private _transformationmappingid?: string | undefined;
    private _transformationmappingidunique?: string | undefined;
    private _transformationParameterMapping_TransformationMapping?: Transformationparametermapping[] | undefined;
    private _transformationtypename?: string | undefined;
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
     * Gets the _importmapid_value property value. 
     * @returns a string
     */
    public get _importmapid_value() {
        return this.__importmapid_value;
    };
    /**
     * Sets the _importmapid_value property value. 
     * @param value Value to set for the _importmapid_value property.
     */
    public set _importmapid_value(value: string | undefined) {
        this.__importmapid_value = value;
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
     * Instantiates a new transformationmapping and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Transformationmapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Transformationmapping)._createdonbehalfby_value = n.getStringValue(); },
            "_importmapid_value": (o, n) => { (o as unknown as Transformationmapping)._importmapid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Transformationmapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Transformationmapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Transformationmapping).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Transformationmapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Transformationmapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Transformationmapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importmapid": (o, n) => { (o as unknown as Transformationmapping).importmapid = n.getObjectValue<Importmap>(createImportmapFromDiscriminatorValue); },
            "introducedversion": (o, n) => { (o as unknown as Transformationmapping).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Transformationmapping).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Transformationmapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Transformationmapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Transformationmapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Transformationmapping).overwritetime = n.getDateValue(); },
            "processcode": (o, n) => { (o as unknown as Transformationmapping).processcode = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Transformationmapping).solutionid = n.getStringValue(); },
            "sourceentityname": (o, n) => { (o as unknown as Transformationmapping).sourceentityname = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Transformationmapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Transformationmapping).statuscode = n.getNumberValue(); },
            "targetentityname": (o, n) => { (o as unknown as Transformationmapping).targetentityname = n.getStringValue(); },
            "transformationmappingid": (o, n) => { (o as unknown as Transformationmapping).transformationmappingid = n.getStringValue(); },
            "transformationmappingidunique": (o, n) => { (o as unknown as Transformationmapping).transformationmappingidunique = n.getStringValue(); },
            "transformationParameterMapping_TransformationMapping": (o, n) => { (o as unknown as Transformationmapping).transformationParameterMapping_TransformationMapping = n.getCollectionOfObjectValues<Transformationparametermapping>(createTransformationparametermappingFromDiscriminatorValue); },
            "transformationtypename": (o, n) => { (o as unknown as Transformationmapping).transformationtypename = n.getStringValue(); },
        };
    };
    /**
     * Gets the importmapid property value. 
     * @returns a importmap
     */
    public get importmapid() {
        return this._importmapid;
    };
    /**
     * Sets the importmapid property value. 
     * @param value Value to set for the importmapid property.
     */
    public set importmapid(value: Importmap | undefined) {
        this._importmapid = value;
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
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_importmapid_value", this._importmapid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Importmap>("importmapid", this.importmapid);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeNumberValue("processcode", this.processcode);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("sourceentityname", this.sourceentityname);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("targetentityname", this.targetentityname);
        writer.writeStringValue("transformationmappingid", this.transformationmappingid);
        writer.writeStringValue("transformationmappingidunique", this.transformationmappingidunique);
        writer.writeCollectionOfObjectValues<Transformationparametermapping>("transformationParameterMapping_TransformationMapping", this.transformationParameterMapping_TransformationMapping);
        writer.writeStringValue("transformationtypename", this.transformationtypename);
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
     * Gets the sourceentityname property value. 
     * @returns a string
     */
    public get sourceentityname() {
        return this._sourceentityname;
    };
    /**
     * Sets the sourceentityname property value. 
     * @param value Value to set for the sourceentityname property.
     */
    public set sourceentityname(value: string | undefined) {
        this._sourceentityname = value;
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
     * Gets the targetentityname property value. 
     * @returns a string
     */
    public get targetentityname() {
        return this._targetentityname;
    };
    /**
     * Sets the targetentityname property value. 
     * @param value Value to set for the targetentityname property.
     */
    public set targetentityname(value: string | undefined) {
        this._targetentityname = value;
    };
    /**
     * Gets the transformationmappingid property value. 
     * @returns a string
     */
    public get transformationmappingid() {
        return this._transformationmappingid;
    };
    /**
     * Sets the transformationmappingid property value. 
     * @param value Value to set for the transformationmappingid property.
     */
    public set transformationmappingid(value: string | undefined) {
        this._transformationmappingid = value;
    };
    /**
     * Gets the transformationmappingidunique property value. 
     * @returns a string
     */
    public get transformationmappingidunique() {
        return this._transformationmappingidunique;
    };
    /**
     * Sets the transformationmappingidunique property value. 
     * @param value Value to set for the transformationmappingidunique property.
     */
    public set transformationmappingidunique(value: string | undefined) {
        this._transformationmappingidunique = value;
    };
    /**
     * Gets the transformationParameterMapping_TransformationMapping property value. 
     * @returns a transformationparametermapping
     */
    public get transformationParameterMapping_TransformationMapping() {
        return this._transformationParameterMapping_TransformationMapping;
    };
    /**
     * Sets the transformationParameterMapping_TransformationMapping property value. 
     * @param value Value to set for the TransformationParameterMapping_TransformationMapping property.
     */
    public set transformationParameterMapping_TransformationMapping(value: Transformationparametermapping[] | undefined) {
        this._transformationParameterMapping_TransformationMapping = value;
    };
    /**
     * Gets the transformationtypename property value. 
     * @returns a string
     */
    public get transformationtypename() {
        return this._transformationtypename;
    };
    /**
     * Sets the transformationtypename property value. 
     * @param value Value to set for the transformationtypename property.
     */
    public set transformationtypename(value: string | undefined) {
        this._transformationtypename = value;
    };
}
