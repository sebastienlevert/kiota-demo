import {createAppconfigFromDiscriminatorValue} from './createAppconfigFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appconfig, Crmbaseentity, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Navigationsetting extends Crmbaseentity implements Parsable {
    private __appconfigid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _advancedsettingorder?: number | undefined;
    private _appconfigidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdon?: Date | undefined;
    private _description?: string | undefined;
    private _groupname?: string | undefined;
    private _iconresourceid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _name?: string | undefined;
    private _navigationsetting_appconfig?: Appconfig | undefined;
    private _navigationsetting_createdby?: Systemuser | undefined;
    private _navigationsetting_createdonbehalfby?: Systemuser | undefined;
    private _navigationsetting_modifiedby?: Systemuser | undefined;
    private _navigationsetting_modifiedonbehalfby?: Systemuser | undefined;
    private _navigationsettingid?: string | undefined;
    private _navigationsettingidunique?: string | undefined;
    private _objecttypecode?: number | undefined;
    private _organization_navigationsetting_navigationsetting?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _pageurl?: string | undefined;
    private _parentnavigationsettingid?: string | undefined;
    private _privileges?: number | undefined;
    private _progressstate?: boolean | undefined;
    private _quicksettingorder?: number | undefined;
    private _resourceid?: string | undefined;
    private _settingtype?: number | undefined;
    private _solutionid?: string | undefined;
    /**
     * Gets the _appconfigid_value property value. 
     * @returns a string
     */
    public get _appconfigid_value() {
        return this.__appconfigid_value;
    };
    /**
     * Sets the _appconfigid_value property value. 
     * @param value Value to set for the _appconfigid_value property.
     */
    public set _appconfigid_value(value: string | undefined) {
        this.__appconfigid_value = value;
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
     * Gets the advancedsettingorder property value. 
     * @returns a integer
     */
    public get advancedsettingorder() {
        return this._advancedsettingorder;
    };
    /**
     * Sets the advancedsettingorder property value. 
     * @param value Value to set for the advancedsettingorder property.
     */
    public set advancedsettingorder(value: number | undefined) {
        this._advancedsettingorder = value;
    };
    /**
     * Gets the appconfigidunique property value. 
     * @returns a string
     */
    public get appconfigidunique() {
        return this._appconfigidunique;
    };
    /**
     * Sets the appconfigidunique property value. 
     * @param value Value to set for the appconfigidunique property.
     */
    public set appconfigidunique(value: string | undefined) {
        this._appconfigidunique = value;
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
     * Instantiates a new navigationsetting and sets the default values.
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
            "_appconfigid_value": (o, n) => { (o as unknown as Navigationsetting)._appconfigid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Navigationsetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Navigationsetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Navigationsetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Navigationsetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Navigationsetting)._organizationid_value = n.getStringValue(); },
            "advancedsettingorder": (o, n) => { (o as unknown as Navigationsetting).advancedsettingorder = n.getNumberValue(); },
            "appconfigidunique": (o, n) => { (o as unknown as Navigationsetting).appconfigidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Navigationsetting).componentstate = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Navigationsetting).createdon = n.getDateValue(); },
            "description": (o, n) => { (o as unknown as Navigationsetting).description = n.getStringValue(); },
            "groupname": (o, n) => { (o as unknown as Navigationsetting).groupname = n.getStringValue(); },
            "iconresourceid": (o, n) => { (o as unknown as Navigationsetting).iconresourceid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Navigationsetting).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Navigationsetting).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Navigationsetting).ismanaged = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Navigationsetting).modifiedon = n.getDateValue(); },
            "name": (o, n) => { (o as unknown as Navigationsetting).name = n.getStringValue(); },
            "navigationsetting_appconfig": (o, n) => { (o as unknown as Navigationsetting).navigationsetting_appconfig = n.getObjectValue<Appconfig>(createAppconfigFromDiscriminatorValue); },
            "navigationsetting_createdby": (o, n) => { (o as unknown as Navigationsetting).navigationsetting_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "navigationsetting_createdonbehalfby": (o, n) => { (o as unknown as Navigationsetting).navigationsetting_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "navigationsetting_modifiedby": (o, n) => { (o as unknown as Navigationsetting).navigationsetting_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "navigationsetting_modifiedonbehalfby": (o, n) => { (o as unknown as Navigationsetting).navigationsetting_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "navigationsettingid": (o, n) => { (o as unknown as Navigationsetting).navigationsettingid = n.getStringValue(); },
            "navigationsettingidunique": (o, n) => { (o as unknown as Navigationsetting).navigationsettingidunique = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Navigationsetting).objecttypecode = n.getNumberValue(); },
            "organization_navigationsetting_navigationsetting": (o, n) => { (o as unknown as Navigationsetting).organization_navigationsetting_navigationsetting = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Navigationsetting).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Navigationsetting).overwritetime = n.getDateValue(); },
            "pageurl": (o, n) => { (o as unknown as Navigationsetting).pageurl = n.getStringValue(); },
            "parentnavigationsettingid": (o, n) => { (o as unknown as Navigationsetting).parentnavigationsettingid = n.getStringValue(); },
            "privileges": (o, n) => { (o as unknown as Navigationsetting).privileges = n.getNumberValue(); },
            "progressstate": (o, n) => { (o as unknown as Navigationsetting).progressstate = n.getBooleanValue(); },
            "quicksettingorder": (o, n) => { (o as unknown as Navigationsetting).quicksettingorder = n.getNumberValue(); },
            "resourceid": (o, n) => { (o as unknown as Navigationsetting).resourceid = n.getStringValue(); },
            "settingtype": (o, n) => { (o as unknown as Navigationsetting).settingtype = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Navigationsetting).solutionid = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupname property value. 
     * @returns a string
     */
    public get groupname() {
        return this._groupname;
    };
    /**
     * Sets the groupname property value. 
     * @param value Value to set for the groupname property.
     */
    public set groupname(value: string | undefined) {
        this._groupname = value;
    };
    /**
     * Gets the iconresourceid property value. 
     * @returns a string
     */
    public get iconresourceid() {
        return this._iconresourceid;
    };
    /**
     * Sets the iconresourceid property value. 
     * @param value Value to set for the iconresourceid property.
     */
    public set iconresourceid(value: string | undefined) {
        this._iconresourceid = value;
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the navigationsetting_appconfig property value. 
     * @returns a appconfig
     */
    public get navigationsetting_appconfig() {
        return this._navigationsetting_appconfig;
    };
    /**
     * Sets the navigationsetting_appconfig property value. 
     * @param value Value to set for the navigationsetting_appconfig property.
     */
    public set navigationsetting_appconfig(value: Appconfig | undefined) {
        this._navigationsetting_appconfig = value;
    };
    /**
     * Gets the navigationsetting_createdby property value. 
     * @returns a systemuser
     */
    public get navigationsetting_createdby() {
        return this._navigationsetting_createdby;
    };
    /**
     * Sets the navigationsetting_createdby property value. 
     * @param value Value to set for the navigationsetting_createdby property.
     */
    public set navigationsetting_createdby(value: Systemuser | undefined) {
        this._navigationsetting_createdby = value;
    };
    /**
     * Gets the navigationsetting_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get navigationsetting_createdonbehalfby() {
        return this._navigationsetting_createdonbehalfby;
    };
    /**
     * Sets the navigationsetting_createdonbehalfby property value. 
     * @param value Value to set for the navigationsetting_createdonbehalfby property.
     */
    public set navigationsetting_createdonbehalfby(value: Systemuser | undefined) {
        this._navigationsetting_createdonbehalfby = value;
    };
    /**
     * Gets the navigationsetting_modifiedby property value. 
     * @returns a systemuser
     */
    public get navigationsetting_modifiedby() {
        return this._navigationsetting_modifiedby;
    };
    /**
     * Sets the navigationsetting_modifiedby property value. 
     * @param value Value to set for the navigationsetting_modifiedby property.
     */
    public set navigationsetting_modifiedby(value: Systemuser | undefined) {
        this._navigationsetting_modifiedby = value;
    };
    /**
     * Gets the navigationsetting_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get navigationsetting_modifiedonbehalfby() {
        return this._navigationsetting_modifiedonbehalfby;
    };
    /**
     * Sets the navigationsetting_modifiedonbehalfby property value. 
     * @param value Value to set for the navigationsetting_modifiedonbehalfby property.
     */
    public set navigationsetting_modifiedonbehalfby(value: Systemuser | undefined) {
        this._navigationsetting_modifiedonbehalfby = value;
    };
    /**
     * Gets the navigationsettingid property value. 
     * @returns a string
     */
    public get navigationsettingid() {
        return this._navigationsettingid;
    };
    /**
     * Sets the navigationsettingid property value. 
     * @param value Value to set for the navigationsettingid property.
     */
    public set navigationsettingid(value: string | undefined) {
        this._navigationsettingid = value;
    };
    /**
     * Gets the navigationsettingidunique property value. 
     * @returns a string
     */
    public get navigationsettingidunique() {
        return this._navigationsettingidunique;
    };
    /**
     * Sets the navigationsettingidunique property value. 
     * @param value Value to set for the navigationsettingidunique property.
     */
    public set navigationsettingidunique(value: string | undefined) {
        this._navigationsettingidunique = value;
    };
    /**
     * Gets the objecttypecode property value. 
     * @returns a integer
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: number | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the organization_navigationsetting_navigationsetting property value. 
     * @returns a organization
     */
    public get organization_navigationsetting_navigationsetting() {
        return this._organization_navigationsetting_navigationsetting;
    };
    /**
     * Sets the organization_navigationsetting_navigationsetting property value. 
     * @param value Value to set for the organization_navigationsetting_navigationsetting property.
     */
    public set organization_navigationsetting_navigationsetting(value: Organization | undefined) {
        this._organization_navigationsetting_navigationsetting = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
     * Gets the pageurl property value. 
     * @returns a string
     */
    public get pageurl() {
        return this._pageurl;
    };
    /**
     * Sets the pageurl property value. 
     * @param value Value to set for the pageurl property.
     */
    public set pageurl(value: string | undefined) {
        this._pageurl = value;
    };
    /**
     * Gets the parentnavigationsettingid property value. 
     * @returns a string
     */
    public get parentnavigationsettingid() {
        return this._parentnavigationsettingid;
    };
    /**
     * Sets the parentnavigationsettingid property value. 
     * @param value Value to set for the parentnavigationsettingid property.
     */
    public set parentnavigationsettingid(value: string | undefined) {
        this._parentnavigationsettingid = value;
    };
    /**
     * Gets the privileges property value. 
     * @returns a integer
     */
    public get privileges() {
        return this._privileges;
    };
    /**
     * Sets the privileges property value. 
     * @param value Value to set for the privileges property.
     */
    public set privileges(value: number | undefined) {
        this._privileges = value;
    };
    /**
     * Gets the progressstate property value. 
     * @returns a boolean
     */
    public get progressstate() {
        return this._progressstate;
    };
    /**
     * Sets the progressstate property value. 
     * @param value Value to set for the progressstate property.
     */
    public set progressstate(value: boolean | undefined) {
        this._progressstate = value;
    };
    /**
     * Gets the quicksettingorder property value. 
     * @returns a integer
     */
    public get quicksettingorder() {
        return this._quicksettingorder;
    };
    /**
     * Sets the quicksettingorder property value. 
     * @param value Value to set for the quicksettingorder property.
     */
    public set quicksettingorder(value: number | undefined) {
        this._quicksettingorder = value;
    };
    /**
     * Gets the resourceid property value. 
     * @returns a string
     */
    public get resourceid() {
        return this._resourceid;
    };
    /**
     * Sets the resourceid property value. 
     * @param value Value to set for the resourceid property.
     */
    public set resourceid(value: string | undefined) {
        this._resourceid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_appconfigid_value", this._appconfigid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("advancedsettingorder", this.advancedsettingorder);
        writer.writeStringValue("appconfigidunique", this.appconfigidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("groupname", this.groupname);
        writer.writeStringValue("iconresourceid", this.iconresourceid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Appconfig>("navigationsetting_appconfig", this.navigationsetting_appconfig);
        writer.writeObjectValue<Systemuser>("navigationsetting_createdby", this.navigationsetting_createdby);
        writer.writeObjectValue<Systemuser>("navigationsetting_createdonbehalfby", this.navigationsetting_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("navigationsetting_modifiedby", this.navigationsetting_modifiedby);
        writer.writeObjectValue<Systemuser>("navigationsetting_modifiedonbehalfby", this.navigationsetting_modifiedonbehalfby);
        writer.writeStringValue("navigationsettingid", this.navigationsettingid);
        writer.writeStringValue("navigationsettingidunique", this.navigationsettingidunique);
        writer.writeNumberValue("objecttypecode", this.objecttypecode);
        writer.writeObjectValue<Organization>("organization_navigationsetting_navigationsetting", this.organization_navigationsetting_navigationsetting);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("pageurl", this.pageurl);
        writer.writeStringValue("parentnavigationsettingid", this.parentnavigationsettingid);
        writer.writeNumberValue("privileges", this.privileges);
        writer.writeBooleanValue("progressstate", this.progressstate);
        writer.writeNumberValue("quicksettingorder", this.quicksettingorder);
        writer.writeStringValue("resourceid", this.resourceid);
        writer.writeNumberValue("settingtype", this.settingtype);
        writer.writeStringValue("solutionid", this.solutionid);
    };
    /**
     * Gets the settingtype property value. 
     * @returns a integer
     */
    public get settingtype() {
        return this._settingtype;
    };
    /**
     * Sets the settingtype property value. 
     * @param value Value to set for the settingtype property.
     */
    public set settingtype(value: number | undefined) {
        this._settingtype = value;
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
}
