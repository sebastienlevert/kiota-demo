import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createResourceFromDiscriminatorValue} from './createResourceFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Calendar, Connection, Contact, Crmbaseentity, Duplicaterecord, Email, Mailboxtrackingfolder, Msdyn_organizationalunit, Organization, Principalobjectattributeaccess, Processsession, Resource, Site, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Equipment extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __calendarid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_organizationalunitid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __siteid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _businessunitid_businessunit?: Businessunit | undefined;
    private _businessunitid_systemuser?: Systemuser | undefined;
    private _calendarid?: Calendar | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _displayinserviceviews?: boolean | undefined;
    private _emailaddress?: string | undefined;
    private _equipment_accounts?: Account[] | undefined;
    private _equipment_activity_parties?: Activityparty[] | undefined;
    private _equipment_Annotation?: Annotation[] | undefined;
    private _equipment_AsyncOperations?: Asyncoperation[] | undefined;
    private _equipment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _equipment_connections1?: Connection[] | undefined;
    private _equipment_connections2?: Connection[] | undefined;
    private _equipment_contacts?: Contact[] | undefined;
    private _equipment_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _equipment_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _equipment_Email_EmailSender?: Email[] | undefined;
    private _equipment_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _equipment_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _equipment_ProcessSessions?: Processsession[] | undefined;
    private _equipment_resources?: Resource[] | undefined;
    private _equipment_SyncErrors?: Syncerror[] | undefined;
    private _equipmentid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _isdisabled?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_equipment_bookableresource_FacilityEquipmentId?: Bookableresource[] | undefined;
    private _msdyn_organizationalunitid?: Msdyn_organizationalunit | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _siteid?: Site | undefined;
    private _skills?: string | undefined;
    private _timezonecode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _calendarid_value property value. 
     * @returns a string
     */
    public get _calendarid_value() {
        return this.__calendarid_value;
    };
    /**
     * Sets the _calendarid_value property value. 
     * @param value Value to set for the _calendarid_value property.
     */
    public set _calendarid_value(value: string | undefined) {
        this.__calendarid_value = value;
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
     * Gets the _msdyn_organizationalunitid_value property value. 
     * @returns a string
     */
    public get _msdyn_organizationalunitid_value() {
        return this.__msdyn_organizationalunitid_value;
    };
    /**
     * Sets the _msdyn_organizationalunitid_value property value. 
     * @param value Value to set for the _msdyn_organizationalunitid_value property.
     */
    public set _msdyn_organizationalunitid_value(value: string | undefined) {
        this.__msdyn_organizationalunitid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the businessunitid_businessunit property value. 
     * @returns a businessunit
     */
    public get businessunitid_businessunit() {
        return this._businessunitid_businessunit;
    };
    /**
     * Sets the businessunitid_businessunit property value. 
     * @param value Value to set for the businessunitid_businessunit property.
     */
    public set businessunitid_businessunit(value: Businessunit | undefined) {
        this._businessunitid_businessunit = value;
    };
    /**
     * Gets the businessunitid_systemuser property value. 
     * @returns a systemuser
     */
    public get businessunitid_systemuser() {
        return this._businessunitid_systemuser;
    };
    /**
     * Sets the businessunitid_systemuser property value. 
     * @param value Value to set for the businessunitid_systemuser property.
     */
    public set businessunitid_systemuser(value: Systemuser | undefined) {
        this._businessunitid_systemuser = value;
    };
    /**
     * Gets the calendarid property value. 
     * @returns a calendar
     */
    public get calendarid() {
        return this._calendarid;
    };
    /**
     * Sets the calendarid property value. 
     * @param value Value to set for the calendarid property.
     */
    public set calendarid(value: Calendar | undefined) {
        this._calendarid = value;
    };
    /**
     * Instantiates a new equipment and sets the default values.
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
     * Gets the emailaddress property value. 
     * @returns a string
     */
    public get emailaddress() {
        return this._emailaddress;
    };
    /**
     * Sets the emailaddress property value. 
     * @param value Value to set for the emailaddress property.
     */
    public set emailaddress(value: string | undefined) {
        this._emailaddress = value;
    };
    /**
     * Gets the equipment_accounts property value. 
     * @returns a account
     */
    public get equipment_accounts() {
        return this._equipment_accounts;
    };
    /**
     * Sets the equipment_accounts property value. 
     * @param value Value to set for the equipment_accounts property.
     */
    public set equipment_accounts(value: Account[] | undefined) {
        this._equipment_accounts = value;
    };
    /**
     * Gets the equipment_activity_parties property value. 
     * @returns a activityparty
     */
    public get equipment_activity_parties() {
        return this._equipment_activity_parties;
    };
    /**
     * Sets the equipment_activity_parties property value. 
     * @param value Value to set for the equipment_activity_parties property.
     */
    public set equipment_activity_parties(value: Activityparty[] | undefined) {
        this._equipment_activity_parties = value;
    };
    /**
     * Gets the equipment_Annotation property value. 
     * @returns a annotation
     */
    public get equipment_Annotation() {
        return this._equipment_Annotation;
    };
    /**
     * Sets the equipment_Annotation property value. 
     * @param value Value to set for the Equipment_Annotation property.
     */
    public set equipment_Annotation(value: Annotation[] | undefined) {
        this._equipment_Annotation = value;
    };
    /**
     * Gets the equipment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get equipment_AsyncOperations() {
        return this._equipment_AsyncOperations;
    };
    /**
     * Sets the equipment_AsyncOperations property value. 
     * @param value Value to set for the Equipment_AsyncOperations property.
     */
    public set equipment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._equipment_AsyncOperations = value;
    };
    /**
     * Gets the equipment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get equipment_BulkDeleteFailures() {
        return this._equipment_BulkDeleteFailures;
    };
    /**
     * Sets the equipment_BulkDeleteFailures property value. 
     * @param value Value to set for the Equipment_BulkDeleteFailures property.
     */
    public set equipment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._equipment_BulkDeleteFailures = value;
    };
    /**
     * Gets the equipment_connections1 property value. 
     * @returns a connection
     */
    public get equipment_connections1() {
        return this._equipment_connections1;
    };
    /**
     * Sets the equipment_connections1 property value. 
     * @param value Value to set for the equipment_connections1 property.
     */
    public set equipment_connections1(value: Connection[] | undefined) {
        this._equipment_connections1 = value;
    };
    /**
     * Gets the equipment_connections2 property value. 
     * @returns a connection
     */
    public get equipment_connections2() {
        return this._equipment_connections2;
    };
    /**
     * Sets the equipment_connections2 property value. 
     * @param value Value to set for the equipment_connections2 property.
     */
    public set equipment_connections2(value: Connection[] | undefined) {
        this._equipment_connections2 = value;
    };
    /**
     * Gets the equipment_contacts property value. 
     * @returns a contact
     */
    public get equipment_contacts() {
        return this._equipment_contacts;
    };
    /**
     * Sets the equipment_contacts property value. 
     * @param value Value to set for the equipment_contacts property.
     */
    public set equipment_contacts(value: Contact[] | undefined) {
        this._equipment_contacts = value;
    };
    /**
     * Gets the equipment_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get equipment_DuplicateBaseRecord() {
        return this._equipment_DuplicateBaseRecord;
    };
    /**
     * Sets the equipment_DuplicateBaseRecord property value. 
     * @param value Value to set for the Equipment_DuplicateBaseRecord property.
     */
    public set equipment_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._equipment_DuplicateBaseRecord = value;
    };
    /**
     * Gets the equipment_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get equipment_DuplicateMatchingRecord() {
        return this._equipment_DuplicateMatchingRecord;
    };
    /**
     * Sets the equipment_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Equipment_DuplicateMatchingRecord property.
     */
    public set equipment_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._equipment_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the equipment_Email_EmailSender property value. 
     * @returns a email
     */
    public get equipment_Email_EmailSender() {
        return this._equipment_Email_EmailSender;
    };
    /**
     * Sets the equipment_Email_EmailSender property value. 
     * @param value Value to set for the Equipment_Email_EmailSender property.
     */
    public set equipment_Email_EmailSender(value: Email[] | undefined) {
        this._equipment_Email_EmailSender = value;
    };
    /**
     * Gets the equipment_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get equipment_MailboxTrackingFolders() {
        return this._equipment_MailboxTrackingFolders;
    };
    /**
     * Sets the equipment_MailboxTrackingFolders property value. 
     * @param value Value to set for the equipment_MailboxTrackingFolders property.
     */
    public set equipment_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._equipment_MailboxTrackingFolders = value;
    };
    /**
     * Gets the equipment_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get equipment_principalobjectattributeaccess() {
        return this._equipment_principalobjectattributeaccess;
    };
    /**
     * Sets the equipment_principalobjectattributeaccess property value. 
     * @param value Value to set for the equipment_principalobjectattributeaccess property.
     */
    public set equipment_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._equipment_principalobjectattributeaccess = value;
    };
    /**
     * Gets the equipment_ProcessSessions property value. 
     * @returns a processsession
     */
    public get equipment_ProcessSessions() {
        return this._equipment_ProcessSessions;
    };
    /**
     * Sets the equipment_ProcessSessions property value. 
     * @param value Value to set for the Equipment_ProcessSessions property.
     */
    public set equipment_ProcessSessions(value: Processsession[] | undefined) {
        this._equipment_ProcessSessions = value;
    };
    /**
     * Gets the equipment_resources property value. 
     * @returns a resource
     */
    public get equipment_resources() {
        return this._equipment_resources;
    };
    /**
     * Sets the equipment_resources property value. 
     * @param value Value to set for the equipment_resources property.
     */
    public set equipment_resources(value: Resource[] | undefined) {
        this._equipment_resources = value;
    };
    /**
     * Gets the equipment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get equipment_SyncErrors() {
        return this._equipment_SyncErrors;
    };
    /**
     * Sets the equipment_SyncErrors property value. 
     * @param value Value to set for the Equipment_SyncErrors property.
     */
    public set equipment_SyncErrors(value: Syncerror[] | undefined) {
        this._equipment_SyncErrors = value;
    };
    /**
     * Gets the equipmentid property value. 
     * @returns a string
     */
    public get equipmentid() {
        return this._equipmentid;
    };
    /**
     * Sets the equipmentid property value. 
     * @param value Value to set for the equipmentid property.
     */
    public set equipmentid(value: string | undefined) {
        this._equipmentid = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businessunitid_value": (o, n) => { (o as unknown as Equipment)._businessunitid_value = n.getStringValue(); },
            "_calendarid_value": (o, n) => { (o as unknown as Equipment)._calendarid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Equipment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Equipment)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Equipment)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Equipment)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_organizationalunitid_value": (o, n) => { (o as unknown as Equipment)._msdyn_organizationalunitid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Equipment)._organizationid_value = n.getStringValue(); },
            "_siteid_value": (o, n) => { (o as unknown as Equipment)._siteid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Equipment)._transactioncurrencyid_value = n.getStringValue(); },
            "businessunitid_businessunit": (o, n) => { (o as unknown as Equipment).businessunitid_businessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "businessunitid_systemuser": (o, n) => { (o as unknown as Equipment).businessunitid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "calendarid": (o, n) => { (o as unknown as Equipment).calendarid = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Equipment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Equipment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Equipment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Equipment).description = n.getStringValue(); },
            "displayinserviceviews": (o, n) => { (o as unknown as Equipment).displayinserviceviews = n.getBooleanValue(); },
            "emailaddress": (o, n) => { (o as unknown as Equipment).emailaddress = n.getStringValue(); },
            "equipment_accounts": (o, n) => { (o as unknown as Equipment).equipment_accounts = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "equipment_activity_parties": (o, n) => { (o as unknown as Equipment).equipment_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "equipment_Annotation": (o, n) => { (o as unknown as Equipment).equipment_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "equipment_AsyncOperations": (o, n) => { (o as unknown as Equipment).equipment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "equipment_BulkDeleteFailures": (o, n) => { (o as unknown as Equipment).equipment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "equipment_connections1": (o, n) => { (o as unknown as Equipment).equipment_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "equipment_connections2": (o, n) => { (o as unknown as Equipment).equipment_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "equipment_contacts": (o, n) => { (o as unknown as Equipment).equipment_contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "equipment_DuplicateBaseRecord": (o, n) => { (o as unknown as Equipment).equipment_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "equipment_DuplicateMatchingRecord": (o, n) => { (o as unknown as Equipment).equipment_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "equipment_Email_EmailSender": (o, n) => { (o as unknown as Equipment).equipment_Email_EmailSender = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "equipment_MailboxTrackingFolders": (o, n) => { (o as unknown as Equipment).equipment_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "equipment_principalobjectattributeaccess": (o, n) => { (o as unknown as Equipment).equipment_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "equipment_ProcessSessions": (o, n) => { (o as unknown as Equipment).equipment_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "equipment_resources": (o, n) => { (o as unknown as Equipment).equipment_resources = n.getCollectionOfObjectValues<Resource>(createResourceFromDiscriminatorValue); },
            "equipment_SyncErrors": (o, n) => { (o as unknown as Equipment).equipment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "equipmentid": (o, n) => { (o as unknown as Equipment).equipmentid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Equipment).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Equipment).importsequencenumber = n.getNumberValue(); },
            "isdisabled": (o, n) => { (o as unknown as Equipment).isdisabled = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Equipment).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Equipment).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Equipment).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_equipment_bookableresource_FacilityEquipmentId": (o, n) => { (o as unknown as Equipment).msdyn_equipment_bookableresource_FacilityEquipmentId = n.getCollectionOfObjectValues<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_organizationalunitid": (o, n) => { (o as unknown as Equipment).msdyn_organizationalunitid = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Equipment).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Equipment).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Equipment).overriddencreatedon = n.getDateValue(); },
            "siteid": (o, n) => { (o as unknown as Equipment).siteid = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
            "skills": (o, n) => { (o as unknown as Equipment).skills = n.getStringValue(); },
            "timezonecode": (o, n) => { (o as unknown as Equipment).timezonecode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Equipment).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Equipment).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Equipment).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Equipment).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_equipment_bookableresource_FacilityEquipmentId property value. 
     * @returns a bookableresource
     */
    public get msdyn_equipment_bookableresource_FacilityEquipmentId() {
        return this._msdyn_equipment_bookableresource_FacilityEquipmentId;
    };
    /**
     * Sets the msdyn_equipment_bookableresource_FacilityEquipmentId property value. 
     * @param value Value to set for the msdyn_equipment_bookableresource_FacilityEquipmentId property.
     */
    public set msdyn_equipment_bookableresource_FacilityEquipmentId(value: Bookableresource[] | undefined) {
        this._msdyn_equipment_bookableresource_FacilityEquipmentId = value;
    };
    /**
     * Gets the msdyn_organizationalunitid property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_organizationalunitid() {
        return this._msdyn_organizationalunitid;
    };
    /**
     * Sets the msdyn_organizationalunitid property value. 
     * @param value Value to set for the msdyn_organizationalunitid property.
     */
    public set msdyn_organizationalunitid(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_organizationalunitid = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_calendarid_value", this._calendarid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_organizationalunitid_value", this._msdyn_organizationalunitid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_siteid_value", this._siteid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Businessunit>("businessunitid_businessunit", this.businessunitid_businessunit);
        writer.writeObjectValue<Systemuser>("businessunitid_systemuser", this.businessunitid_systemuser);
        writer.writeObjectValue<Calendar>("calendarid", this.calendarid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("displayinserviceviews", this.displayinserviceviews);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeCollectionOfObjectValues<Account>("equipment_accounts", this.equipment_accounts);
        writer.writeCollectionOfObjectValues<Activityparty>("equipment_activity_parties", this.equipment_activity_parties);
        writer.writeCollectionOfObjectValues<Annotation>("equipment_Annotation", this.equipment_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("equipment_AsyncOperations", this.equipment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("equipment_BulkDeleteFailures", this.equipment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("equipment_connections1", this.equipment_connections1);
        writer.writeCollectionOfObjectValues<Connection>("equipment_connections2", this.equipment_connections2);
        writer.writeCollectionOfObjectValues<Contact>("equipment_contacts", this.equipment_contacts);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("equipment_DuplicateBaseRecord", this.equipment_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("equipment_DuplicateMatchingRecord", this.equipment_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("equipment_Email_EmailSender", this.equipment_Email_EmailSender);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("equipment_MailboxTrackingFolders", this.equipment_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("equipment_principalobjectattributeaccess", this.equipment_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("equipment_ProcessSessions", this.equipment_ProcessSessions);
        writer.writeCollectionOfObjectValues<Resource>("equipment_resources", this.equipment_resources);
        writer.writeCollectionOfObjectValues<Syncerror>("equipment_SyncErrors", this.equipment_SyncErrors);
        writer.writeStringValue("equipmentid", this.equipmentid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isdisabled", this.isdisabled);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Bookableresource>("msdyn_equipment_bookableresource_FacilityEquipmentId", this.msdyn_equipment_bookableresource_FacilityEquipmentId);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_organizationalunitid", this.msdyn_organizationalunitid);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Site>("siteid", this.siteid);
        writer.writeStringValue("skills", this.skills);
        writer.writeNumberValue("timezonecode", this.timezonecode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the skills property value. 
     * @returns a string
     */
    public get skills() {
        return this._skills;
    };
    /**
     * Sets the skills property value. 
     * @param value Value to set for the skills property.
     */
    public set skills(value: string | undefined) {
        this._skills = value;
    };
    /**
     * Gets the timezonecode property value. 
     * @returns a integer
     */
    public get timezonecode() {
        return this._timezonecode;
    };
    /**
     * Sets the timezonecode property value. 
     * @param value Value to set for the timezonecode property.
     */
    public set timezonecode(value: number | undefined) {
        this._timezonecode = value;
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
