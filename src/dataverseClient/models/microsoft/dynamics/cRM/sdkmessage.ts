import {createCustomapiFromDiscriminatorValue} from './createCustomapiFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSdkmessagefilterFromDiscriminatorValue} from './createSdkmessagefilterFromDiscriminatorValue';
import {createSdkmessageprocessingstepFromDiscriminatorValue} from './createSdkmessageprocessingstepFromDiscriminatorValue';
import {createServiceplanmappingFromDiscriminatorValue} from './createServiceplanmappingFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Customapi, Organization, Sdkmessagefilter, Sdkmessageprocessingstep, Serviceplanmapping, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sdkmessage extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _autotransact?: boolean | undefined;
    private _availability?: number | undefined;
    private _categoryname?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customAPIId?: Customapi[] | undefined;
    private _customizationlevel?: number | undefined;
    private _executeprivilegename?: string | undefined;
    private _expand?: boolean | undefined;
    private _introducedversion?: string | undefined;
    private _isactive?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isprivate?: boolean | undefined;
    private _isreadonly?: boolean | undefined;
    private _isvalidforexecuteasync?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _sdkmessage_serviceplanmapping?: Serviceplanmapping[] | undefined;
    private _sdkmessageid?: string | undefined;
    private _sdkmessageid_sdkmessagefilter?: Sdkmessagefilter[] | undefined;
    private _sdkmessageid_sdkmessageprocessingstep?: Sdkmessageprocessingstep[] | undefined;
    private _sdkmessageidunique?: string | undefined;
    private _solutionid?: string | undefined;
    private _template?: boolean | undefined;
    private _throttlesettings?: string | undefined;
    private _versionnumber?: number | undefined;
    private _workflowsdkstepenabled?: boolean | undefined;
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
     * Gets the autotransact property value. 
     * @returns a boolean
     */
    public get autotransact() {
        return this._autotransact;
    };
    /**
     * Sets the autotransact property value. 
     * @param value Value to set for the autotransact property.
     */
    public set autotransact(value: boolean | undefined) {
        this._autotransact = value;
    };
    /**
     * Gets the availability property value. 
     * @returns a integer
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. 
     * @param value Value to set for the availability property.
     */
    public set availability(value: number | undefined) {
        this._availability = value;
    };
    /**
     * Gets the categoryname property value. 
     * @returns a string
     */
    public get categoryname() {
        return this._categoryname;
    };
    /**
     * Sets the categoryname property value. 
     * @param value Value to set for the categoryname property.
     */
    public set categoryname(value: string | undefined) {
        this._categoryname = value;
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
     * Instantiates a new sdkmessage and sets the default values.
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
     * Gets the executeprivilegename property value. 
     * @returns a string
     */
    public get executeprivilegename() {
        return this._executeprivilegename;
    };
    /**
     * Sets the executeprivilegename property value. 
     * @param value Value to set for the executeprivilegename property.
     */
    public set executeprivilegename(value: string | undefined) {
        this._executeprivilegename = value;
    };
    /**
     * Gets the expand property value. 
     * @returns a boolean
     */
    public get expand() {
        return this._expand;
    };
    /**
     * Sets the expand property value. 
     * @param value Value to set for the expand property.
     */
    public set expand(value: boolean | undefined) {
        this._expand = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Sdkmessage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sdkmessage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sdkmessage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sdkmessage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Sdkmessage)._organizationid_value = n.getStringValue(); },
            "autotransact": (o, n) => { (o as unknown as Sdkmessage).autotransact = n.getBooleanValue(); },
            "availability": (o, n) => { (o as unknown as Sdkmessage).availability = n.getNumberValue(); },
            "categoryname": (o, n) => { (o as unknown as Sdkmessage).categoryname = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Sdkmessage).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Sdkmessage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sdkmessage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sdkmessage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customAPIId": (o, n) => { (o as unknown as Sdkmessage).customAPIId = n.getCollectionOfObjectValues<Customapi>(createCustomapiFromDiscriminatorValue); },
            "customizationlevel": (o, n) => { (o as unknown as Sdkmessage).customizationlevel = n.getNumberValue(); },
            "executeprivilegename": (o, n) => { (o as unknown as Sdkmessage).executeprivilegename = n.getStringValue(); },
            "expand": (o, n) => { (o as unknown as Sdkmessage).expand = n.getBooleanValue(); },
            "introducedversion": (o, n) => { (o as unknown as Sdkmessage).introducedversion = n.getStringValue(); },
            "isactive": (o, n) => { (o as unknown as Sdkmessage).isactive = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Sdkmessage).ismanaged = n.getBooleanValue(); },
            "isprivate": (o, n) => { (o as unknown as Sdkmessage).isprivate = n.getBooleanValue(); },
            "isreadonly": (o, n) => { (o as unknown as Sdkmessage).isreadonly = n.getBooleanValue(); },
            "isvalidforexecuteasync": (o, n) => { (o as unknown as Sdkmessage).isvalidforexecuteasync = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Sdkmessage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sdkmessage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sdkmessage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Sdkmessage).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Sdkmessage).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Sdkmessage).overwritetime = n.getDateValue(); },
            "sdkmessage_serviceplanmapping": (o, n) => { (o as unknown as Sdkmessage).sdkmessage_serviceplanmapping = n.getCollectionOfObjectValues<Serviceplanmapping>(createServiceplanmappingFromDiscriminatorValue); },
            "sdkmessageid": (o, n) => { (o as unknown as Sdkmessage).sdkmessageid = n.getStringValue(); },
            "sdkmessageid_sdkmessagefilter": (o, n) => { (o as unknown as Sdkmessage).sdkmessageid_sdkmessagefilter = n.getCollectionOfObjectValues<Sdkmessagefilter>(createSdkmessagefilterFromDiscriminatorValue); },
            "sdkmessageid_sdkmessageprocessingstep": (o, n) => { (o as unknown as Sdkmessage).sdkmessageid_sdkmessageprocessingstep = n.getCollectionOfObjectValues<Sdkmessageprocessingstep>(createSdkmessageprocessingstepFromDiscriminatorValue); },
            "sdkmessageidunique": (o, n) => { (o as unknown as Sdkmessage).sdkmessageidunique = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Sdkmessage).solutionid = n.getStringValue(); },
            "template": (o, n) => { (o as unknown as Sdkmessage).template = n.getBooleanValue(); },
            "throttlesettings": (o, n) => { (o as unknown as Sdkmessage).throttlesettings = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Sdkmessage).versionnumber = n.getNumberValue(); },
            "workflowsdkstepenabled": (o, n) => { (o as unknown as Sdkmessage).workflowsdkstepenabled = n.getBooleanValue(); },
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
     * Gets the isactive property value. 
     * @returns a boolean
     */
    public get isactive() {
        return this._isactive;
    };
    /**
     * Sets the isactive property value. 
     * @param value Value to set for the isactive property.
     */
    public set isactive(value: boolean | undefined) {
        this._isactive = value;
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
     * Gets the isprivate property value. 
     * @returns a boolean
     */
    public get isprivate() {
        return this._isprivate;
    };
    /**
     * Sets the isprivate property value. 
     * @param value Value to set for the isprivate property.
     */
    public set isprivate(value: boolean | undefined) {
        this._isprivate = value;
    };
    /**
     * Gets the isreadonly property value. 
     * @returns a boolean
     */
    public get isreadonly() {
        return this._isreadonly;
    };
    /**
     * Sets the isreadonly property value. 
     * @param value Value to set for the isreadonly property.
     */
    public set isreadonly(value: boolean | undefined) {
        this._isreadonly = value;
    };
    /**
     * Gets the isvalidforexecuteasync property value. 
     * @returns a boolean
     */
    public get isvalidforexecuteasync() {
        return this._isvalidforexecuteasync;
    };
    /**
     * Sets the isvalidforexecuteasync property value. 
     * @param value Value to set for the isvalidforexecuteasync property.
     */
    public set isvalidforexecuteasync(value: boolean | undefined) {
        this._isvalidforexecuteasync = value;
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
     * Gets the sdkmessage_serviceplanmapping property value. 
     * @returns a serviceplanmapping
     */
    public get sdkmessage_serviceplanmapping() {
        return this._sdkmessage_serviceplanmapping;
    };
    /**
     * Sets the sdkmessage_serviceplanmapping property value. 
     * @param value Value to set for the sdkmessage_serviceplanmapping property.
     */
    public set sdkmessage_serviceplanmapping(value: Serviceplanmapping[] | undefined) {
        this._sdkmessage_serviceplanmapping = value;
    };
    /**
     * Gets the sdkmessageid property value. 
     * @returns a string
     */
    public get sdkmessageid() {
        return this._sdkmessageid;
    };
    /**
     * Sets the sdkmessageid property value. 
     * @param value Value to set for the sdkmessageid property.
     */
    public set sdkmessageid(value: string | undefined) {
        this._sdkmessageid = value;
    };
    /**
     * Gets the sdkmessageid_sdkmessagefilter property value. 
     * @returns a sdkmessagefilter
     */
    public get sdkmessageid_sdkmessagefilter() {
        return this._sdkmessageid_sdkmessagefilter;
    };
    /**
     * Sets the sdkmessageid_sdkmessagefilter property value. 
     * @param value Value to set for the sdkmessageid_sdkmessagefilter property.
     */
    public set sdkmessageid_sdkmessagefilter(value: Sdkmessagefilter[] | undefined) {
        this._sdkmessageid_sdkmessagefilter = value;
    };
    /**
     * Gets the sdkmessageid_sdkmessageprocessingstep property value. 
     * @returns a sdkmessageprocessingstep
     */
    public get sdkmessageid_sdkmessageprocessingstep() {
        return this._sdkmessageid_sdkmessageprocessingstep;
    };
    /**
     * Sets the sdkmessageid_sdkmessageprocessingstep property value. 
     * @param value Value to set for the sdkmessageid_sdkmessageprocessingstep property.
     */
    public set sdkmessageid_sdkmessageprocessingstep(value: Sdkmessageprocessingstep[] | undefined) {
        this._sdkmessageid_sdkmessageprocessingstep = value;
    };
    /**
     * Gets the sdkmessageidunique property value. 
     * @returns a string
     */
    public get sdkmessageidunique() {
        return this._sdkmessageidunique;
    };
    /**
     * Sets the sdkmessageidunique property value. 
     * @param value Value to set for the sdkmessageidunique property.
     */
    public set sdkmessageidunique(value: string | undefined) {
        this._sdkmessageidunique = value;
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
        writer.writeBooleanValue("autotransact", this.autotransact);
        writer.writeNumberValue("availability", this.availability);
        writer.writeStringValue("categoryname", this.categoryname);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Customapi>("customAPIId", this.customAPIId);
        writer.writeNumberValue("customizationlevel", this.customizationlevel);
        writer.writeStringValue("executeprivilegename", this.executeprivilegename);
        writer.writeBooleanValue("expand", this.expand);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("isactive", this.isactive);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isprivate", this.isprivate);
        writer.writeBooleanValue("isreadonly", this.isreadonly);
        writer.writeBooleanValue("isvalidforexecuteasync", this.isvalidforexecuteasync);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Serviceplanmapping>("sdkmessage_serviceplanmapping", this.sdkmessage_serviceplanmapping);
        writer.writeStringValue("sdkmessageid", this.sdkmessageid);
        writer.writeCollectionOfObjectValues<Sdkmessagefilter>("sdkmessageid_sdkmessagefilter", this.sdkmessageid_sdkmessagefilter);
        writer.writeCollectionOfObjectValues<Sdkmessageprocessingstep>("sdkmessageid_sdkmessageprocessingstep", this.sdkmessageid_sdkmessageprocessingstep);
        writer.writeStringValue("sdkmessageidunique", this.sdkmessageidunique);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeBooleanValue("template", this.template);
        writer.writeStringValue("throttlesettings", this.throttlesettings);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeBooleanValue("workflowsdkstepenabled", this.workflowsdkstepenabled);
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
     * Gets the template property value. 
     * @returns a boolean
     */
    public get template() {
        return this._template;
    };
    /**
     * Sets the template property value. 
     * @param value Value to set for the template property.
     */
    public set template(value: boolean | undefined) {
        this._template = value;
    };
    /**
     * Gets the throttlesettings property value. 
     * @returns a string
     */
    public get throttlesettings() {
        return this._throttlesettings;
    };
    /**
     * Sets the throttlesettings property value. 
     * @param value Value to set for the throttlesettings property.
     */
    public set throttlesettings(value: string | undefined) {
        this._throttlesettings = value;
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
     * Gets the workflowsdkstepenabled property value. 
     * @returns a boolean
     */
    public get workflowsdkstepenabled() {
        return this._workflowsdkstepenabled;
    };
    /**
     * Sets the workflowsdkstepenabled property value. 
     * @param value Value to set for the workflowsdkstepenabled property.
     */
    public set workflowsdkstepenabled(value: boolean | undefined) {
        this._workflowsdkstepenabled = value;
    };
}
