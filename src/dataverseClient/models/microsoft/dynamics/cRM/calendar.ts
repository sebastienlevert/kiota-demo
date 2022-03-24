import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createCalendarruleFromDiscriminatorValue} from './createCalendarruleFromDiscriminatorValue';
import {createEquipmentFromDiscriminatorValue} from './createEquipmentFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSlaitemFromDiscriminatorValue} from './createSlaitemFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Calendarrule, Crmbaseentity, Equipment, Organization, Service, Sla, Slaitem, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Calendar extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __holidayschedulecalendarid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _businessUnit_Calendar?: Businessunit[] | undefined;
    private _businessunitid?: Businessunit | undefined;
    private _calendar_Annotation?: Annotation[] | undefined;
    private _calendar_AsyncOperations?: Asyncoperation[] | undefined;
    private _calendar_bookableresources?: Bookableresource[] | undefined;
    private _calendar_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _calendar_calendar_rules?: Calendarrule[] | undefined;
    private _calendar_customercalendar_holidaycalendar?: Calendar[] | undefined;
    private _calendar_equipment?: Equipment[] | undefined;
    private _calendar_organization?: Organization[] | undefined;
    private _calendar_services?: Service[] | undefined;
    private _calendar_slaitem?: Slaitem[] | undefined;
    private _calendar_system_users?: Systemuser[] | undefined;
    private _calendarid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _holidayschedulecalendarid?: Calendar | undefined;
    private _inner_calendar_calendar_rules?: Calendarrule[] | undefined;
    private _isshared?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _primaryuserid?: string | undefined;
    private _slabase_businesshoursid?: Sla[] | undefined;
    private _type?: number | undefined;
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
     * Gets the _holidayschedulecalendarid_value property value. 
     * @returns a string
     */
    public get _holidayschedulecalendarid_value() {
        return this.__holidayschedulecalendarid_value;
    };
    /**
     * Sets the _holidayschedulecalendarid_value property value. 
     * @param value Value to set for the _holidayschedulecalendarid_value property.
     */
    public set _holidayschedulecalendarid_value(value: string | undefined) {
        this.__holidayschedulecalendarid_value = value;
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
     * Gets the businessUnit_Calendar property value. 
     * @returns a businessunit
     */
    public get businessUnit_Calendar() {
        return this._businessUnit_Calendar;
    };
    /**
     * Sets the businessUnit_Calendar property value. 
     * @param value Value to set for the BusinessUnit_Calendar property.
     */
    public set businessUnit_Calendar(value: Businessunit[] | undefined) {
        this._businessUnit_Calendar = value;
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
     * Gets the calendar_Annotation property value. 
     * @returns a annotation
     */
    public get calendar_Annotation() {
        return this._calendar_Annotation;
    };
    /**
     * Sets the calendar_Annotation property value. 
     * @param value Value to set for the Calendar_Annotation property.
     */
    public set calendar_Annotation(value: Annotation[] | undefined) {
        this._calendar_Annotation = value;
    };
    /**
     * Gets the calendar_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get calendar_AsyncOperations() {
        return this._calendar_AsyncOperations;
    };
    /**
     * Sets the calendar_AsyncOperations property value. 
     * @param value Value to set for the Calendar_AsyncOperations property.
     */
    public set calendar_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._calendar_AsyncOperations = value;
    };
    /**
     * Gets the calendar_bookableresources property value. 
     * @returns a bookableresource
     */
    public get calendar_bookableresources() {
        return this._calendar_bookableresources;
    };
    /**
     * Sets the calendar_bookableresources property value. 
     * @param value Value to set for the calendar_bookableresources property.
     */
    public set calendar_bookableresources(value: Bookableresource[] | undefined) {
        this._calendar_bookableresources = value;
    };
    /**
     * Gets the calendar_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get calendar_BulkDeleteFailures() {
        return this._calendar_BulkDeleteFailures;
    };
    /**
     * Sets the calendar_BulkDeleteFailures property value. 
     * @param value Value to set for the Calendar_BulkDeleteFailures property.
     */
    public set calendar_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._calendar_BulkDeleteFailures = value;
    };
    /**
     * Gets the calendar_calendar_rules property value. 
     * @returns a calendarrule
     */
    public get calendar_calendar_rules() {
        return this._calendar_calendar_rules;
    };
    /**
     * Sets the calendar_calendar_rules property value. 
     * @param value Value to set for the calendar_calendar_rules property.
     */
    public set calendar_calendar_rules(value: Calendarrule[] | undefined) {
        this._calendar_calendar_rules = value;
    };
    /**
     * Gets the calendar_customercalendar_holidaycalendar property value. 
     * @returns a calendar
     */
    public get calendar_customercalendar_holidaycalendar() {
        return this._calendar_customercalendar_holidaycalendar;
    };
    /**
     * Sets the calendar_customercalendar_holidaycalendar property value. 
     * @param value Value to set for the calendar_customercalendar_holidaycalendar property.
     */
    public set calendar_customercalendar_holidaycalendar(value: Calendar[] | undefined) {
        this._calendar_customercalendar_holidaycalendar = value;
    };
    /**
     * Gets the calendar_equipment property value. 
     * @returns a equipment
     */
    public get calendar_equipment() {
        return this._calendar_equipment;
    };
    /**
     * Sets the calendar_equipment property value. 
     * @param value Value to set for the calendar_equipment property.
     */
    public set calendar_equipment(value: Equipment[] | undefined) {
        this._calendar_equipment = value;
    };
    /**
     * Gets the calendar_organization property value. 
     * @returns a organization
     */
    public get calendar_organization() {
        return this._calendar_organization;
    };
    /**
     * Sets the calendar_organization property value. 
     * @param value Value to set for the calendar_organization property.
     */
    public set calendar_organization(value: Organization[] | undefined) {
        this._calendar_organization = value;
    };
    /**
     * Gets the calendar_services property value. 
     * @returns a service
     */
    public get calendar_services() {
        return this._calendar_services;
    };
    /**
     * Sets the calendar_services property value. 
     * @param value Value to set for the calendar_services property.
     */
    public set calendar_services(value: Service[] | undefined) {
        this._calendar_services = value;
    };
    /**
     * Gets the calendar_slaitem property value. 
     * @returns a slaitem
     */
    public get calendar_slaitem() {
        return this._calendar_slaitem;
    };
    /**
     * Sets the calendar_slaitem property value. 
     * @param value Value to set for the calendar_slaitem property.
     */
    public set calendar_slaitem(value: Slaitem[] | undefined) {
        this._calendar_slaitem = value;
    };
    /**
     * Gets the calendar_system_users property value. 
     * @returns a systemuser
     */
    public get calendar_system_users() {
        return this._calendar_system_users;
    };
    /**
     * Sets the calendar_system_users property value. 
     * @param value Value to set for the calendar_system_users property.
     */
    public set calendar_system_users(value: Systemuser[] | undefined) {
        this._calendar_system_users = value;
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
     * Instantiates a new calendar and sets the default values.
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
            "_businessunitid_value": (o, n) => { (o as unknown as Calendar)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Calendar)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Calendar)._createdonbehalfby_value = n.getStringValue(); },
            "_holidayschedulecalendarid_value": (o, n) => { (o as unknown as Calendar)._holidayschedulecalendarid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Calendar)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Calendar)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Calendar)._organizationid_value = n.getStringValue(); },
            "businessUnit_Calendar": (o, n) => { (o as unknown as Calendar).businessUnit_Calendar = n.getCollectionOfObjectValues<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "businessunitid": (o, n) => { (o as unknown as Calendar).businessunitid = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "calendar_Annotation": (o, n) => { (o as unknown as Calendar).calendar_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "calendar_AsyncOperations": (o, n) => { (o as unknown as Calendar).calendar_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "calendar_bookableresources": (o, n) => { (o as unknown as Calendar).calendar_bookableresources = n.getCollectionOfObjectValues<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "calendar_BulkDeleteFailures": (o, n) => { (o as unknown as Calendar).calendar_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "calendar_calendar_rules": (o, n) => { (o as unknown as Calendar).calendar_calendar_rules = n.getCollectionOfObjectValues<Calendarrule>(createCalendarruleFromDiscriminatorValue); },
            "calendar_customercalendar_holidaycalendar": (o, n) => { (o as unknown as Calendar).calendar_customercalendar_holidaycalendar = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); },
            "calendar_equipment": (o, n) => { (o as unknown as Calendar).calendar_equipment = n.getCollectionOfObjectValues<Equipment>(createEquipmentFromDiscriminatorValue); },
            "calendar_organization": (o, n) => { (o as unknown as Calendar).calendar_organization = n.getCollectionOfObjectValues<Organization>(createOrganizationFromDiscriminatorValue); },
            "calendar_services": (o, n) => { (o as unknown as Calendar).calendar_services = n.getCollectionOfObjectValues<Service>(createServiceFromDiscriminatorValue); },
            "calendar_slaitem": (o, n) => { (o as unknown as Calendar).calendar_slaitem = n.getCollectionOfObjectValues<Slaitem>(createSlaitemFromDiscriminatorValue); },
            "calendar_system_users": (o, n) => { (o as unknown as Calendar).calendar_system_users = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "calendarid": (o, n) => { (o as unknown as Calendar).calendarid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Calendar).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Calendar).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Calendar).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Calendar).description = n.getStringValue(); },
            "holidayschedulecalendarid": (o, n) => { (o as unknown as Calendar).holidayschedulecalendarid = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "inner_calendar_calendar_rules": (o, n) => { (o as unknown as Calendar).inner_calendar_calendar_rules = n.getCollectionOfObjectValues<Calendarrule>(createCalendarruleFromDiscriminatorValue); },
            "isshared": (o, n) => { (o as unknown as Calendar).isshared = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Calendar).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Calendar).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Calendar).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Calendar).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Calendar).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "primaryuserid": (o, n) => { (o as unknown as Calendar).primaryuserid = n.getStringValue(); },
            "slabase_businesshoursid": (o, n) => { (o as unknown as Calendar).slabase_businesshoursid = n.getCollectionOfObjectValues<Sla>(createSlaFromDiscriminatorValue); },
            "type": (o, n) => { (o as unknown as Calendar).type = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Calendar).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the holidayschedulecalendarid property value. 
     * @returns a calendar
     */
    public get holidayschedulecalendarid() {
        return this._holidayschedulecalendarid;
    };
    /**
     * Sets the holidayschedulecalendarid property value. 
     * @param value Value to set for the holidayschedulecalendarid property.
     */
    public set holidayschedulecalendarid(value: Calendar | undefined) {
        this._holidayschedulecalendarid = value;
    };
    /**
     * Gets the inner_calendar_calendar_rules property value. 
     * @returns a calendarrule
     */
    public get inner_calendar_calendar_rules() {
        return this._inner_calendar_calendar_rules;
    };
    /**
     * Sets the inner_calendar_calendar_rules property value. 
     * @param value Value to set for the inner_calendar_calendar_rules property.
     */
    public set inner_calendar_calendar_rules(value: Calendarrule[] | undefined) {
        this._inner_calendar_calendar_rules = value;
    };
    /**
     * Gets the isshared property value. 
     * @returns a boolean
     */
    public get isshared() {
        return this._isshared;
    };
    /**
     * Sets the isshared property value. 
     * @param value Value to set for the isshared property.
     */
    public set isshared(value: boolean | undefined) {
        this._isshared = value;
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
     * Gets the primaryuserid property value. 
     * @returns a string
     */
    public get primaryuserid() {
        return this._primaryuserid;
    };
    /**
     * Sets the primaryuserid property value. 
     * @param value Value to set for the primaryuserid property.
     */
    public set primaryuserid(value: string | undefined) {
        this._primaryuserid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_holidayschedulecalendarid_value", this._holidayschedulecalendarid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeCollectionOfObjectValues<Businessunit>("businessUnit_Calendar", this.businessUnit_Calendar);
        writer.writeObjectValue<Businessunit>("businessunitid", this.businessunitid);
        writer.writeCollectionOfObjectValues<Annotation>("calendar_Annotation", this.calendar_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("calendar_AsyncOperations", this.calendar_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresource>("calendar_bookableresources", this.calendar_bookableresources);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("calendar_BulkDeleteFailures", this.calendar_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Calendarrule>("calendar_calendar_rules", this.calendar_calendar_rules);
        writer.writeCollectionOfObjectValues<Calendar>("calendar_customercalendar_holidaycalendar", this.calendar_customercalendar_holidaycalendar);
        writer.writeCollectionOfObjectValues<Equipment>("calendar_equipment", this.calendar_equipment);
        writer.writeCollectionOfObjectValues<Organization>("calendar_organization", this.calendar_organization);
        writer.writeCollectionOfObjectValues<Service>("calendar_services", this.calendar_services);
        writer.writeCollectionOfObjectValues<Slaitem>("calendar_slaitem", this.calendar_slaitem);
        writer.writeCollectionOfObjectValues<Systemuser>("calendar_system_users", this.calendar_system_users);
        writer.writeStringValue("calendarid", this.calendarid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<Calendar>("holidayschedulecalendarid", this.holidayschedulecalendarid);
        writer.writeCollectionOfObjectValues<Calendarrule>("inner_calendar_calendar_rules", this.inner_calendar_calendar_rules);
        writer.writeBooleanValue("isshared", this.isshared);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("primaryuserid", this.primaryuserid);
        writer.writeCollectionOfObjectValues<Sla>("slabase_businesshoursid", this.slabase_businesshoursid);
        writer.writeNumberValue("type", this.type);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the slabase_businesshoursid property value. 
     * @returns a sla
     */
    public get slabase_businesshoursid() {
        return this._slabase_businesshoursid;
    };
    /**
     * Sets the slabase_businesshoursid property value. 
     * @param value Value to set for the slabase_businesshoursid property.
     */
    public set slabase_businesshoursid(value: Sla[] | undefined) {
        this._slabase_businesshoursid = value;
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
