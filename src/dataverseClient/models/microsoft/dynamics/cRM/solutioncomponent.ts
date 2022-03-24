import {createSolutioncomponentFromDiscriminatorValue} from './createSolutioncomponentFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Solution, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Solutioncomponent extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __solutionid_value?: string | undefined;
    private _componenttype?: number | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _ismetadata?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _objectid?: string | undefined;
    private _rootcomponentbehavior?: number | undefined;
    private _rootsolutioncomponentid?: string | undefined;
    private _rootsolutioncomponentid_solutioncomponent?: Solutioncomponent | undefined;
    private _solutioncomponent_parent_solutioncomponent?: Solutioncomponent[] | undefined;
    private _solutioncomponentid?: string | undefined;
    private _solutionid?: Solution | undefined;
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
     * Gets the _solutionid_value property value. 
     * @returns a string
     */
    public get _solutionid_value() {
        return this.__solutionid_value;
    };
    /**
     * Sets the _solutionid_value property value. 
     * @param value Value to set for the _solutionid_value property.
     */
    public set _solutionid_value(value: string | undefined) {
        this.__solutionid_value = value;
    };
    /**
     * Gets the componenttype property value. 
     * @returns a integer
     */
    public get componenttype() {
        return this._componenttype;
    };
    /**
     * Sets the componenttype property value. 
     * @param value Value to set for the componenttype property.
     */
    public set componenttype(value: number | undefined) {
        this._componenttype = value;
    };
    /**
     * Instantiates a new solutioncomponent and sets the default values.
     */
    public constructor() {
        super();
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
            "_createdby_value": (o, n) => { (o as unknown as Solutioncomponent)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponent)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Solutioncomponent)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponent)._modifiedonbehalfby_value = n.getStringValue(); },
            "_solutionid_value": (o, n) => { (o as unknown as Solutioncomponent)._solutionid_value = n.getStringValue(); },
            "componenttype": (o, n) => { (o as unknown as Solutioncomponent).componenttype = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Solutioncomponent).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Solutioncomponent).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "ismetadata": (o, n) => { (o as unknown as Solutioncomponent).ismetadata = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Solutioncomponent).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Solutioncomponent).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "objectid": (o, n) => { (o as unknown as Solutioncomponent).objectid = n.getStringValue(); },
            "rootcomponentbehavior": (o, n) => { (o as unknown as Solutioncomponent).rootcomponentbehavior = n.getNumberValue(); },
            "rootsolutioncomponentid": (o, n) => { (o as unknown as Solutioncomponent).rootsolutioncomponentid = n.getStringValue(); },
            "rootsolutioncomponentid_solutioncomponent": (o, n) => { (o as unknown as Solutioncomponent).rootsolutioncomponentid_solutioncomponent = n.getObjectValue<Solutioncomponent>(createSolutioncomponentFromDiscriminatorValue); },
            "solutioncomponent_parent_solutioncomponent": (o, n) => { (o as unknown as Solutioncomponent).solutioncomponent_parent_solutioncomponent = n.getCollectionOfObjectValues<Solutioncomponent>(createSolutioncomponentFromDiscriminatorValue); },
            "solutioncomponentid": (o, n) => { (o as unknown as Solutioncomponent).solutioncomponentid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Solutioncomponent).solutionid = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Solutioncomponent).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ismetadata property value. 
     * @returns a boolean
     */
    public get ismetadata() {
        return this._ismetadata;
    };
    /**
     * Sets the ismetadata property value. 
     * @param value Value to set for the ismetadata property.
     */
    public set ismetadata(value: boolean | undefined) {
        this._ismetadata = value;
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
     * Gets the objectid property value. 
     * @returns a string
     */
    public get objectid() {
        return this._objectid;
    };
    /**
     * Sets the objectid property value. 
     * @param value Value to set for the objectid property.
     */
    public set objectid(value: string | undefined) {
        this._objectid = value;
    };
    /**
     * Gets the rootcomponentbehavior property value. 
     * @returns a integer
     */
    public get rootcomponentbehavior() {
        return this._rootcomponentbehavior;
    };
    /**
     * Sets the rootcomponentbehavior property value. 
     * @param value Value to set for the rootcomponentbehavior property.
     */
    public set rootcomponentbehavior(value: number | undefined) {
        this._rootcomponentbehavior = value;
    };
    /**
     * Gets the rootsolutioncomponentid property value. 
     * @returns a string
     */
    public get rootsolutioncomponentid() {
        return this._rootsolutioncomponentid;
    };
    /**
     * Sets the rootsolutioncomponentid property value. 
     * @param value Value to set for the rootsolutioncomponentid property.
     */
    public set rootsolutioncomponentid(value: string | undefined) {
        this._rootsolutioncomponentid = value;
    };
    /**
     * Gets the rootsolutioncomponentid_solutioncomponent property value. 
     * @returns a solutioncomponent
     */
    public get rootsolutioncomponentid_solutioncomponent() {
        return this._rootsolutioncomponentid_solutioncomponent;
    };
    /**
     * Sets the rootsolutioncomponentid_solutioncomponent property value. 
     * @param value Value to set for the rootsolutioncomponentid_solutioncomponent property.
     */
    public set rootsolutioncomponentid_solutioncomponent(value: Solutioncomponent | undefined) {
        this._rootsolutioncomponentid_solutioncomponent = value;
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
        writer.writeStringValue("_solutionid_value", this._solutionid_value);
        writer.writeNumberValue("componenttype", this.componenttype);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeBooleanValue("ismetadata", this.ismetadata);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("objectid", this.objectid);
        writer.writeNumberValue("rootcomponentbehavior", this.rootcomponentbehavior);
        writer.writeStringValue("rootsolutioncomponentid", this.rootsolutioncomponentid);
        writer.writeObjectValue<Solutioncomponent>("rootsolutioncomponentid_solutioncomponent", this.rootsolutioncomponentid_solutioncomponent);
        writer.writeCollectionOfObjectValues<Solutioncomponent>("solutioncomponent_parent_solutioncomponent", this.solutioncomponent_parent_solutioncomponent);
        writer.writeStringValue("solutioncomponentid", this.solutioncomponentid);
        writer.writeObjectValue<Solution>("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutioncomponent_parent_solutioncomponent property value. 
     * @returns a solutioncomponent
     */
    public get solutioncomponent_parent_solutioncomponent() {
        return this._solutioncomponent_parent_solutioncomponent;
    };
    /**
     * Sets the solutioncomponent_parent_solutioncomponent property value. 
     * @param value Value to set for the solutioncomponent_parent_solutioncomponent property.
     */
    public set solutioncomponent_parent_solutioncomponent(value: Solutioncomponent[] | undefined) {
        this._solutioncomponent_parent_solutioncomponent = value;
    };
    /**
     * Gets the solutioncomponentid property value. 
     * @returns a string
     */
    public get solutioncomponentid() {
        return this._solutioncomponentid;
    };
    /**
     * Sets the solutioncomponentid property value. 
     * @param value Value to set for the solutioncomponentid property.
     */
    public set solutioncomponentid(value: string | undefined) {
        this._solutioncomponentid = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a solution
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: Solution | undefined) {
        this._solutionid = value;
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
