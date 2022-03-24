import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Webwizard extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _accessprivileges?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _isstaticpagesequence?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _startpagesequencenumber?: number | undefined;
    private _titleresourcestring?: string | undefined;
    private _versionnumber?: number | undefined;
    private _webwizardid?: string | undefined;
    private _webwizardidunique?: string | undefined;
    private _wizardpageheight?: number | undefined;
    private _wizardpagewidth?: number | undefined;
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
     * Gets the accessprivileges property value. 
     * @returns a string
     */
    public get accessprivileges() {
        return this._accessprivileges;
    };
    /**
     * Sets the accessprivileges property value. 
     * @param value Value to set for the accessprivileges property.
     */
    public set accessprivileges(value: string | undefined) {
        this._accessprivileges = value;
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
     * Instantiates a new webwizard and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Webwizard)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Webwizard)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Webwizard)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Webwizard)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Webwizard)._organizationid_value = n.getStringValue(); },
            "accessprivileges": (o, n) => { (o as unknown as Webwizard).accessprivileges = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Webwizard).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Webwizard).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Webwizard).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Webwizard).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "introducedversion": (o, n) => { (o as unknown as Webwizard).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Webwizard).ismanaged = n.getBooleanValue(); },
            "isstaticpagesequence": (o, n) => { (o as unknown as Webwizard).isstaticpagesequence = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Webwizard).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Webwizard).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Webwizard).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Webwizard).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Webwizard).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Webwizard).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Webwizard).solutionid = n.getStringValue(); },
            "startpagesequencenumber": (o, n) => { (o as unknown as Webwizard).startpagesequencenumber = n.getNumberValue(); },
            "titleresourcestring": (o, n) => { (o as unknown as Webwizard).titleresourcestring = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Webwizard).versionnumber = n.getNumberValue(); },
            "webwizardid": (o, n) => { (o as unknown as Webwizard).webwizardid = n.getStringValue(); },
            "webwizardidunique": (o, n) => { (o as unknown as Webwizard).webwizardidunique = n.getStringValue(); },
            "wizardpageheight": (o, n) => { (o as unknown as Webwizard).wizardpageheight = n.getNumberValue(); },
            "wizardpagewidth": (o, n) => { (o as unknown as Webwizard).wizardpagewidth = n.getNumberValue(); },
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
     * Gets the isstaticpagesequence property value. 
     * @returns a boolean
     */
    public get isstaticpagesequence() {
        return this._isstaticpagesequence;
    };
    /**
     * Sets the isstaticpagesequence property value. 
     * @param value Value to set for the isstaticpagesequence property.
     */
    public set isstaticpagesequence(value: boolean | undefined) {
        this._isstaticpagesequence = value;
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
        writer.writeStringValue("accessprivileges", this.accessprivileges);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isstaticpagesequence", this.isstaticpagesequence);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("startpagesequencenumber", this.startpagesequencenumber);
        writer.writeStringValue("titleresourcestring", this.titleresourcestring);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("webwizardid", this.webwizardid);
        writer.writeStringValue("webwizardidunique", this.webwizardidunique);
        writer.writeNumberValue("wizardpageheight", this.wizardpageheight);
        writer.writeNumberValue("wizardpagewidth", this.wizardpagewidth);
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
     * Gets the startpagesequencenumber property value. 
     * @returns a integer
     */
    public get startpagesequencenumber() {
        return this._startpagesequencenumber;
    };
    /**
     * Sets the startpagesequencenumber property value. 
     * @param value Value to set for the startpagesequencenumber property.
     */
    public set startpagesequencenumber(value: number | undefined) {
        this._startpagesequencenumber = value;
    };
    /**
     * Gets the titleresourcestring property value. 
     * @returns a string
     */
    public get titleresourcestring() {
        return this._titleresourcestring;
    };
    /**
     * Sets the titleresourcestring property value. 
     * @param value Value to set for the titleresourcestring property.
     */
    public set titleresourcestring(value: string | undefined) {
        this._titleresourcestring = value;
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
    /**
     * Gets the webwizardid property value. 
     * @returns a string
     */
    public get webwizardid() {
        return this._webwizardid;
    };
    /**
     * Sets the webwizardid property value. 
     * @param value Value to set for the webwizardid property.
     */
    public set webwizardid(value: string | undefined) {
        this._webwizardid = value;
    };
    /**
     * Gets the webwizardidunique property value. 
     * @returns a string
     */
    public get webwizardidunique() {
        return this._webwizardidunique;
    };
    /**
     * Sets the webwizardidunique property value. 
     * @param value Value to set for the webwizardidunique property.
     */
    public set webwizardidunique(value: string | undefined) {
        this._webwizardidunique = value;
    };
    /**
     * Gets the wizardpageheight property value. 
     * @returns a integer
     */
    public get wizardpageheight() {
        return this._wizardpageheight;
    };
    /**
     * Sets the wizardpageheight property value. 
     * @param value Value to set for the wizardpageheight property.
     */
    public set wizardpageheight(value: number | undefined) {
        this._wizardpageheight = value;
    };
    /**
     * Gets the wizardpagewidth property value. 
     * @returns a integer
     */
    public get wizardpagewidth() {
        return this._wizardpagewidth;
    };
    /**
     * Sets the wizardpagewidth property value. 
     * @param value Value to set for the wizardpagewidth property.
     */
    public set wizardpagewidth(value: number | undefined) {
        this._wizardpagewidth = value;
    };
}
