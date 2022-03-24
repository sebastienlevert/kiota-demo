import {createAppconfiginstanceFromDiscriminatorValue} from './createAppconfiginstanceFromDiscriminatorValue';
import {createAppmoduleFromDiscriminatorValue} from './createAppmoduleFromDiscriminatorValue';
import {createNavigationsettingFromDiscriminatorValue} from './createNavigationsettingFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appconfiginstance, Appmodule, Crmbaseentity, Navigationsetting, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Appconfig extends Crmbaseentity implements Parsable {
    private __appmoduleid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _appconfig_appconfiginstance?: Appconfiginstance[] | undefined;
    private _appconfig_createdby?: Systemuser | undefined;
    private _appconfig_createdonbehalfby?: Systemuser | undefined;
    private _appconfig_modifiedby?: Systemuser | undefined;
    private _appconfig_modifiedonbehalfby?: Systemuser | undefined;
    private _appconfig_navigationsetting?: Navigationsetting[] | undefined;
    private _appconfigid?: string | undefined;
    private _appconfigidunique?: string | undefined;
    private _appconfigimportxml?: string | undefined;
    private _appmodule_appconfig?: Appmodule | undefined;
    private _componentstate?: number | undefined;
    private _createdon?: Date | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _organization_appconfig?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _appmoduleid_value property value. 
     * @returns a string
     */
    public get _appmoduleid_value() {
        return this.__appmoduleid_value;
    };
    /**
     * Sets the _appmoduleid_value property value. 
     * @param value Value to set for the _appmoduleid_value property.
     */
    public set _appmoduleid_value(value: string | undefined) {
        this.__appmoduleid_value = value;
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
     * Gets the appconfig_appconfiginstance property value. 
     * @returns a appconfiginstance
     */
    public get appconfig_appconfiginstance() {
        return this._appconfig_appconfiginstance;
    };
    /**
     * Sets the appconfig_appconfiginstance property value. 
     * @param value Value to set for the appconfig_appconfiginstance property.
     */
    public set appconfig_appconfiginstance(value: Appconfiginstance[] | undefined) {
        this._appconfig_appconfiginstance = value;
    };
    /**
     * Gets the appconfig_createdby property value. 
     * @returns a systemuser
     */
    public get appconfig_createdby() {
        return this._appconfig_createdby;
    };
    /**
     * Sets the appconfig_createdby property value. 
     * @param value Value to set for the appconfig_createdby property.
     */
    public set appconfig_createdby(value: Systemuser | undefined) {
        this._appconfig_createdby = value;
    };
    /**
     * Gets the appconfig_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get appconfig_createdonbehalfby() {
        return this._appconfig_createdonbehalfby;
    };
    /**
     * Sets the appconfig_createdonbehalfby property value. 
     * @param value Value to set for the appconfig_createdonbehalfby property.
     */
    public set appconfig_createdonbehalfby(value: Systemuser | undefined) {
        this._appconfig_createdonbehalfby = value;
    };
    /**
     * Gets the appconfig_modifiedby property value. 
     * @returns a systemuser
     */
    public get appconfig_modifiedby() {
        return this._appconfig_modifiedby;
    };
    /**
     * Sets the appconfig_modifiedby property value. 
     * @param value Value to set for the appconfig_modifiedby property.
     */
    public set appconfig_modifiedby(value: Systemuser | undefined) {
        this._appconfig_modifiedby = value;
    };
    /**
     * Gets the appconfig_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get appconfig_modifiedonbehalfby() {
        return this._appconfig_modifiedonbehalfby;
    };
    /**
     * Sets the appconfig_modifiedonbehalfby property value. 
     * @param value Value to set for the appconfig_modifiedonbehalfby property.
     */
    public set appconfig_modifiedonbehalfby(value: Systemuser | undefined) {
        this._appconfig_modifiedonbehalfby = value;
    };
    /**
     * Gets the appconfig_navigationsetting property value. 
     * @returns a navigationsetting
     */
    public get appconfig_navigationsetting() {
        return this._appconfig_navigationsetting;
    };
    /**
     * Sets the appconfig_navigationsetting property value. 
     * @param value Value to set for the appconfig_navigationsetting property.
     */
    public set appconfig_navigationsetting(value: Navigationsetting[] | undefined) {
        this._appconfig_navigationsetting = value;
    };
    /**
     * Gets the appconfigid property value. 
     * @returns a string
     */
    public get appconfigid() {
        return this._appconfigid;
    };
    /**
     * Sets the appconfigid property value. 
     * @param value Value to set for the appconfigid property.
     */
    public set appconfigid(value: string | undefined) {
        this._appconfigid = value;
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
     * Gets the appconfigimportxml property value. 
     * @returns a string
     */
    public get appconfigimportxml() {
        return this._appconfigimportxml;
    };
    /**
     * Sets the appconfigimportxml property value. 
     * @param value Value to set for the appconfigimportxml property.
     */
    public set appconfigimportxml(value: string | undefined) {
        this._appconfigimportxml = value;
    };
    /**
     * Gets the appmodule_appconfig property value. 
     * @returns a appmodule
     */
    public get appmodule_appconfig() {
        return this._appmodule_appconfig;
    };
    /**
     * Sets the appmodule_appconfig property value. 
     * @param value Value to set for the appmodule_appconfig property.
     */
    public set appmodule_appconfig(value: Appmodule | undefined) {
        this._appmodule_appconfig = value;
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
     * Instantiates a new appconfig and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_appmoduleid_value": (o, n) => { (o as unknown as Appconfig)._appmoduleid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Appconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Appconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Appconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Appconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Appconfig)._organizationid_value = n.getStringValue(); },
            "appconfig_appconfiginstance": (o, n) => { (o as unknown as Appconfig).appconfig_appconfiginstance = n.getCollectionOfObjectValues<Appconfiginstance>(createAppconfiginstanceFromDiscriminatorValue); },
            "appconfig_createdby": (o, n) => { (o as unknown as Appconfig).appconfig_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfig_createdonbehalfby": (o, n) => { (o as unknown as Appconfig).appconfig_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfig_modifiedby": (o, n) => { (o as unknown as Appconfig).appconfig_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfig_modifiedonbehalfby": (o, n) => { (o as unknown as Appconfig).appconfig_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfig_navigationsetting": (o, n) => { (o as unknown as Appconfig).appconfig_navigationsetting = n.getCollectionOfObjectValues<Navigationsetting>(createNavigationsettingFromDiscriminatorValue); },
            "appconfigid": (o, n) => { (o as unknown as Appconfig).appconfigid = n.getStringValue(); },
            "appconfigidunique": (o, n) => { (o as unknown as Appconfig).appconfigidunique = n.getStringValue(); },
            "appconfigimportxml": (o, n) => { (o as unknown as Appconfig).appconfigimportxml = n.getStringValue(); },
            "appmodule_appconfig": (o, n) => { (o as unknown as Appconfig).appmodule_appconfig = n.getObjectValue<Appmodule>(createAppmoduleFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Appconfig).componentstate = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Appconfig).createdon = n.getDateValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Appconfig).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Appconfig).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Appconfig).ismanaged = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Appconfig).modifiedon = n.getDateValue(); },
            "organization_appconfig": (o, n) => { (o as unknown as Appconfig).organization_appconfig = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Appconfig).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Appconfig).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Appconfig).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Appconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Appconfig).statuscode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Appconfig).versionnumber = n.getNumberValue(); },
        };
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
     * Gets the organization_appconfig property value. 
     * @returns a organization
     */
    public get organization_appconfig() {
        return this._organization_appconfig;
    };
    /**
     * Sets the organization_appconfig property value. 
     * @param value Value to set for the organization_appconfig property.
     */
    public set organization_appconfig(value: Organization | undefined) {
        this._organization_appconfig = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_appmoduleid_value", this._appmoduleid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeCollectionOfObjectValues<Appconfiginstance>("appconfig_appconfiginstance", this.appconfig_appconfiginstance);
        writer.writeObjectValue<Systemuser>("appconfig_createdby", this.appconfig_createdby);
        writer.writeObjectValue<Systemuser>("appconfig_createdonbehalfby", this.appconfig_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("appconfig_modifiedby", this.appconfig_modifiedby);
        writer.writeObjectValue<Systemuser>("appconfig_modifiedonbehalfby", this.appconfig_modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Navigationsetting>("appconfig_navigationsetting", this.appconfig_navigationsetting);
        writer.writeStringValue("appconfigid", this.appconfigid);
        writer.writeStringValue("appconfigidunique", this.appconfigidunique);
        writer.writeStringValue("appconfigimportxml", this.appconfigimportxml);
        writer.writeObjectValue<Appmodule>("appmodule_appconfig", this.appmodule_appconfig);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Organization>("organization_appconfig", this.organization_appconfig);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
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
