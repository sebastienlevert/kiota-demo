import {createCustomcontrolresourceFromDiscriminatorValue} from './createCustomcontrolresourceFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Customcontrolresource, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Customcontrol extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _authoringmanifest?: string | undefined;
    private _clientjson?: string | undefined;
    private _compatibledatatypes?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customcontrol_resource_id?: Customcontrolresource[] | undefined;
    private _customcontrolid?: string | undefined;
    private _customcontrolidunique?: string | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _manifest?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _supportedplatform?: string | undefined;
    private _version?: string | undefined;
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
     * Gets the authoringmanifest property value. 
     * @returns a string
     */
    public get authoringmanifest() {
        return this._authoringmanifest;
    };
    /**
     * Sets the authoringmanifest property value. 
     * @param value Value to set for the authoringmanifest property.
     */
    public set authoringmanifest(value: string | undefined) {
        this._authoringmanifest = value;
    };
    /**
     * Gets the clientjson property value. 
     * @returns a string
     */
    public get clientjson() {
        return this._clientjson;
    };
    /**
     * Sets the clientjson property value. 
     * @param value Value to set for the clientjson property.
     */
    public set clientjson(value: string | undefined) {
        this._clientjson = value;
    };
    /**
     * Gets the compatibledatatypes property value. 
     * @returns a string
     */
    public get compatibledatatypes() {
        return this._compatibledatatypes;
    };
    /**
     * Sets the compatibledatatypes property value. 
     * @param value Value to set for the compatibledatatypes property.
     */
    public set compatibledatatypes(value: string | undefined) {
        this._compatibledatatypes = value;
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
     * Instantiates a new customcontrol and sets the default values.
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
     * Gets the customcontrol_resource_id property value. 
     * @returns a customcontrolresource
     */
    public get customcontrol_resource_id() {
        return this._customcontrol_resource_id;
    };
    /**
     * Sets the customcontrol_resource_id property value. 
     * @param value Value to set for the customcontrol_resource_id property.
     */
    public set customcontrol_resource_id(value: Customcontrolresource[] | undefined) {
        this._customcontrol_resource_id = value;
    };
    /**
     * Gets the customcontrolid property value. 
     * @returns a string
     */
    public get customcontrolid() {
        return this._customcontrolid;
    };
    /**
     * Sets the customcontrolid property value. 
     * @param value Value to set for the customcontrolid property.
     */
    public set customcontrolid(value: string | undefined) {
        this._customcontrolid = value;
    };
    /**
     * Gets the customcontrolidunique property value. 
     * @returns a string
     */
    public get customcontrolidunique() {
        return this._customcontrolidunique;
    };
    /**
     * Sets the customcontrolidunique property value. 
     * @param value Value to set for the customcontrolidunique property.
     */
    public set customcontrolidunique(value: string | undefined) {
        this._customcontrolidunique = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Customcontrol)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Customcontrol)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Customcontrol)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Customcontrol)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Customcontrol)._organizationid_value = n.getStringValue(); },
            "authoringmanifest": (o, n) => { (o as unknown as Customcontrol).authoringmanifest = n.getStringValue(); },
            "clientjson": (o, n) => { (o as unknown as Customcontrol).clientjson = n.getStringValue(); },
            "compatibledatatypes": (o, n) => { (o as unknown as Customcontrol).compatibledatatypes = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Customcontrol).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Customcontrol).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Customcontrol).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Customcontrol).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customcontrol_resource_id": (o, n) => { (o as unknown as Customcontrol).customcontrol_resource_id = n.getCollectionOfObjectValues<Customcontrolresource>(createCustomcontrolresourceFromDiscriminatorValue); },
            "customcontrolid": (o, n) => { (o as unknown as Customcontrol).customcontrolid = n.getStringValue(); },
            "customcontrolidunique": (o, n) => { (o as unknown as Customcontrol).customcontrolidunique = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Customcontrol).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Customcontrol).ismanaged = n.getBooleanValue(); },
            "manifest": (o, n) => { (o as unknown as Customcontrol).manifest = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Customcontrol).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Customcontrol).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Customcontrol).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Customcontrol).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Customcontrol).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Customcontrol).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Customcontrol).solutionid = n.getStringValue(); },
            "supportedplatform": (o, n) => { (o as unknown as Customcontrol).supportedplatform = n.getStringValue(); },
            "version": (o, n) => { (o as unknown as Customcontrol).version = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Customcontrol).versionnumber = n.getNumberValue(); },
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
     * Gets the manifest property value. 
     * @returns a string
     */
    public get manifest() {
        return this._manifest;
    };
    /**
     * Sets the manifest property value. 
     * @param value Value to set for the manifest property.
     */
    public set manifest(value: string | undefined) {
        this._manifest = value;
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
        writer.writeStringValue("authoringmanifest", this.authoringmanifest);
        writer.writeStringValue("clientjson", this.clientjson);
        writer.writeStringValue("compatibledatatypes", this.compatibledatatypes);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Customcontrolresource>("customcontrol_resource_id", this.customcontrol_resource_id);
        writer.writeStringValue("customcontrolid", this.customcontrolid);
        writer.writeStringValue("customcontrolidunique", this.customcontrolidunique);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("manifest", this.manifest);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("supportedplatform", this.supportedplatform);
        writer.writeStringValue("version", this.version);
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
     * Gets the supportedplatform property value. 
     * @returns a string
     */
    public get supportedplatform() {
        return this._supportedplatform;
    };
    /**
     * Sets the supportedplatform property value. 
     * @param value Value to set for the supportedplatform property.
     */
    public set supportedplatform(value: string | undefined) {
        this._supportedplatform = value;
    };
    /**
     * Gets the version property value. 
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. 
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
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
