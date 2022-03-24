import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createManagedidentityFromDiscriminatorValue} from './createManagedidentityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPluginpackageFromDiscriminatorValue} from './createPluginpackageFromDiscriminatorValue';
import {createPlugintypeFromDiscriminatorValue} from './createPlugintypeFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {BooleanManagedProperty, Crmbaseentity, Managedidentity, Organization, Pluginpackage, Plugintype, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Pluginassembly extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __managedidentityid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __packageid_value?: string | undefined;
    private _authtype?: number | undefined;
    private _componentstate?: number | undefined;
    private _content?: string | undefined;
    private _content_binary?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _culture?: string | undefined;
    private _customizationlevel?: number | undefined;
    private _description?: string | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ishidden?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _isolationmode?: number | undefined;
    private _ispasswordset?: boolean | undefined;
    private _major?: number | undefined;
    private _managedidentityid?: Managedidentity | undefined;
    private _minor?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _packageId?: Pluginpackage | undefined;
    private _password?: string | undefined;
    private _path?: string | undefined;
    private _pluginassembly_plugintype?: Plugintype[] | undefined;
    private _pluginassemblyid?: string | undefined;
    private _pluginassemblyidunique?: string | undefined;
    private _publickeytoken?: string | undefined;
    private _solutionid?: string | undefined;
    private _sourcehash?: string | undefined;
    private _sourcetype?: number | undefined;
    private _url?: string | undefined;
    private _username?: string | undefined;
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
     * Gets the _managedidentityid_value property value. 
     * @returns a string
     */
    public get _managedidentityid_value() {
        return this.__managedidentityid_value;
    };
    /**
     * Sets the _managedidentityid_value property value. 
     * @param value Value to set for the _managedidentityid_value property.
     */
    public set _managedidentityid_value(value: string | undefined) {
        this.__managedidentityid_value = value;
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
     * Gets the _packageid_value property value. 
     * @returns a string
     */
    public get _packageid_value() {
        return this.__packageid_value;
    };
    /**
     * Sets the _packageid_value property value. 
     * @param value Value to set for the _packageid_value property.
     */
    public set _packageid_value(value: string | undefined) {
        this.__packageid_value = value;
    };
    /**
     * Gets the authtype property value. 
     * @returns a integer
     */
    public get authtype() {
        return this._authtype;
    };
    /**
     * Sets the authtype property value. 
     * @param value Value to set for the authtype property.
     */
    public set authtype(value: number | undefined) {
        this._authtype = value;
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
     * Instantiates a new pluginassembly and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. 
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. 
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the content_binary property value. 
     * @returns a binary
     */
    public get content_binary() {
        return this._content_binary;
    };
    /**
     * Sets the content_binary property value. 
     * @param value Value to set for the content_binary property.
     */
    public set content_binary(value: string | undefined) {
        this._content_binary = value;
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
     * Gets the culture property value. 
     * @returns a string
     */
    public get culture() {
        return this._culture;
    };
    /**
     * Sets the culture property value. 
     * @param value Value to set for the culture property.
     */
    public set culture(value: string | undefined) {
        this._culture = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Pluginassembly)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Pluginassembly)._createdonbehalfby_value = n.getStringValue(); },
            "_managedidentityid_value": (o, n) => { (o as unknown as Pluginassembly)._managedidentityid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Pluginassembly)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Pluginassembly)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Pluginassembly)._organizationid_value = n.getStringValue(); },
            "_packageid_value": (o, n) => { (o as unknown as Pluginassembly)._packageid_value = n.getStringValue(); },
            "authtype": (o, n) => { (o as unknown as Pluginassembly).authtype = n.getNumberValue(); },
            "componentstate": (o, n) => { (o as unknown as Pluginassembly).componentstate = n.getNumberValue(); },
            "content": (o, n) => { (o as unknown as Pluginassembly).content = n.getStringValue(); },
            "content_binary": (o, n) => { (o as unknown as Pluginassembly).content_binary = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Pluginassembly).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Pluginassembly).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Pluginassembly).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "culture": (o, n) => { (o as unknown as Pluginassembly).culture = n.getStringValue(); },
            "customizationlevel": (o, n) => { (o as unknown as Pluginassembly).customizationlevel = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Pluginassembly).description = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Pluginassembly).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Pluginassembly).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ishidden": (o, n) => { (o as unknown as Pluginassembly).ishidden = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Pluginassembly).ismanaged = n.getBooleanValue(); },
            "isolationmode": (o, n) => { (o as unknown as Pluginassembly).isolationmode = n.getNumberValue(); },
            "ispasswordset": (o, n) => { (o as unknown as Pluginassembly).ispasswordset = n.getBooleanValue(); },
            "major": (o, n) => { (o as unknown as Pluginassembly).major = n.getNumberValue(); },
            "managedidentityid": (o, n) => { (o as unknown as Pluginassembly).managedidentityid = n.getObjectValue<Managedidentity>(createManagedidentityFromDiscriminatorValue); },
            "minor": (o, n) => { (o as unknown as Pluginassembly).minor = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Pluginassembly).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Pluginassembly).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Pluginassembly).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Pluginassembly).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Pluginassembly).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Pluginassembly).overwritetime = n.getDateValue(); },
            "packageId": (o, n) => { (o as unknown as Pluginassembly).packageId = n.getObjectValue<Pluginpackage>(createPluginpackageFromDiscriminatorValue); },
            "password": (o, n) => { (o as unknown as Pluginassembly).password = n.getStringValue(); },
            "path": (o, n) => { (o as unknown as Pluginassembly).path = n.getStringValue(); },
            "pluginassembly_plugintype": (o, n) => { (o as unknown as Pluginassembly).pluginassembly_plugintype = n.getCollectionOfObjectValues<Plugintype>(createPlugintypeFromDiscriminatorValue); },
            "pluginassemblyid": (o, n) => { (o as unknown as Pluginassembly).pluginassemblyid = n.getStringValue(); },
            "pluginassemblyidunique": (o, n) => { (o as unknown as Pluginassembly).pluginassemblyidunique = n.getStringValue(); },
            "publickeytoken": (o, n) => { (o as unknown as Pluginassembly).publickeytoken = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Pluginassembly).solutionid = n.getStringValue(); },
            "sourcehash": (o, n) => { (o as unknown as Pluginassembly).sourcehash = n.getStringValue(); },
            "sourcetype": (o, n) => { (o as unknown as Pluginassembly).sourcetype = n.getNumberValue(); },
            "url": (o, n) => { (o as unknown as Pluginassembly).url = n.getStringValue(); },
            "username": (o, n) => { (o as unknown as Pluginassembly).username = n.getStringValue(); },
            "version": (o, n) => { (o as unknown as Pluginassembly).version = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Pluginassembly).versionnumber = n.getNumberValue(); },
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
     * Gets the ishidden property value. 
     * @returns a BooleanManagedProperty
     */
    public get ishidden() {
        return this._ishidden;
    };
    /**
     * Sets the ishidden property value. 
     * @param value Value to set for the ishidden property.
     */
    public set ishidden(value: BooleanManagedProperty | undefined) {
        this._ishidden = value;
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
     * Gets the isolationmode property value. 
     * @returns a integer
     */
    public get isolationmode() {
        return this._isolationmode;
    };
    /**
     * Sets the isolationmode property value. 
     * @param value Value to set for the isolationmode property.
     */
    public set isolationmode(value: number | undefined) {
        this._isolationmode = value;
    };
    /**
     * Gets the ispasswordset property value. 
     * @returns a boolean
     */
    public get ispasswordset() {
        return this._ispasswordset;
    };
    /**
     * Sets the ispasswordset property value. 
     * @param value Value to set for the ispasswordset property.
     */
    public set ispasswordset(value: boolean | undefined) {
        this._ispasswordset = value;
    };
    /**
     * Gets the major property value. 
     * @returns a integer
     */
    public get major() {
        return this._major;
    };
    /**
     * Sets the major property value. 
     * @param value Value to set for the major property.
     */
    public set major(value: number | undefined) {
        this._major = value;
    };
    /**
     * Gets the managedidentityid property value. 
     * @returns a managedidentity
     */
    public get managedidentityid() {
        return this._managedidentityid;
    };
    /**
     * Sets the managedidentityid property value. 
     * @param value Value to set for the managedidentityid property.
     */
    public set managedidentityid(value: Managedidentity | undefined) {
        this._managedidentityid = value;
    };
    /**
     * Gets the minor property value. 
     * @returns a integer
     */
    public get minor() {
        return this._minor;
    };
    /**
     * Sets the minor property value. 
     * @param value Value to set for the minor property.
     */
    public set minor(value: number | undefined) {
        this._minor = value;
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
     * Gets the packageId property value. 
     * @returns a pluginpackage
     */
    public get packageId() {
        return this._packageId;
    };
    /**
     * Sets the packageId property value. 
     * @param value Value to set for the PackageId property.
     */
    public set packageId(value: Pluginpackage | undefined) {
        this._packageId = value;
    };
    /**
     * Gets the password property value. 
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. 
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Gets the path property value. 
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. 
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Gets the pluginassembly_plugintype property value. 
     * @returns a plugintype
     */
    public get pluginassembly_plugintype() {
        return this._pluginassembly_plugintype;
    };
    /**
     * Sets the pluginassembly_plugintype property value. 
     * @param value Value to set for the pluginassembly_plugintype property.
     */
    public set pluginassembly_plugintype(value: Plugintype[] | undefined) {
        this._pluginassembly_plugintype = value;
    };
    /**
     * Gets the pluginassemblyid property value. 
     * @returns a string
     */
    public get pluginassemblyid() {
        return this._pluginassemblyid;
    };
    /**
     * Sets the pluginassemblyid property value. 
     * @param value Value to set for the pluginassemblyid property.
     */
    public set pluginassemblyid(value: string | undefined) {
        this._pluginassemblyid = value;
    };
    /**
     * Gets the pluginassemblyidunique property value. 
     * @returns a string
     */
    public get pluginassemblyidunique() {
        return this._pluginassemblyidunique;
    };
    /**
     * Sets the pluginassemblyidunique property value. 
     * @param value Value to set for the pluginassemblyidunique property.
     */
    public set pluginassemblyidunique(value: string | undefined) {
        this._pluginassemblyidunique = value;
    };
    /**
     * Gets the publickeytoken property value. 
     * @returns a string
     */
    public get publickeytoken() {
        return this._publickeytoken;
    };
    /**
     * Sets the publickeytoken property value. 
     * @param value Value to set for the publickeytoken property.
     */
    public set publickeytoken(value: string | undefined) {
        this._publickeytoken = value;
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
        writer.writeStringValue("_managedidentityid_value", this._managedidentityid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_packageid_value", this._packageid_value);
        writer.writeNumberValue("authtype", this.authtype);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("content_binary", this.content_binary);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("culture", this.culture);
        writer.writeNumberValue("customizationlevel", this.customizationlevel);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeObjectValue<BooleanManagedProperty>("ishidden", this.ishidden);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeNumberValue("isolationmode", this.isolationmode);
        writer.writeBooleanValue("ispasswordset", this.ispasswordset);
        writer.writeNumberValue("major", this.major);
        writer.writeObjectValue<Managedidentity>("managedidentityid", this.managedidentityid);
        writer.writeNumberValue("minor", this.minor);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Pluginpackage>("packageId", this.packageId);
        writer.writeStringValue("password", this.password);
        writer.writeStringValue("path", this.path);
        writer.writeCollectionOfObjectValues<Plugintype>("pluginassembly_plugintype", this.pluginassembly_plugintype);
        writer.writeStringValue("pluginassemblyid", this.pluginassemblyid);
        writer.writeStringValue("pluginassemblyidunique", this.pluginassemblyidunique);
        writer.writeStringValue("publickeytoken", this.publickeytoken);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("sourcehash", this.sourcehash);
        writer.writeNumberValue("sourcetype", this.sourcetype);
        writer.writeStringValue("url", this.url);
        writer.writeStringValue("username", this.username);
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
     * Gets the sourcehash property value. 
     * @returns a string
     */
    public get sourcehash() {
        return this._sourcehash;
    };
    /**
     * Sets the sourcehash property value. 
     * @param value Value to set for the sourcehash property.
     */
    public set sourcehash(value: string | undefined) {
        this._sourcehash = value;
    };
    /**
     * Gets the sourcetype property value. 
     * @returns a integer
     */
    public get sourcetype() {
        return this._sourcetype;
    };
    /**
     * Sets the sourcetype property value. 
     * @param value Value to set for the sourcetype property.
     */
    public set sourcetype(value: number | undefined) {
        this._sourcetype = value;
    };
    /**
     * Gets the url property value. 
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. 
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
    /**
     * Gets the username property value. 
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. 
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
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
