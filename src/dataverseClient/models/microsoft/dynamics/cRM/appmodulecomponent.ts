import {createAppmoduleFromDiscriminatorValue} from './createAppmoduleFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appmodule, Crmbaseentity, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Appmodulecomponent extends Crmbaseentity implements Parsable {
    private __appmoduleidunique_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _appmodulecomponent_createdby?: Systemuser | undefined;
    private _appmodulecomponent_modifiedby?: Systemuser | undefined;
    private _appmodulecomponentid?: string | undefined;
    private _appmodulecomponentidunique?: string | undefined;
    private _appmoduleid?: Appmodule | undefined;
    private _componenttype?: number | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _introducedversion?: string | undefined;
    private _isdefault?: boolean | undefined;
    private _ismetadata?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _objectid?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _rootappmodulecomponentid?: string | undefined;
    private _rootcomponentbehavior?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _appmoduleidunique_value property value. 
     * @returns a string
     */
    public get _appmoduleidunique_value() {
        return this.__appmoduleidunique_value;
    };
    /**
     * Sets the _appmoduleidunique_value property value. 
     * @param value Value to set for the _appmoduleidunique_value property.
     */
    public set _appmoduleidunique_value(value: string | undefined) {
        this.__appmoduleidunique_value = value;
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
     * Gets the appmodulecomponent_createdby property value. 
     * @returns a systemuser
     */
    public get appmodulecomponent_createdby() {
        return this._appmodulecomponent_createdby;
    };
    /**
     * Sets the appmodulecomponent_createdby property value. 
     * @param value Value to set for the appmodulecomponent_createdby property.
     */
    public set appmodulecomponent_createdby(value: Systemuser | undefined) {
        this._appmodulecomponent_createdby = value;
    };
    /**
     * Gets the appmodulecomponent_modifiedby property value. 
     * @returns a systemuser
     */
    public get appmodulecomponent_modifiedby() {
        return this._appmodulecomponent_modifiedby;
    };
    /**
     * Sets the appmodulecomponent_modifiedby property value. 
     * @param value Value to set for the appmodulecomponent_modifiedby property.
     */
    public set appmodulecomponent_modifiedby(value: Systemuser | undefined) {
        this._appmodulecomponent_modifiedby = value;
    };
    /**
     * Gets the appmodulecomponentid property value. 
     * @returns a string
     */
    public get appmodulecomponentid() {
        return this._appmodulecomponentid;
    };
    /**
     * Sets the appmodulecomponentid property value. 
     * @param value Value to set for the appmodulecomponentid property.
     */
    public set appmodulecomponentid(value: string | undefined) {
        this._appmodulecomponentid = value;
    };
    /**
     * Gets the appmodulecomponentidunique property value. 
     * @returns a string
     */
    public get appmodulecomponentidunique() {
        return this._appmodulecomponentidunique;
    };
    /**
     * Sets the appmodulecomponentidunique property value. 
     * @param value Value to set for the appmodulecomponentidunique property.
     */
    public set appmodulecomponentidunique(value: string | undefined) {
        this._appmodulecomponentidunique = value;
    };
    /**
     * Gets the appmoduleid property value. 
     * @returns a appmodule
     */
    public get appmoduleid() {
        return this._appmoduleid;
    };
    /**
     * Sets the appmoduleid property value. 
     * @param value Value to set for the appmoduleid property.
     */
    public set appmoduleid(value: Appmodule | undefined) {
        this._appmoduleid = value;
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
     * Instantiates a new appmodulecomponent and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_appmoduleidunique_value": (o, n) => { (o as unknown as Appmodulecomponent)._appmoduleidunique_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Appmodulecomponent)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Appmodulecomponent)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Appmodulecomponent)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Appmodulecomponent)._modifiedonbehalfby_value = n.getStringValue(); },
            "appmodulecomponent_createdby": (o, n) => { (o as unknown as Appmodulecomponent).appmodulecomponent_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appmodulecomponent_modifiedby": (o, n) => { (o as unknown as Appmodulecomponent).appmodulecomponent_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appmodulecomponentid": (o, n) => { (o as unknown as Appmodulecomponent).appmodulecomponentid = n.getStringValue(); },
            "appmodulecomponentidunique": (o, n) => { (o as unknown as Appmodulecomponent).appmodulecomponentidunique = n.getStringValue(); },
            "appmoduleid": (o, n) => { (o as unknown as Appmodulecomponent).appmoduleid = n.getObjectValue<Appmodule>(createAppmoduleFromDiscriminatorValue); },
            "componenttype": (o, n) => { (o as unknown as Appmodulecomponent).componenttype = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Appmodulecomponent).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Appmodulecomponent).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Appmodulecomponent).exchangerate = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Appmodulecomponent).introducedversion = n.getStringValue(); },
            "isdefault": (o, n) => { (o as unknown as Appmodulecomponent).isdefault = n.getBooleanValue(); },
            "ismetadata": (o, n) => { (o as unknown as Appmodulecomponent).ismetadata = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Appmodulecomponent).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Appmodulecomponent).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "objectid": (o, n) => { (o as unknown as Appmodulecomponent).objectid = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Appmodulecomponent).overwritetime = n.getDateValue(); },
            "rootappmodulecomponentid": (o, n) => { (o as unknown as Appmodulecomponent).rootappmodulecomponentid = n.getStringValue(); },
            "rootcomponentbehavior": (o, n) => { (o as unknown as Appmodulecomponent).rootcomponentbehavior = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Appmodulecomponent).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Appmodulecomponent).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Appmodulecomponent).versionnumber = n.getNumberValue(); },
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
     * Gets the isdefault property value. 
     * @returns a boolean
     */
    public get isdefault() {
        return this._isdefault;
    };
    /**
     * Sets the isdefault property value. 
     * @param value Value to set for the isdefault property.
     */
    public set isdefault(value: boolean | undefined) {
        this._isdefault = value;
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
     * Gets the rootappmodulecomponentid property value. 
     * @returns a string
     */
    public get rootappmodulecomponentid() {
        return this._rootappmodulecomponentid;
    };
    /**
     * Sets the rootappmodulecomponentid property value. 
     * @param value Value to set for the rootappmodulecomponentid property.
     */
    public set rootappmodulecomponentid(value: string | undefined) {
        this._rootappmodulecomponentid = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_appmoduleidunique_value", this._appmoduleidunique_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeObjectValue<Systemuser>("appmodulecomponent_createdby", this.appmodulecomponent_createdby);
        writer.writeObjectValue<Systemuser>("appmodulecomponent_modifiedby", this.appmodulecomponent_modifiedby);
        writer.writeStringValue("appmodulecomponentid", this.appmodulecomponentid);
        writer.writeStringValue("appmodulecomponentidunique", this.appmodulecomponentidunique);
        writer.writeObjectValue<Appmodule>("appmoduleid", this.appmoduleid);
        writer.writeNumberValue("componenttype", this.componenttype);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeBooleanValue("ismetadata", this.ismetadata);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("objectid", this.objectid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("rootappmodulecomponentid", this.rootappmodulecomponentid);
        writer.writeNumberValue("rootcomponentbehavior", this.rootcomponentbehavior);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
