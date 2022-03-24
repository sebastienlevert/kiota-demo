import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSdkmessageprocessingstepFromDiscriminatorValue} from './createSdkmessageprocessingstepFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {BooleanManagedProperty, Crmbaseentity, Organization, Sdkmessageprocessingstep, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sdkmessageprocessingstepimage extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __sdkmessageprocessingstepid_value?: string | undefined;
    private _attributes?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customizationlevel?: number | undefined;
    private _description?: string | undefined;
    private _entityalias?: string | undefined;
    private _imagetype?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _messagepropertyname?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _relatedattributename?: string | undefined;
    private _sdkmessageprocessingstepid?: Sdkmessageprocessingstep | undefined;
    private _sdkmessageprocessingstepimageid?: string | undefined;
    private _sdkmessageprocessingstepimageidunique?: string | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _sdkmessageprocessingstepid_value property value. 
     * @returns a string
     */
    public get _sdkmessageprocessingstepid_value() {
        return this.__sdkmessageprocessingstepid_value;
    };
    /**
     * Sets the _sdkmessageprocessingstepid_value property value. 
     * @param value Value to set for the _sdkmessageprocessingstepid_value property.
     */
    public set _sdkmessageprocessingstepid_value(value: string | undefined) {
        this.__sdkmessageprocessingstepid_value = value;
    };
    /**
     * Gets the attributes property value. 
     * @returns a string
     */
    public get attributes() {
        return this._attributes;
    };
    /**
     * Sets the attributes property value. 
     * @param value Value to set for the attributes property.
     */
    public set attributes(value: string | undefined) {
        this._attributes = value;
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
     * Instantiates a new sdkmessageprocessingstepimage and sets the default values.
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
     * Gets the customizationlevel property value. 
     * @returns a integer
     */
    public get customizationlevel() {
        return this._customizationlevel;
    };
    /**
     * Sets the customizationlevel property value. 
     * @param value Value to set for the customizationlevel property.
     */
    public set customizationlevel(value: number | undefined) {
        this._customizationlevel = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the entityalias property value. 
     * @returns a string
     */
    public get entityalias() {
        return this._entityalias;
    };
    /**
     * Sets the entityalias property value. 
     * @param value Value to set for the entityalias property.
     */
    public set entityalias(value: string | undefined) {
        this._entityalias = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage)._organizationid_value = n.getStringValue(); },
            "_sdkmessageprocessingstepid_value": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage)._sdkmessageprocessingstepid_value = n.getStringValue(); },
            "attributes": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).attributes = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customizationlevel": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).customizationlevel = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).description = n.getStringValue(); },
            "entityalias": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).entityalias = n.getStringValue(); },
            "imagetype": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).imagetype = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).ismanaged = n.getBooleanValue(); },
            "messagepropertyname": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).messagepropertyname = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).overwritetime = n.getDateValue(); },
            "relatedattributename": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).relatedattributename = n.getStringValue(); },
            "sdkmessageprocessingstepid": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).sdkmessageprocessingstepid = n.getObjectValue<Sdkmessageprocessingstep>(createSdkmessageprocessingstepFromDiscriminatorValue); },
            "sdkmessageprocessingstepimageid": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).sdkmessageprocessingstepimageid = n.getStringValue(); },
            "sdkmessageprocessingstepimageidunique": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).sdkmessageprocessingstepimageidunique = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Sdkmessageprocessingstepimage).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the imagetype property value. 
     * @returns a integer
     */
    public get imagetype() {
        return this._imagetype;
    };
    /**
     * Sets the imagetype property value. 
     * @param value Value to set for the imagetype property.
     */
    public set imagetype(value: number | undefined) {
        this._imagetype = value;
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
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
     * Gets the messagepropertyname property value. 
     * @returns a string
     */
    public get messagepropertyname() {
        return this._messagepropertyname;
    };
    /**
     * Sets the messagepropertyname property value. 
     * @param value Value to set for the messagepropertyname property.
     */
    public set messagepropertyname(value: string | undefined) {
        this._messagepropertyname = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the relatedattributename property value. 
     * @returns a string
     */
    public get relatedattributename() {
        return this._relatedattributename;
    };
    /**
     * Sets the relatedattributename property value. 
     * @param value Value to set for the relatedattributename property.
     */
    public set relatedattributename(value: string | undefined) {
        this._relatedattributename = value;
    };
    /**
     * Gets the sdkmessageprocessingstepid property value. 
     * @returns a sdkmessageprocessingstep
     */
    public get sdkmessageprocessingstepid() {
        return this._sdkmessageprocessingstepid;
    };
    /**
     * Sets the sdkmessageprocessingstepid property value. 
     * @param value Value to set for the sdkmessageprocessingstepid property.
     */
    public set sdkmessageprocessingstepid(value: Sdkmessageprocessingstep | undefined) {
        this._sdkmessageprocessingstepid = value;
    };
    /**
     * Gets the sdkmessageprocessingstepimageid property value. 
     * @returns a string
     */
    public get sdkmessageprocessingstepimageid() {
        return this._sdkmessageprocessingstepimageid;
    };
    /**
     * Sets the sdkmessageprocessingstepimageid property value. 
     * @param value Value to set for the sdkmessageprocessingstepimageid property.
     */
    public set sdkmessageprocessingstepimageid(value: string | undefined) {
        this._sdkmessageprocessingstepimageid = value;
    };
    /**
     * Gets the sdkmessageprocessingstepimageidunique property value. 
     * @returns a string
     */
    public get sdkmessageprocessingstepimageidunique() {
        return this._sdkmessageprocessingstepimageidunique;
    };
    /**
     * Sets the sdkmessageprocessingstepimageidunique property value. 
     * @param value Value to set for the sdkmessageprocessingstepimageidunique property.
     */
    public set sdkmessageprocessingstepimageidunique(value: string | undefined) {
        this._sdkmessageprocessingstepimageidunique = value;
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
        writer.writeStringValue("_sdkmessageprocessingstepid_value", this._sdkmessageprocessingstepid_value);
        writer.writeStringValue("attributes", this.attributes);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("customizationlevel", this.customizationlevel);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("entityalias", this.entityalias);
        writer.writeNumberValue("imagetype", this.imagetype);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("messagepropertyname", this.messagepropertyname);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("relatedattributename", this.relatedattributename);
        writer.writeObjectValue<Sdkmessageprocessingstep>("sdkmessageprocessingstepid", this.sdkmessageprocessingstepid);
        writer.writeStringValue("sdkmessageprocessingstepimageid", this.sdkmessageprocessingstepimageid);
        writer.writeStringValue("sdkmessageprocessingstepimageidunique", this.sdkmessageprocessingstepimageidunique);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
