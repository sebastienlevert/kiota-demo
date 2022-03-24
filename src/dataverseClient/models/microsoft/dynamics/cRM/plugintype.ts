import {createCustomapiFromDiscriminatorValue} from './createCustomapiFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPluginassemblyFromDiscriminatorValue} from './createPluginassemblyFromDiscriminatorValue';
import {createPlugintypestatisticFromDiscriminatorValue} from './createPlugintypestatisticFromDiscriminatorValue';
import {createSdkmessageprocessingstepFromDiscriminatorValue} from './createSdkmessageprocessingstepFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Customapi, Organization, Pluginassembly, Plugintypestatistic, Sdkmessageprocessingstep, Service, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Plugintype extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __pluginassemblyid_value?: string | undefined;
    private _assemblyname?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _culture?: string | undefined;
    private _customAPIId?: Customapi[] | undefined;
    private _customizationlevel?: number | undefined;
    private _customworkflowactivityinfo?: string | undefined;
    private _description?: string | undefined;
    private _friendlyname?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _isworkflowactivity?: boolean | undefined;
    private _major?: number | undefined;
    private _minor?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _plugin_type_service?: Service[] | undefined;
    private _pluginassemblyid?: Pluginassembly | undefined;
    private _plugintype_plugintypestatistic?: Plugintypestatistic[] | undefined;
    private _plugintype_sdkmessageprocessingstep?: Sdkmessageprocessingstep[] | undefined;
    private _plugintypeid?: string | undefined;
    private _plugintypeid_sdkmessageprocessingstep?: Sdkmessageprocessingstep[] | undefined;
    private _plugintypeidunique?: string | undefined;
    private _publickeytoken?: string | undefined;
    private _solutionid?: string | undefined;
    private _typename?: string | undefined;
    private _version?: string | undefined;
    private _versionnumber?: number | undefined;
    private _workflowactivitygroupname?: string | undefined;
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
     * Gets the _pluginassemblyid_value property value. 
     * @returns a string
     */
    public get _pluginassemblyid_value() {
        return this.__pluginassemblyid_value;
    };
    /**
     * Sets the _pluginassemblyid_value property value. 
     * @param value Value to set for the _pluginassemblyid_value property.
     */
    public set _pluginassemblyid_value(value: string | undefined) {
        this.__pluginassemblyid_value = value;
    };
    /**
     * Gets the assemblyname property value. 
     * @returns a string
     */
    public get assemblyname() {
        return this._assemblyname;
    };
    /**
     * Sets the assemblyname property value. 
     * @param value Value to set for the assemblyname property.
     */
    public set assemblyname(value: string | undefined) {
        this._assemblyname = value;
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
     * Instantiates a new plugintype and sets the default values.
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
     * Gets the customAPIId property value. 
     * @returns a customapi
     */
    public get customAPIId() {
        return this._customAPIId;
    };
    /**
     * Sets the customAPIId property value. 
     * @param value Value to set for the CustomAPIId property.
     */
    public set customAPIId(value: Customapi[] | undefined) {
        this._customAPIId = value;
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
     * Gets the customworkflowactivityinfo property value. 
     * @returns a string
     */
    public get customworkflowactivityinfo() {
        return this._customworkflowactivityinfo;
    };
    /**
     * Sets the customworkflowactivityinfo property value. 
     * @param value Value to set for the customworkflowactivityinfo property.
     */
    public set customworkflowactivityinfo(value: string | undefined) {
        this._customworkflowactivityinfo = value;
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
     * Gets the friendlyname property value. 
     * @returns a string
     */
    public get friendlyname() {
        return this._friendlyname;
    };
    /**
     * Sets the friendlyname property value. 
     * @param value Value to set for the friendlyname property.
     */
    public set friendlyname(value: string | undefined) {
        this._friendlyname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Plugintype)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Plugintype)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Plugintype)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Plugintype)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Plugintype)._organizationid_value = n.getStringValue(); },
            "_pluginassemblyid_value": (o, n) => { (o as unknown as Plugintype)._pluginassemblyid_value = n.getStringValue(); },
            "assemblyname": (o, n) => { (o as unknown as Plugintype).assemblyname = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Plugintype).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Plugintype).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Plugintype).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Plugintype).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "culture": (o, n) => { (o as unknown as Plugintype).culture = n.getStringValue(); },
            "customAPIId": (o, n) => { (o as unknown as Plugintype).customAPIId = n.getCollectionOfObjectValues<Customapi>(createCustomapiFromDiscriminatorValue); },
            "customizationlevel": (o, n) => { (o as unknown as Plugintype).customizationlevel = n.getNumberValue(); },
            "customworkflowactivityinfo": (o, n) => { (o as unknown as Plugintype).customworkflowactivityinfo = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Plugintype).description = n.getStringValue(); },
            "friendlyname": (o, n) => { (o as unknown as Plugintype).friendlyname = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Plugintype).ismanaged = n.getBooleanValue(); },
            "isworkflowactivity": (o, n) => { (o as unknown as Plugintype).isworkflowactivity = n.getBooleanValue(); },
            "major": (o, n) => { (o as unknown as Plugintype).major = n.getNumberValue(); },
            "minor": (o, n) => { (o as unknown as Plugintype).minor = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Plugintype).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Plugintype).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Plugintype).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Plugintype).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Plugintype).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Plugintype).overwritetime = n.getDateValue(); },
            "plugin_type_service": (o, n) => { (o as unknown as Plugintype).plugin_type_service = n.getCollectionOfObjectValues<Service>(createServiceFromDiscriminatorValue); },
            "pluginassemblyid": (o, n) => { (o as unknown as Plugintype).pluginassemblyid = n.getObjectValue<Pluginassembly>(createPluginassemblyFromDiscriminatorValue); },
            "plugintype_plugintypestatistic": (o, n) => { (o as unknown as Plugintype).plugintype_plugintypestatistic = n.getCollectionOfObjectValues<Plugintypestatistic>(createPlugintypestatisticFromDiscriminatorValue); },
            "plugintype_sdkmessageprocessingstep": (o, n) => { (o as unknown as Plugintype).plugintype_sdkmessageprocessingstep = n.getCollectionOfObjectValues<Sdkmessageprocessingstep>(createSdkmessageprocessingstepFromDiscriminatorValue); },
            "plugintypeid": (o, n) => { (o as unknown as Plugintype).plugintypeid = n.getStringValue(); },
            "plugintypeid_sdkmessageprocessingstep": (o, n) => { (o as unknown as Plugintype).plugintypeid_sdkmessageprocessingstep = n.getCollectionOfObjectValues<Sdkmessageprocessingstep>(createSdkmessageprocessingstepFromDiscriminatorValue); },
            "plugintypeidunique": (o, n) => { (o as unknown as Plugintype).plugintypeidunique = n.getStringValue(); },
            "publickeytoken": (o, n) => { (o as unknown as Plugintype).publickeytoken = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Plugintype).solutionid = n.getStringValue(); },
            "typename": (o, n) => { (o as unknown as Plugintype).typename = n.getStringValue(); },
            "version": (o, n) => { (o as unknown as Plugintype).version = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Plugintype).versionnumber = n.getNumberValue(); },
            "workflowactivitygroupname": (o, n) => { (o as unknown as Plugintype).workflowactivitygroupname = n.getStringValue(); },
        };
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
     * Gets the isworkflowactivity property value. 
     * @returns a boolean
     */
    public get isworkflowactivity() {
        return this._isworkflowactivity;
    };
    /**
     * Sets the isworkflowactivity property value. 
     * @param value Value to set for the isworkflowactivity property.
     */
    public set isworkflowactivity(value: boolean | undefined) {
        this._isworkflowactivity = value;
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
     * Gets the plugin_type_service property value. 
     * @returns a service
     */
    public get plugin_type_service() {
        return this._plugin_type_service;
    };
    /**
     * Sets the plugin_type_service property value. 
     * @param value Value to set for the plugin_type_service property.
     */
    public set plugin_type_service(value: Service[] | undefined) {
        this._plugin_type_service = value;
    };
    /**
     * Gets the pluginassemblyid property value. 
     * @returns a pluginassembly
     */
    public get pluginassemblyid() {
        return this._pluginassemblyid;
    };
    /**
     * Sets the pluginassemblyid property value. 
     * @param value Value to set for the pluginassemblyid property.
     */
    public set pluginassemblyid(value: Pluginassembly | undefined) {
        this._pluginassemblyid = value;
    };
    /**
     * Gets the plugintype_plugintypestatistic property value. 
     * @returns a plugintypestatistic
     */
    public get plugintype_plugintypestatistic() {
        return this._plugintype_plugintypestatistic;
    };
    /**
     * Sets the plugintype_plugintypestatistic property value. 
     * @param value Value to set for the plugintype_plugintypestatistic property.
     */
    public set plugintype_plugintypestatistic(value: Plugintypestatistic[] | undefined) {
        this._plugintype_plugintypestatistic = value;
    };
    /**
     * Gets the plugintype_sdkmessageprocessingstep property value. 
     * @returns a sdkmessageprocessingstep
     */
    public get plugintype_sdkmessageprocessingstep() {
        return this._plugintype_sdkmessageprocessingstep;
    };
    /**
     * Sets the plugintype_sdkmessageprocessingstep property value. 
     * @param value Value to set for the plugintype_sdkmessageprocessingstep property.
     */
    public set plugintype_sdkmessageprocessingstep(value: Sdkmessageprocessingstep[] | undefined) {
        this._plugintype_sdkmessageprocessingstep = value;
    };
    /**
     * Gets the plugintypeid property value. 
     * @returns a string
     */
    public get plugintypeid() {
        return this._plugintypeid;
    };
    /**
     * Sets the plugintypeid property value. 
     * @param value Value to set for the plugintypeid property.
     */
    public set plugintypeid(value: string | undefined) {
        this._plugintypeid = value;
    };
    /**
     * Gets the plugintypeid_sdkmessageprocessingstep property value. 
     * @returns a sdkmessageprocessingstep
     */
    public get plugintypeid_sdkmessageprocessingstep() {
        return this._plugintypeid_sdkmessageprocessingstep;
    };
    /**
     * Sets the plugintypeid_sdkmessageprocessingstep property value. 
     * @param value Value to set for the plugintypeid_sdkmessageprocessingstep property.
     */
    public set plugintypeid_sdkmessageprocessingstep(value: Sdkmessageprocessingstep[] | undefined) {
        this._plugintypeid_sdkmessageprocessingstep = value;
    };
    /**
     * Gets the plugintypeidunique property value. 
     * @returns a string
     */
    public get plugintypeidunique() {
        return this._plugintypeidunique;
    };
    /**
     * Sets the plugintypeidunique property value. 
     * @param value Value to set for the plugintypeidunique property.
     */
    public set plugintypeidunique(value: string | undefined) {
        this._plugintypeidunique = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_pluginassemblyid_value", this._pluginassemblyid_value);
        writer.writeStringValue("assemblyname", this.assemblyname);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("culture", this.culture);
        writer.writeCollectionOfObjectValues<Customapi>("customAPIId", this.customAPIId);
        writer.writeNumberValue("customizationlevel", this.customizationlevel);
        writer.writeStringValue("customworkflowactivityinfo", this.customworkflowactivityinfo);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("friendlyname", this.friendlyname);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isworkflowactivity", this.isworkflowactivity);
        writer.writeNumberValue("major", this.major);
        writer.writeNumberValue("minor", this.minor);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Service>("plugin_type_service", this.plugin_type_service);
        writer.writeObjectValue<Pluginassembly>("pluginassemblyid", this.pluginassemblyid);
        writer.writeCollectionOfObjectValues<Plugintypestatistic>("plugintype_plugintypestatistic", this.plugintype_plugintypestatistic);
        writer.writeCollectionOfObjectValues<Sdkmessageprocessingstep>("plugintype_sdkmessageprocessingstep", this.plugintype_sdkmessageprocessingstep);
        writer.writeStringValue("plugintypeid", this.plugintypeid);
        writer.writeCollectionOfObjectValues<Sdkmessageprocessingstep>("plugintypeid_sdkmessageprocessingstep", this.plugintypeid_sdkmessageprocessingstep);
        writer.writeStringValue("plugintypeidunique", this.plugintypeidunique);
        writer.writeStringValue("publickeytoken", this.publickeytoken);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("typename", this.typename);
        writer.writeStringValue("version", this.version);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("workflowactivitygroupname", this.workflowactivitygroupname);
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
     * Gets the typename property value. 
     * @returns a string
     */
    public get typename() {
        return this._typename;
    };
    /**
     * Sets the typename property value. 
     * @param value Value to set for the typename property.
     */
    public set typename(value: string | undefined) {
        this._typename = value;
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
    /**
     * Gets the workflowactivitygroupname property value. 
     * @returns a string
     */
    public get workflowactivitygroupname() {
        return this._workflowactivitygroupname;
    };
    /**
     * Sets the workflowactivitygroupname property value. 
     * @param value Value to set for the workflowactivitygroupname property.
     */
    public set workflowactivitygroupname(value: string | undefined) {
        this._workflowactivitygroupname = value;
    };
}
