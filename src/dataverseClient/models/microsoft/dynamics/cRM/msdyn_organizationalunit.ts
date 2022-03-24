import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEquipmentFromDiscriminatorValue} from './createEquipmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_estimatelineFromDiscriminatorValue} from './createMsdyn_estimatelineFromDiscriminatorValue';
import {createMsdyn_expenseFromDiscriminatorValue} from './createMsdyn_expenseFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_opportunitylinetransactionFromDiscriminatorValue} from './createMsdyn_opportunitylinetransactionFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionFromDiscriminatorValue} from './createMsdyn_orderlinetransactionFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projectparameterFromDiscriminatorValue} from './createMsdyn_projectparameterFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_projectteamFromDiscriminatorValue} from './createMsdyn_projectteamFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionFromDiscriminatorValue} from './createMsdyn_quotelinetransactionFromDiscriminatorValue';
import {createMsdyn_requirementorganizationunitFromDiscriminatorValue} from './createMsdyn_requirementorganizationunitFromDiscriminatorValue';
import {createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue} from './createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue';
import {createMsdyn_resourcecategorypricelevelFromDiscriminatorValue} from './createMsdyn_resourcecategorypricelevelFromDiscriminatorValue';
import {createMsdyn_timeentryFromDiscriminatorValue} from './createMsdyn_timeentryFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Equipment, Mailboxtrackingfolder, Msdyn_actual, Msdyn_estimateline, Msdyn_expense, Msdyn_invoicelinetransaction, Msdyn_journalline, Msdyn_opportunitylinetransaction, Msdyn_orderlinetransaction, Msdyn_project, Msdyn_projectparameter, Msdyn_projecttask, Msdyn_projectteam, Msdyn_quotelinetransaction, Msdyn_requirementorganizationunit, Msdyn_resourcecategorymarkuppricelevel, Msdyn_resourcecategorypricelevel, Msdyn_timeentry, Opportunity, Organization, Pricelevel, Principalobjectattributeaccess, Processsession, Quote, Salesorder, Serviceappointment, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_organizationalunit extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_currency_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_currency?: Transactioncurrency | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_msdyn_organizationalunit_bookableresource_organizationalunit?: Bookableresource[] | undefined;
    private _msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId?: Msdyn_actual[] | undefined;
    private _msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId?: Msdyn_journalline[] | undefined;
    private _msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit?: Msdyn_projectteam[] | undefined;
    private _msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit?: Msdyn_resourcecategorymarkuppricelevel[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_organizationalunit_actual?: Msdyn_actual[] | undefined;
    private _msdyn_organizationalunit_Annotations?: Annotation[] | undefined;
    private _msdyn_organizationalunit_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_organizationalunit_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_organizationalunit_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_organizationalunit_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_organizationalunit_equipment?: Equipment[] | undefined;
    private _msdyn_organizationalunit_estimateline?: Msdyn_estimateline[] | undefined;
    private _msdyn_organizationalunit_expense?: Msdyn_expense[] | undefined;
    private _msdyn_organizationalunit_invoicelinetransaction?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_organizationalunit_journalline?: Msdyn_journalline[] | undefined;
    private _msdyn_organizationalunit_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension?: Msdyn_projecttask[] | undefined;
    private _msdyn_organizationalunit_opportunity?: Opportunity[] | undefined;
    private _msdyn_organizationalunit_opportunitylinedetail?: Msdyn_opportunitylinetransaction[] | undefined;
    private _msdyn_organizationalunit_orderlinetransaction?: Msdyn_orderlinetransaction[] | undefined;
    private _msdyn_organizationalunit_pricelevel?: Pricelevel[] | undefined;
    private _msdyn_organizationalunit_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_organizationalunit_ProcessSession?: Processsession[] | undefined;
    private _msdyn_organizationalunit_project?: Msdyn_project[] | undefined;
    private _msdyn_organizationalunit_projecttask?: Msdyn_projecttask[] | undefined;
    private _msdyn_organizationalunit_quote?: Quote[] | undefined;
    private _msdyn_organizationalunit_quotelinetransaction?: Msdyn_quotelinetransaction[] | undefined;
    private _msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit?: Msdyn_requirementorganizationunit[] | undefined;
    private _msdyn_organizationalunit_salesorder?: Salesorder[] | undefined;
    private _msdyn_organizationalunit_serviceappointment?: Serviceappointment[] | undefined;
    private _msdyn_organizationalunit_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_organizationalunit_timeentry?: Msdyn_timeentry[] | undefined;
    private _msdyn_organizationalunitid?: string | undefined;
    private _msdyn_projectparameter_defaultorganizationalunit?: Msdyn_projectparameter[] | undefined;
    private _msdyn_resourcecategorypricelevel_organizationalunit?: Msdyn_resourcecategorypricelevel[] | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _msdyn_currency_value property value. 
     * @returns a string
     */
    public get _msdyn_currency_value() {
        return this.__msdyn_currency_value;
    };
    /**
     * Sets the _msdyn_currency_value property value. 
     * @param value Value to set for the _msdyn_currency_value property.
     */
    public set _msdyn_currency_value(value: string | undefined) {
        this.__msdyn_currency_value = value;
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
     * Instantiates a new msdyn_organizationalunit and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_organizationalunit)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_organizationalunit)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_organizationalunit)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_organizationalunit)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_currency_value": (o, n) => { (o as unknown as Msdyn_organizationalunit)._msdyn_currency_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_organizationalunit)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_organizationalunit).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_organizationalunit).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_organizationalunit).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_organizationalunit).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_organizationalunit).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_organizationalunit).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_organizationalunit).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_currency": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_currency = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_description = n.getStringValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_longitude = n.getNumberValue(); },
            "msdyn_msdyn_organizationalunit_bookableresource_organizationalunit": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_msdyn_organizationalunit_bookableresource_organizationalunit = n.getCollectionOfObjectValues<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit = n.getCollectionOfObjectValues<Msdyn_projectteam>(createMsdyn_projectteamFromDiscriminatorValue); },
            "msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit = n.getCollectionOfObjectValues<Msdyn_resourcecategorymarkuppricelevel>(createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_name = n.getStringValue(); },
            "msdyn_organizationalunit_actual": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_actual = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_organizationalunit_Annotations": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_organizationalunit_AsyncOperations": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_organizationalunit_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_organizationalunit_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_organizationalunit_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_organizationalunit_equipment": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_equipment = n.getCollectionOfObjectValues<Equipment>(createEquipmentFromDiscriminatorValue); },
            "msdyn_organizationalunit_estimateline": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_estimateline = n.getCollectionOfObjectValues<Msdyn_estimateline>(createMsdyn_estimatelineFromDiscriminatorValue); },
            "msdyn_organizationalunit_expense": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_expense = n.getCollectionOfObjectValues<Msdyn_expense>(createMsdyn_expenseFromDiscriminatorValue); },
            "msdyn_organizationalunit_invoicelinetransaction": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_invoicelinetransaction = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_organizationalunit_journalline": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_journalline = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_organizationalunit_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension = n.getCollectionOfObjectValues<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_organizationalunit_opportunity": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_opportunity = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "msdyn_organizationalunit_opportunitylinedetail": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_opportunitylinedetail = n.getCollectionOfObjectValues<Msdyn_opportunitylinetransaction>(createMsdyn_opportunitylinetransactionFromDiscriminatorValue); },
            "msdyn_organizationalunit_orderlinetransaction": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_orderlinetransaction = n.getCollectionOfObjectValues<Msdyn_orderlinetransaction>(createMsdyn_orderlinetransactionFromDiscriminatorValue); },
            "msdyn_organizationalunit_pricelevel": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_pricelevel = n.getCollectionOfObjectValues<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_organizationalunit_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_organizationalunit_ProcessSession": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_organizationalunit_project": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_project = n.getCollectionOfObjectValues<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_organizationalunit_projecttask": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_projecttask = n.getCollectionOfObjectValues<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_organizationalunit_quote": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_quote = n.getCollectionOfObjectValues<Quote>(createQuoteFromDiscriminatorValue); },
            "msdyn_organizationalunit_quotelinetransaction": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_quotelinetransaction = n.getCollectionOfObjectValues<Msdyn_quotelinetransaction>(createMsdyn_quotelinetransactionFromDiscriminatorValue); },
            "msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit = n.getCollectionOfObjectValues<Msdyn_requirementorganizationunit>(createMsdyn_requirementorganizationunitFromDiscriminatorValue); },
            "msdyn_organizationalunit_salesorder": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_salesorder = n.getCollectionOfObjectValues<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "msdyn_organizationalunit_serviceappointment": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_serviceappointment = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_organizationalunit_SyncErrors": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_organizationalunit_timeentry": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunit_timeentry = n.getCollectionOfObjectValues<Msdyn_timeentry>(createMsdyn_timeentryFromDiscriminatorValue); },
            "msdyn_organizationalunitid": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_organizationalunitid = n.getStringValue(); },
            "msdyn_projectparameter_defaultorganizationalunit": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_projectparameter_defaultorganizationalunit = n.getCollectionOfObjectValues<Msdyn_projectparameter>(createMsdyn_projectparameterFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_organizationalunit": (o, n) => { (o as unknown as Msdyn_organizationalunit).msdyn_resourcecategorypricelevel_organizationalunit = n.getCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>(createMsdyn_resourcecategorypricelevelFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_organizationalunit).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_organizationalunit).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_organizationalunit).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_organizationalunit).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_organizationalunit).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_organizationalunit).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_organizationalunit).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_currency property value. 
     * @returns a transactioncurrency
     */
    public get msdyn_currency() {
        return this._msdyn_currency;
    };
    /**
     * Sets the msdyn_currency property value. 
     * @param value Value to set for the msdyn_currency property.
     */
    public set msdyn_currency(value: Transactioncurrency | undefined) {
        this._msdyn_currency = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_latitude property value. 
     * @returns a double
     */
    public get msdyn_latitude() {
        return this._msdyn_latitude;
    };
    /**
     * Sets the msdyn_latitude property value. 
     * @param value Value to set for the msdyn_latitude property.
     */
    public set msdyn_latitude(value: number | undefined) {
        this._msdyn_latitude = value;
    };
    /**
     * Gets the msdyn_longitude property value. 
     * @returns a double
     */
    public get msdyn_longitude() {
        return this._msdyn_longitude;
    };
    /**
     * Sets the msdyn_longitude property value. 
     * @param value Value to set for the msdyn_longitude property.
     */
    public set msdyn_longitude(value: number | undefined) {
        this._msdyn_longitude = value;
    };
    /**
     * Gets the msdyn_msdyn_organizationalunit_bookableresource_organizationalunit property value. 
     * @returns a bookableresource
     */
    public get msdyn_msdyn_organizationalunit_bookableresource_organizationalunit() {
        return this._msdyn_msdyn_organizationalunit_bookableresource_organizationalunit;
    };
    /**
     * Sets the msdyn_msdyn_organizationalunit_bookableresource_organizationalunit property value. 
     * @param value Value to set for the msdyn_msdyn_organizationalunit_bookableresource_organizationalunit property.
     */
    public set msdyn_msdyn_organizationalunit_bookableresource_organizationalunit(value: Bookableresource[] | undefined) {
        this._msdyn_msdyn_organizationalunit_bookableresource_organizationalunit = value;
    };
    /**
     * Gets the msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId() {
        return this._msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId;
    };
    /**
     * Sets the msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId property value. 
     * @param value Value to set for the msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId property.
     */
    public set msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId(value: Msdyn_actual[] | undefined) {
        this._msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId = value;
    };
    /**
     * Gets the msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId() {
        return this._msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId;
    };
    /**
     * Sets the msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId property value. 
     * @param value Value to set for the msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId property.
     */
    public set msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId = value;
    };
    /**
     * Gets the msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId() {
        return this._msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId;
    };
    /**
     * Sets the msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId property value. 
     * @param value Value to set for the msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId property.
     */
    public set msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId(value: Msdyn_journalline[] | undefined) {
        this._msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId = value;
    };
    /**
     * Gets the msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit property value. 
     * @returns a msdyn_projectteam
     */
    public get msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit() {
        return this._msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit;
    };
    /**
     * Sets the msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit property value. 
     * @param value Value to set for the msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit property.
     */
    public set msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit(value: Msdyn_projectteam[] | undefined) {
        this._msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit = value;
    };
    /**
     * Gets the msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit property value. 
     * @returns a msdyn_resourcecategorymarkuppricelevel
     */
    public get msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit() {
        return this._msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit;
    };
    /**
     * Sets the msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit property value. 
     * @param value Value to set for the msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit property.
     */
    public set msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit(value: Msdyn_resourcecategorymarkuppricelevel[] | undefined) {
        this._msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_organizationalunit_actual property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_organizationalunit_actual() {
        return this._msdyn_organizationalunit_actual;
    };
    /**
     * Sets the msdyn_organizationalunit_actual property value. 
     * @param value Value to set for the msdyn_organizationalunit_actual property.
     */
    public set msdyn_organizationalunit_actual(value: Msdyn_actual[] | undefined) {
        this._msdyn_organizationalunit_actual = value;
    };
    /**
     * Gets the msdyn_organizationalunit_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_organizationalunit_Annotations() {
        return this._msdyn_organizationalunit_Annotations;
    };
    /**
     * Sets the msdyn_organizationalunit_Annotations property value. 
     * @param value Value to set for the msdyn_organizationalunit_Annotations property.
     */
    public set msdyn_organizationalunit_Annotations(value: Annotation[] | undefined) {
        this._msdyn_organizationalunit_Annotations = value;
    };
    /**
     * Gets the msdyn_organizationalunit_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_organizationalunit_AsyncOperations() {
        return this._msdyn_organizationalunit_AsyncOperations;
    };
    /**
     * Sets the msdyn_organizationalunit_AsyncOperations property value. 
     * @param value Value to set for the msdyn_organizationalunit_AsyncOperations property.
     */
    public set msdyn_organizationalunit_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_organizationalunit_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_organizationalunit_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_organizationalunit_BulkDeleteFailures() {
        return this._msdyn_organizationalunit_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_organizationalunit_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_organizationalunit_BulkDeleteFailures property.
     */
    public set msdyn_organizationalunit_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_organizationalunit_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_organizationalunit_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_organizationalunit_DuplicateBaseRecord() {
        return this._msdyn_organizationalunit_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_organizationalunit_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_organizationalunit_DuplicateBaseRecord property.
     */
    public set msdyn_organizationalunit_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_organizationalunit_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_organizationalunit_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_organizationalunit_DuplicateMatchingRecord() {
        return this._msdyn_organizationalunit_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_organizationalunit_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_organizationalunit_DuplicateMatchingRecord property.
     */
    public set msdyn_organizationalunit_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_organizationalunit_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_organizationalunit_equipment property value. 
     * @returns a equipment
     */
    public get msdyn_organizationalunit_equipment() {
        return this._msdyn_organizationalunit_equipment;
    };
    /**
     * Sets the msdyn_organizationalunit_equipment property value. 
     * @param value Value to set for the msdyn_organizationalunit_equipment property.
     */
    public set msdyn_organizationalunit_equipment(value: Equipment[] | undefined) {
        this._msdyn_organizationalunit_equipment = value;
    };
    /**
     * Gets the msdyn_organizationalunit_estimateline property value. 
     * @returns a msdyn_estimateline
     */
    public get msdyn_organizationalunit_estimateline() {
        return this._msdyn_organizationalunit_estimateline;
    };
    /**
     * Sets the msdyn_organizationalunit_estimateline property value. 
     * @param value Value to set for the msdyn_organizationalunit_estimateline property.
     */
    public set msdyn_organizationalunit_estimateline(value: Msdyn_estimateline[] | undefined) {
        this._msdyn_organizationalunit_estimateline = value;
    };
    /**
     * Gets the msdyn_organizationalunit_expense property value. 
     * @returns a msdyn_expense
     */
    public get msdyn_organizationalunit_expense() {
        return this._msdyn_organizationalunit_expense;
    };
    /**
     * Sets the msdyn_organizationalunit_expense property value. 
     * @param value Value to set for the msdyn_organizationalunit_expense property.
     */
    public set msdyn_organizationalunit_expense(value: Msdyn_expense[] | undefined) {
        this._msdyn_organizationalunit_expense = value;
    };
    /**
     * Gets the msdyn_organizationalunit_invoicelinetransaction property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_organizationalunit_invoicelinetransaction() {
        return this._msdyn_organizationalunit_invoicelinetransaction;
    };
    /**
     * Sets the msdyn_organizationalunit_invoicelinetransaction property value. 
     * @param value Value to set for the msdyn_organizationalunit_invoicelinetransaction property.
     */
    public set msdyn_organizationalunit_invoicelinetransaction(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_organizationalunit_invoicelinetransaction = value;
    };
    /**
     * Gets the msdyn_organizationalunit_journalline property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_organizationalunit_journalline() {
        return this._msdyn_organizationalunit_journalline;
    };
    /**
     * Sets the msdyn_organizationalunit_journalline property value. 
     * @param value Value to set for the msdyn_organizationalunit_journalline property.
     */
    public set msdyn_organizationalunit_journalline(value: Msdyn_journalline[] | undefined) {
        this._msdyn_organizationalunit_journalline = value;
    };
    /**
     * Gets the msdyn_organizationalunit_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_organizationalunit_MailboxTrackingFolders() {
        return this._msdyn_organizationalunit_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_organizationalunit_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_organizationalunit_MailboxTrackingFolders property.
     */
    public set msdyn_organizationalunit_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_organizationalunit_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension() {
        return this._msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension;
    };
    /**
     * Sets the msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension property value. 
     * @param value Value to set for the msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension property.
     */
    public set msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension(value: Msdyn_projecttask[] | undefined) {
        this._msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension = value;
    };
    /**
     * Gets the msdyn_organizationalunit_opportunity property value. 
     * @returns a opportunity
     */
    public get msdyn_organizationalunit_opportunity() {
        return this._msdyn_organizationalunit_opportunity;
    };
    /**
     * Sets the msdyn_organizationalunit_opportunity property value. 
     * @param value Value to set for the msdyn_organizationalunit_opportunity property.
     */
    public set msdyn_organizationalunit_opportunity(value: Opportunity[] | undefined) {
        this._msdyn_organizationalunit_opportunity = value;
    };
    /**
     * Gets the msdyn_organizationalunit_opportunitylinedetail property value. 
     * @returns a msdyn_opportunitylinetransaction
     */
    public get msdyn_organizationalunit_opportunitylinedetail() {
        return this._msdyn_organizationalunit_opportunitylinedetail;
    };
    /**
     * Sets the msdyn_organizationalunit_opportunitylinedetail property value. 
     * @param value Value to set for the msdyn_organizationalunit_opportunitylinedetail property.
     */
    public set msdyn_organizationalunit_opportunitylinedetail(value: Msdyn_opportunitylinetransaction[] | undefined) {
        this._msdyn_organizationalunit_opportunitylinedetail = value;
    };
    /**
     * Gets the msdyn_organizationalunit_orderlinetransaction property value. 
     * @returns a msdyn_orderlinetransaction
     */
    public get msdyn_organizationalunit_orderlinetransaction() {
        return this._msdyn_organizationalunit_orderlinetransaction;
    };
    /**
     * Sets the msdyn_organizationalunit_orderlinetransaction property value. 
     * @param value Value to set for the msdyn_organizationalunit_orderlinetransaction property.
     */
    public set msdyn_organizationalunit_orderlinetransaction(value: Msdyn_orderlinetransaction[] | undefined) {
        this._msdyn_organizationalunit_orderlinetransaction = value;
    };
    /**
     * Gets the msdyn_organizationalunit_pricelevel property value. 
     * @returns a pricelevel
     */
    public get msdyn_organizationalunit_pricelevel() {
        return this._msdyn_organizationalunit_pricelevel;
    };
    /**
     * Sets the msdyn_organizationalunit_pricelevel property value. 
     * @param value Value to set for the msdyn_organizationalunit_pricelevel property.
     */
    public set msdyn_organizationalunit_pricelevel(value: Pricelevel[] | undefined) {
        this._msdyn_organizationalunit_pricelevel = value;
    };
    /**
     * Gets the msdyn_organizationalunit_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_organizationalunit_PrincipalObjectAttributeAccesses() {
        return this._msdyn_organizationalunit_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_organizationalunit_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_organizationalunit_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_organizationalunit_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_organizationalunit_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_organizationalunit_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_organizationalunit_ProcessSession() {
        return this._msdyn_organizationalunit_ProcessSession;
    };
    /**
     * Sets the msdyn_organizationalunit_ProcessSession property value. 
     * @param value Value to set for the msdyn_organizationalunit_ProcessSession property.
     */
    public set msdyn_organizationalunit_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_organizationalunit_ProcessSession = value;
    };
    /**
     * Gets the msdyn_organizationalunit_project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_organizationalunit_project() {
        return this._msdyn_organizationalunit_project;
    };
    /**
     * Sets the msdyn_organizationalunit_project property value. 
     * @param value Value to set for the msdyn_organizationalunit_project property.
     */
    public set msdyn_organizationalunit_project(value: Msdyn_project[] | undefined) {
        this._msdyn_organizationalunit_project = value;
    };
    /**
     * Gets the msdyn_organizationalunit_projecttask property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_organizationalunit_projecttask() {
        return this._msdyn_organizationalunit_projecttask;
    };
    /**
     * Sets the msdyn_organizationalunit_projecttask property value. 
     * @param value Value to set for the msdyn_organizationalunit_projecttask property.
     */
    public set msdyn_organizationalunit_projecttask(value: Msdyn_projecttask[] | undefined) {
        this._msdyn_organizationalunit_projecttask = value;
    };
    /**
     * Gets the msdyn_organizationalunit_quote property value. 
     * @returns a quote
     */
    public get msdyn_organizationalunit_quote() {
        return this._msdyn_organizationalunit_quote;
    };
    /**
     * Sets the msdyn_organizationalunit_quote property value. 
     * @param value Value to set for the msdyn_organizationalunit_quote property.
     */
    public set msdyn_organizationalunit_quote(value: Quote[] | undefined) {
        this._msdyn_organizationalunit_quote = value;
    };
    /**
     * Gets the msdyn_organizationalunit_quotelinetransaction property value. 
     * @returns a msdyn_quotelinetransaction
     */
    public get msdyn_organizationalunit_quotelinetransaction() {
        return this._msdyn_organizationalunit_quotelinetransaction;
    };
    /**
     * Sets the msdyn_organizationalunit_quotelinetransaction property value. 
     * @param value Value to set for the msdyn_organizationalunit_quotelinetransaction property.
     */
    public set msdyn_organizationalunit_quotelinetransaction(value: Msdyn_quotelinetransaction[] | undefined) {
        this._msdyn_organizationalunit_quotelinetransaction = value;
    };
    /**
     * Gets the msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit property value. 
     * @returns a msdyn_requirementorganizationunit
     */
    public get msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit() {
        return this._msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit;
    };
    /**
     * Sets the msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit property value. 
     * @param value Value to set for the msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit property.
     */
    public set msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit(value: Msdyn_requirementorganizationunit[] | undefined) {
        this._msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit = value;
    };
    /**
     * Gets the msdyn_organizationalunit_salesorder property value. 
     * @returns a salesorder
     */
    public get msdyn_organizationalunit_salesorder() {
        return this._msdyn_organizationalunit_salesorder;
    };
    /**
     * Sets the msdyn_organizationalunit_salesorder property value. 
     * @param value Value to set for the msdyn_organizationalunit_salesorder property.
     */
    public set msdyn_organizationalunit_salesorder(value: Salesorder[] | undefined) {
        this._msdyn_organizationalunit_salesorder = value;
    };
    /**
     * Gets the msdyn_organizationalunit_serviceappointment property value. 
     * @returns a serviceappointment
     */
    public get msdyn_organizationalunit_serviceappointment() {
        return this._msdyn_organizationalunit_serviceappointment;
    };
    /**
     * Sets the msdyn_organizationalunit_serviceappointment property value. 
     * @param value Value to set for the msdyn_organizationalunit_serviceappointment property.
     */
    public set msdyn_organizationalunit_serviceappointment(value: Serviceappointment[] | undefined) {
        this._msdyn_organizationalunit_serviceappointment = value;
    };
    /**
     * Gets the msdyn_organizationalunit_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_organizationalunit_SyncErrors() {
        return this._msdyn_organizationalunit_SyncErrors;
    };
    /**
     * Sets the msdyn_organizationalunit_SyncErrors property value. 
     * @param value Value to set for the msdyn_organizationalunit_SyncErrors property.
     */
    public set msdyn_organizationalunit_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_organizationalunit_SyncErrors = value;
    };
    /**
     * Gets the msdyn_organizationalunit_timeentry property value. 
     * @returns a msdyn_timeentry
     */
    public get msdyn_organizationalunit_timeentry() {
        return this._msdyn_organizationalunit_timeentry;
    };
    /**
     * Sets the msdyn_organizationalunit_timeentry property value. 
     * @param value Value to set for the msdyn_organizationalunit_timeentry property.
     */
    public set msdyn_organizationalunit_timeentry(value: Msdyn_timeentry[] | undefined) {
        this._msdyn_organizationalunit_timeentry = value;
    };
    /**
     * Gets the msdyn_organizationalunitid property value. 
     * @returns a string
     */
    public get msdyn_organizationalunitid() {
        return this._msdyn_organizationalunitid;
    };
    /**
     * Sets the msdyn_organizationalunitid property value. 
     * @param value Value to set for the msdyn_organizationalunitid property.
     */
    public set msdyn_organizationalunitid(value: string | undefined) {
        this._msdyn_organizationalunitid = value;
    };
    /**
     * Gets the msdyn_projectparameter_defaultorganizationalunit property value. 
     * @returns a msdyn_projectparameter
     */
    public get msdyn_projectparameter_defaultorganizationalunit() {
        return this._msdyn_projectparameter_defaultorganizationalunit;
    };
    /**
     * Sets the msdyn_projectparameter_defaultorganizationalunit property value. 
     * @param value Value to set for the msdyn_projectparameter_defaultorganizationalunit property.
     */
    public set msdyn_projectparameter_defaultorganizationalunit(value: Msdyn_projectparameter[] | undefined) {
        this._msdyn_projectparameter_defaultorganizationalunit = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_organizationalunit property value. 
     * @returns a msdyn_resourcecategorypricelevel
     */
    public get msdyn_resourcecategorypricelevel_organizationalunit() {
        return this._msdyn_resourcecategorypricelevel_organizationalunit;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_organizationalunit property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_organizationalunit property.
     */
    public set msdyn_resourcecategorypricelevel_organizationalunit(value: Msdyn_resourcecategorypricelevel[] | undefined) {
        this._msdyn_resourcecategorypricelevel_organizationalunit = value;
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
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_currency_value", this._msdyn_currency_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Transactioncurrency>("msdyn_currency", this.msdyn_currency);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeCollectionOfObjectValues<Bookableresource>("msdyn_msdyn_organizationalunit_bookableresource_organizationalunit", this.msdyn_msdyn_organizationalunit_bookableresource_organizationalunit);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId", this.msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId", this.msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId", this.msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId);
        writer.writeCollectionOfObjectValues<Msdyn_projectteam>("msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit", this.msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit);
        writer.writeCollectionOfObjectValues<Msdyn_resourcecategorymarkuppricelevel>("msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit", this.msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_organizationalunit_actual", this.msdyn_organizationalunit_actual);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_organizationalunit_Annotations", this.msdyn_organizationalunit_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_organizationalunit_AsyncOperations", this.msdyn_organizationalunit_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_organizationalunit_BulkDeleteFailures", this.msdyn_organizationalunit_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_organizationalunit_DuplicateBaseRecord", this.msdyn_organizationalunit_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_organizationalunit_DuplicateMatchingRecord", this.msdyn_organizationalunit_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Equipment>("msdyn_organizationalunit_equipment", this.msdyn_organizationalunit_equipment);
        writer.writeCollectionOfObjectValues<Msdyn_estimateline>("msdyn_organizationalunit_estimateline", this.msdyn_organizationalunit_estimateline);
        writer.writeCollectionOfObjectValues<Msdyn_expense>("msdyn_organizationalunit_expense", this.msdyn_organizationalunit_expense);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_organizationalunit_invoicelinetransaction", this.msdyn_organizationalunit_invoicelinetransaction);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_organizationalunit_journalline", this.msdyn_organizationalunit_journalline);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_organizationalunit_MailboxTrackingFolders", this.msdyn_organizationalunit_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_projecttask>("msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension", this.msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension);
        writer.writeCollectionOfObjectValues<Opportunity>("msdyn_organizationalunit_opportunity", this.msdyn_organizationalunit_opportunity);
        writer.writeCollectionOfObjectValues<Msdyn_opportunitylinetransaction>("msdyn_organizationalunit_opportunitylinedetail", this.msdyn_organizationalunit_opportunitylinedetail);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransaction>("msdyn_organizationalunit_orderlinetransaction", this.msdyn_organizationalunit_orderlinetransaction);
        writer.writeCollectionOfObjectValues<Pricelevel>("msdyn_organizationalunit_pricelevel", this.msdyn_organizationalunit_pricelevel);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_organizationalunit_PrincipalObjectAttributeAccesses", this.msdyn_organizationalunit_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_organizationalunit_ProcessSession", this.msdyn_organizationalunit_ProcessSession);
        writer.writeCollectionOfObjectValues<Msdyn_project>("msdyn_organizationalunit_project", this.msdyn_organizationalunit_project);
        writer.writeCollectionOfObjectValues<Msdyn_projecttask>("msdyn_organizationalunit_projecttask", this.msdyn_organizationalunit_projecttask);
        writer.writeCollectionOfObjectValues<Quote>("msdyn_organizationalunit_quote", this.msdyn_organizationalunit_quote);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransaction>("msdyn_organizationalunit_quotelinetransaction", this.msdyn_organizationalunit_quotelinetransaction);
        writer.writeCollectionOfObjectValues<Msdyn_requirementorganizationunit>("msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit", this.msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit);
        writer.writeCollectionOfObjectValues<Salesorder>("msdyn_organizationalunit_salesorder", this.msdyn_organizationalunit_salesorder);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_organizationalunit_serviceappointment", this.msdyn_organizationalunit_serviceappointment);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_organizationalunit_SyncErrors", this.msdyn_organizationalunit_SyncErrors);
        writer.writeCollectionOfObjectValues<Msdyn_timeentry>("msdyn_organizationalunit_timeentry", this.msdyn_organizationalunit_timeentry);
        writer.writeStringValue("msdyn_organizationalunitid", this.msdyn_organizationalunitid);
        writer.writeCollectionOfObjectValues<Msdyn_projectparameter>("msdyn_projectparameter_defaultorganizationalunit", this.msdyn_projectparameter_defaultorganizationalunit);
        writer.writeCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>("msdyn_resourcecategorypricelevel_organizationalunit", this.msdyn_resourcecategorypricelevel_organizationalunit);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
