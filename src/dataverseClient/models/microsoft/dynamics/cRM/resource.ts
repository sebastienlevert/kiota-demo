import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createEquipmentFromDiscriminatorValue} from './createEquipmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createResourcespecFromDiscriminatorValue} from './createResourcespecFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Equipment, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Resourcespec, Site, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Resource extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __siteid_value?: string | undefined;
    private _businessunitid?: Businessunit | undefined;
    private _calendarid?: string | undefined;
    private _displayinserviceviews?: boolean | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _isdisabled?: boolean | undefined;
    private _name?: string | undefined;
    private _objecttypecode?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _resource_AsyncOperations?: Asyncoperation[] | undefined;
    private _resource_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _resource_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _resource_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _resource_SyncErrors?: Syncerror[] | undefined;
    private _resourceid?: string | undefined;
    private _resourceid_equipment?: Equipment | undefined;
    private _resourceid_resourcespec?: Resourcespec | undefined;
    private _resourceid_systemuser?: Systemuser | undefined;
    private _siteid?: Site | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _businessunitid_value property value. 
     * @returns a string
     */
    public get _businessunitid_value() {
        return this.__businessunitid_value;
    };
    /**
     * Sets the _businessunitid_value property value. 
     * @param value Value to set for the _businessunitid_value property.
     */
    public set _businessunitid_value(value: string | undefined) {
        this.__businessunitid_value = value;
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
     * Gets the _siteid_value property value. 
     * @returns a string
     */
    public get _siteid_value() {
        return this.__siteid_value;
    };
    /**
     * Sets the _siteid_value property value. 
     * @param value Value to set for the _siteid_value property.
     */
    public set _siteid_value(value: string | undefined) {
        this.__siteid_value = value;
    };
    /**
     * Gets the businessunitid property value. 
     * @returns a businessunit
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: Businessunit | undefined) {
        this._businessunitid = value;
    };
    /**
     * Gets the calendarid property value. 
     * @returns a string
     */
    public get calendarid() {
        return this._calendarid;
    };
    /**
     * Sets the calendarid property value. 
     * @param value Value to set for the calendarid property.
     */
    public set calendarid(value: string | undefined) {
        this._calendarid = value;
    };
    /**
     * Instantiates a new resource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayinserviceviews property value. 
     * @returns a boolean
     */
    public get displayinserviceviews() {
        return this._displayinserviceviews;
    };
    /**
     * Sets the displayinserviceviews property value. 
     * @param value Value to set for the displayinserviceviews property.
     */
    public set displayinserviceviews(value: boolean | undefined) {
        this._displayinserviceviews = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businessunitid_value": (o, n) => { (o as unknown as Resource)._businessunitid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Resource)._organizationid_value = n.getStringValue(); },
            "_siteid_value": (o, n) => { (o as unknown as Resource)._siteid_value = n.getStringValue(); },
            "businessunitid": (o, n) => { (o as unknown as Resource).businessunitid = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "calendarid": (o, n) => { (o as unknown as Resource).calendarid = n.getStringValue(); },
            "displayinserviceviews": (o, n) => { (o as unknown as Resource).displayinserviceviews = n.getBooleanValue(); },
            "entityimage": (o, n) => { (o as unknown as Resource).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Resource).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Resource).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Resource).entityimageid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Resource).importsequencenumber = n.getNumberValue(); },
            "isdisabled": (o, n) => { (o as unknown as Resource).isdisabled = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Resource).name = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Resource).objecttypecode = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Resource).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Resource).overriddencreatedon = n.getDateValue(); },
            "resource_AsyncOperations": (o, n) => { (o as unknown as Resource).resource_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "resource_BulkDeleteFailures": (o, n) => { (o as unknown as Resource).resource_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "resource_MailboxTrackingFolders": (o, n) => { (o as unknown as Resource).resource_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "resource_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Resource).resource_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "resource_SyncErrors": (o, n) => { (o as unknown as Resource).resource_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "resourceid": (o, n) => { (o as unknown as Resource).resourceid = n.getStringValue(); },
            "resourceid_equipment": (o, n) => { (o as unknown as Resource).resourceid_equipment = n.getObjectValue<Equipment>(createEquipmentFromDiscriminatorValue); },
            "resourceid_resourcespec": (o, n) => { (o as unknown as Resource).resourceid_resourcespec = n.getObjectValue<Resourcespec>(createResourcespecFromDiscriminatorValue); },
            "resourceid_systemuser": (o, n) => { (o as unknown as Resource).resourceid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "siteid": (o, n) => { (o as unknown as Resource).siteid = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Resource).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Resource).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Resource).versionnumber = n.getNumberValue(); },
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
     * Gets the isdisabled property value. 
     * @returns a boolean
     */
    public get isdisabled() {
        return this._isdisabled;
    };
    /**
     * Sets the isdisabled property value. 
     * @param value Value to set for the isdisabled property.
     */
    public set isdisabled(value: boolean | undefined) {
        this._isdisabled = value;
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
     * Gets the resource_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get resource_AsyncOperations() {
        return this._resource_AsyncOperations;
    };
    /**
     * Sets the resource_AsyncOperations property value. 
     * @param value Value to set for the Resource_AsyncOperations property.
     */
    public set resource_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._resource_AsyncOperations = value;
    };
    /**
     * Gets the resource_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get resource_BulkDeleteFailures() {
        return this._resource_BulkDeleteFailures;
    };
    /**
     * Sets the resource_BulkDeleteFailures property value. 
     * @param value Value to set for the Resource_BulkDeleteFailures property.
     */
    public set resource_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._resource_BulkDeleteFailures = value;
    };
    /**
     * Gets the resource_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get resource_MailboxTrackingFolders() {
        return this._resource_MailboxTrackingFolders;
    };
    /**
     * Sets the resource_MailboxTrackingFolders property value. 
     * @param value Value to set for the resource_MailboxTrackingFolders property.
     */
    public set resource_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._resource_MailboxTrackingFolders = value;
    };
    /**
     * Gets the resource_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get resource_PrincipalObjectAttributeAccesses() {
        return this._resource_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the resource_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the resource_PrincipalObjectAttributeAccesses property.
     */
    public set resource_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._resource_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the resource_SyncErrors property value. 
     * @returns a syncerror
     */
    public get resource_SyncErrors() {
        return this._resource_SyncErrors;
    };
    /**
     * Sets the resource_SyncErrors property value. 
     * @param value Value to set for the Resource_SyncErrors property.
     */
    public set resource_SyncErrors(value: Syncerror[] | undefined) {
        this._resource_SyncErrors = value;
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
     * Gets the resourceid_equipment property value. 
     * @returns a equipment
     */
    public get resourceid_equipment() {
        return this._resourceid_equipment;
    };
    /**
     * Sets the resourceid_equipment property value. 
     * @param value Value to set for the resourceid_equipment property.
     */
    public set resourceid_equipment(value: Equipment | undefined) {
        this._resourceid_equipment = value;
    };
    /**
     * Gets the resourceid_resourcespec property value. 
     * @returns a resourcespec
     */
    public get resourceid_resourcespec() {
        return this._resourceid_resourcespec;
    };
    /**
     * Sets the resourceid_resourcespec property value. 
     * @param value Value to set for the resourceid_resourcespec property.
     */
    public set resourceid_resourcespec(value: Resourcespec | undefined) {
        this._resourceid_resourcespec = value;
    };
    /**
     * Gets the resourceid_systemuser property value. 
     * @returns a systemuser
     */
    public get resourceid_systemuser() {
        return this._resourceid_systemuser;
    };
    /**
     * Sets the resourceid_systemuser property value. 
     * @param value Value to set for the resourceid_systemuser property.
     */
    public set resourceid_systemuser(value: Systemuser | undefined) {
        this._resourceid_systemuser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_siteid_value", this._siteid_value);
        writer.writeObjectValue<Businessunit>("businessunitid", this.businessunitid);
        writer.writeStringValue("calendarid", this.calendarid);
        writer.writeBooleanValue("displayinserviceviews", this.displayinserviceviews);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isdisabled", this.isdisabled);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeCollectionOfObjectValues<Asyncoperation>("resource_AsyncOperations", this.resource_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("resource_BulkDeleteFailures", this.resource_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("resource_MailboxTrackingFolders", this.resource_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("resource_PrincipalObjectAttributeAccesses", this.resource_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("resource_SyncErrors", this.resource_SyncErrors);
        writer.writeStringValue("resourceid", this.resourceid);
        writer.writeObjectValue<Equipment>("resourceid_equipment", this.resourceid_equipment);
        writer.writeObjectValue<Resourcespec>("resourceid_resourcespec", this.resourceid_resourcespec);
        writer.writeObjectValue<Systemuser>("resourceid_systemuser", this.resourceid_systemuser);
        writer.writeObjectValue<Site>("siteid", this.siteid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the siteid property value. 
     * @returns a site
     */
    public get siteid() {
        return this._siteid;
    };
    /**
     * Sets the siteid property value. 
     * @param value Value to set for the siteid property.
     */
    public set siteid(value: Site | undefined) {
        this._siteid = value;
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
