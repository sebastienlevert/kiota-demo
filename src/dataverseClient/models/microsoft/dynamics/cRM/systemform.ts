import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesstriggerFromDiscriminatorValue} from './createProcesstriggerFromDiscriminatorValue';
import {createSystemformFromDiscriminatorValue} from './createSystemformFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Organization, Processtrigger} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Systemform extends Crmbaseentity implements Parsable {
    private __ancestorformid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _ancestorformid?: Systemform | undefined;
    private _canbedeleted?: BooleanManagedProperty | undefined;
    private _componentstate?: number | undefined;
    private _description?: string | undefined;
    private _form_ancestor_form?: Systemform[] | undefined;
    private _formactivationstate?: number | undefined;
    private _formid?: string | undefined;
    private _formidunique?: string | undefined;
    private _formjson?: string | undefined;
    private _formpresentation?: number | undefined;
    private _formxml?: string | undefined;
    private _introducedversion?: string | undefined;
    private _isairmerged?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isdefault?: boolean | undefined;
    private _isdesktopenabled?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _istabletenabled?: boolean | undefined;
    private _name?: string | undefined;
    private _objecttypecode?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _processtrigger_systemform?: Processtrigger[] | undefined;
    private _publishedon?: Date | undefined;
    private _solutionid?: string | undefined;
    private _systemForm_AsyncOperations?: Asyncoperation[] | undefined;
    private _systemForm_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _type?: number | undefined;
    private _uniquename?: string | undefined;
    private _version?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _ancestorformid_value property value. 
     * @returns a string
     */
    public get _ancestorformid_value() {
        return this.__ancestorformid_value;
    };
    /**
     * Sets the _ancestorformid_value property value. 
     * @param value Value to set for the _ancestorformid_value property.
     */
    public set _ancestorformid_value(value: string | undefined) {
        this.__ancestorformid_value = value;
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
     * Gets the ancestorformid property value. 
     * @returns a systemform
     */
    public get ancestorformid() {
        return this._ancestorformid;
    };
    /**
     * Sets the ancestorformid property value. 
     * @param value Value to set for the ancestorformid property.
     */
    public set ancestorformid(value: Systemform | undefined) {
        this._ancestorformid = value;
    };
    /**
     * Gets the canbedeleted property value. 
     * @returns a BooleanManagedProperty
     */
    public get canbedeleted() {
        return this._canbedeleted;
    };
    /**
     * Sets the canbedeleted property value. 
     * @param value Value to set for the canbedeleted property.
     */
    public set canbedeleted(value: BooleanManagedProperty | undefined) {
        this._canbedeleted = value;
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
     * Instantiates a new systemform and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the form_ancestor_form property value. 
     * @returns a systemform
     */
    public get form_ancestor_form() {
        return this._form_ancestor_form;
    };
    /**
     * Sets the form_ancestor_form property value. 
     * @param value Value to set for the form_ancestor_form property.
     */
    public set form_ancestor_form(value: Systemform[] | undefined) {
        this._form_ancestor_form = value;
    };
    /**
     * Gets the formactivationstate property value. 
     * @returns a integer
     */
    public get formactivationstate() {
        return this._formactivationstate;
    };
    /**
     * Sets the formactivationstate property value. 
     * @param value Value to set for the formactivationstate property.
     */
    public set formactivationstate(value: number | undefined) {
        this._formactivationstate = value;
    };
    /**
     * Gets the formid property value. 
     * @returns a string
     */
    public get formid() {
        return this._formid;
    };
    /**
     * Sets the formid property value. 
     * @param value Value to set for the formid property.
     */
    public set formid(value: string | undefined) {
        this._formid = value;
    };
    /**
     * Gets the formidunique property value. 
     * @returns a string
     */
    public get formidunique() {
        return this._formidunique;
    };
    /**
     * Sets the formidunique property value. 
     * @param value Value to set for the formidunique property.
     */
    public set formidunique(value: string | undefined) {
        this._formidunique = value;
    };
    /**
     * Gets the formjson property value. 
     * @returns a string
     */
    public get formjson() {
        return this._formjson;
    };
    /**
     * Sets the formjson property value. 
     * @param value Value to set for the formjson property.
     */
    public set formjson(value: string | undefined) {
        this._formjson = value;
    };
    /**
     * Gets the formpresentation property value. 
     * @returns a integer
     */
    public get formpresentation() {
        return this._formpresentation;
    };
    /**
     * Sets the formpresentation property value. 
     * @param value Value to set for the formpresentation property.
     */
    public set formpresentation(value: number | undefined) {
        this._formpresentation = value;
    };
    /**
     * Gets the formxml property value. 
     * @returns a string
     */
    public get formxml() {
        return this._formxml;
    };
    /**
     * Sets the formxml property value. 
     * @param value Value to set for the formxml property.
     */
    public set formxml(value: string | undefined) {
        this._formxml = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_ancestorformid_value": (o, n) => { (o as unknown as Systemform)._ancestorformid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Systemform)._organizationid_value = n.getStringValue(); },
            "ancestorformid": (o, n) => { (o as unknown as Systemform).ancestorformid = n.getObjectValue<Systemform>(createSystemformFromDiscriminatorValue); },
            "canbedeleted": (o, n) => { (o as unknown as Systemform).canbedeleted = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Systemform).componentstate = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Systemform).description = n.getStringValue(); },
            "form_ancestor_form": (o, n) => { (o as unknown as Systemform).form_ancestor_form = n.getCollectionOfObjectValues<Systemform>(createSystemformFromDiscriminatorValue); },
            "formactivationstate": (o, n) => { (o as unknown as Systemform).formactivationstate = n.getNumberValue(); },
            "formid": (o, n) => { (o as unknown as Systemform).formid = n.getStringValue(); },
            "formidunique": (o, n) => { (o as unknown as Systemform).formidunique = n.getStringValue(); },
            "formjson": (o, n) => { (o as unknown as Systemform).formjson = n.getStringValue(); },
            "formpresentation": (o, n) => { (o as unknown as Systemform).formpresentation = n.getNumberValue(); },
            "formxml": (o, n) => { (o as unknown as Systemform).formxml = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Systemform).introducedversion = n.getStringValue(); },
            "isairmerged": (o, n) => { (o as unknown as Systemform).isairmerged = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Systemform).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isdefault": (o, n) => { (o as unknown as Systemform).isdefault = n.getBooleanValue(); },
            "isdesktopenabled": (o, n) => { (o as unknown as Systemform).isdesktopenabled = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Systemform).ismanaged = n.getBooleanValue(); },
            "istabletenabled": (o, n) => { (o as unknown as Systemform).istabletenabled = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Systemform).name = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Systemform).objecttypecode = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Systemform).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Systemform).overwritetime = n.getDateValue(); },
            "processtrigger_systemform": (o, n) => { (o as unknown as Systemform).processtrigger_systemform = n.getCollectionOfObjectValues<Processtrigger>(createProcesstriggerFromDiscriminatorValue); },
            "publishedon": (o, n) => { (o as unknown as Systemform).publishedon = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Systemform).solutionid = n.getStringValue(); },
            "systemForm_AsyncOperations": (o, n) => { (o as unknown as Systemform).systemForm_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "systemForm_BulkDeleteFailures": (o, n) => { (o as unknown as Systemform).systemForm_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "type": (o, n) => { (o as unknown as Systemform).type = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Systemform).uniquename = n.getStringValue(); },
            "version": (o, n) => { (o as unknown as Systemform).version = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Systemform).versionnumber = n.getNumberValue(); },
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
     * Gets the isairmerged property value. 
     * @returns a boolean
     */
    public get isairmerged() {
        return this._isairmerged;
    };
    /**
     * Sets the isairmerged property value. 
     * @param value Value to set for the isairmerged property.
     */
    public set isairmerged(value: boolean | undefined) {
        this._isairmerged = value;
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
     * Gets the isdesktopenabled property value. 
     * @returns a boolean
     */
    public get isdesktopenabled() {
        return this._isdesktopenabled;
    };
    /**
     * Sets the isdesktopenabled property value. 
     * @param value Value to set for the isdesktopenabled property.
     */
    public set isdesktopenabled(value: boolean | undefined) {
        this._isdesktopenabled = value;
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
     * Gets the istabletenabled property value. 
     * @returns a boolean
     */
    public get istabletenabled() {
        return this._istabletenabled;
    };
    /**
     * Sets the istabletenabled property value. 
     * @param value Value to set for the istabletenabled property.
     */
    public set istabletenabled(value: boolean | undefined) {
        this._istabletenabled = value;
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
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
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
     * Gets the processtrigger_systemform property value. 
     * @returns a processtrigger
     */
    public get processtrigger_systemform() {
        return this._processtrigger_systemform;
    };
    /**
     * Sets the processtrigger_systemform property value. 
     * @param value Value to set for the processtrigger_systemform property.
     */
    public set processtrigger_systemform(value: Processtrigger[] | undefined) {
        this._processtrigger_systemform = value;
    };
    /**
     * Gets the publishedon property value. 
     * @returns a Date
     */
    public get publishedon() {
        return this._publishedon;
    };
    /**
     * Sets the publishedon property value. 
     * @param value Value to set for the publishedon property.
     */
    public set publishedon(value: Date | undefined) {
        this._publishedon = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_ancestorformid_value", this._ancestorformid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemform>("ancestorformid", this.ancestorformid);
        writer.writeObjectValue<BooleanManagedProperty>("canbedeleted", this.canbedeleted);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<Systemform>("form_ancestor_form", this.form_ancestor_form);
        writer.writeNumberValue("formactivationstate", this.formactivationstate);
        writer.writeStringValue("formid", this.formid);
        writer.writeStringValue("formidunique", this.formidunique);
        writer.writeStringValue("formjson", this.formjson);
        writer.writeNumberValue("formpresentation", this.formpresentation);
        writer.writeStringValue("formxml", this.formxml);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("isairmerged", this.isairmerged);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeBooleanValue("isdesktopenabled", this.isdesktopenabled);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("istabletenabled", this.istabletenabled);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Processtrigger>("processtrigger_systemform", this.processtrigger_systemform);
        writer.writeDateValue("publishedon", this.publishedon);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("systemForm_AsyncOperations", this.systemForm_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("systemForm_BulkDeleteFailures", this.systemForm_BulkDeleteFailures);
        writer.writeNumberValue("type", this.type);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("version", this.version);
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
     * Gets the systemForm_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get systemForm_AsyncOperations() {
        return this._systemForm_AsyncOperations;
    };
    /**
     * Sets the systemForm_AsyncOperations property value. 
     * @param value Value to set for the SystemForm_AsyncOperations property.
     */
    public set systemForm_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._systemForm_AsyncOperations = value;
    };
    /**
     * Gets the systemForm_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get systemForm_BulkDeleteFailures() {
        return this._systemForm_BulkDeleteFailures;
    };
    /**
     * Sets the systemForm_BulkDeleteFailures property value. 
     * @param value Value to set for the SystemForm_BulkDeleteFailures property.
     */
    public set systemForm_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._systemForm_BulkDeleteFailures = value;
    };
    /**
     * Gets the type property value. 
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
    };
    /**
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
    };
    /**
     * Gets the version property value. 
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. 
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
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
