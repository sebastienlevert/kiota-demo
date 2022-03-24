import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_estimatelineFromDiscriminatorValue} from './createMsdyn_estimatelineFromDiscriminatorValue';
import {createMsdyn_expensecategoryFromDiscriminatorValue} from './createMsdyn_expensecategoryFromDiscriminatorValue';
import {createMsdyn_factFromDiscriminatorValue} from './createMsdyn_factFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_opportunitylinetransactioncategoryFromDiscriminatorValue} from './createMsdyn_opportunitylinetransactioncategoryFromDiscriminatorValue';
import {createMsdyn_opportunitylinetransactionFromDiscriminatorValue} from './createMsdyn_opportunitylinetransactionFromDiscriminatorValue';
import {createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue} from './createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionFromDiscriminatorValue} from './createMsdyn_orderlinetransactionFromDiscriminatorValue';
import {createMsdyn_projectapprovalFromDiscriminatorValue} from './createMsdyn_projectapprovalFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_projecttransactioncategoryFromDiscriminatorValue} from './createMsdyn_projecttransactioncategoryFromDiscriminatorValue';
import {createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue} from './createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue';
import {createMsdyn_quotelinetransactioncategoryFromDiscriminatorValue} from './createMsdyn_quotelinetransactioncategoryFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionFromDiscriminatorValue} from './createMsdyn_quotelinetransactionFromDiscriminatorValue';
import {createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue} from './createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue';
import {createMsdyn_resourcecategorypricelevelFromDiscriminatorValue} from './createMsdyn_resourcecategorypricelevelFromDiscriminatorValue';
import {createMsdyn_timeentryFromDiscriminatorValue} from './createMsdyn_timeentryFromDiscriminatorValue';
import {createMsdyn_transactioncategoryclassificationFromDiscriminatorValue} from './createMsdyn_transactioncategoryclassificationFromDiscriminatorValue';
import {createMsdyn_transactioncategoryhierarchyelementFromDiscriminatorValue} from './createMsdyn_transactioncategoryhierarchyelementFromDiscriminatorValue';
import {createMsdyn_transactioncategorypricelevelFromDiscriminatorValue} from './createMsdyn_transactioncategorypricelevelFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresourcecategory, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_actual, Msdyn_estimateline, Msdyn_expensecategory, Msdyn_fact, Msdyn_invoicelinetransaction, Msdyn_journalline, Msdyn_opportunitylinetransaction, Msdyn_opportunitylinetransactioncategory, Msdyn_orderlinetransaction, Msdyn_orderlinetransactioncategory, Msdyn_projectapproval, Msdyn_projecttask, Msdyn_projecttransactioncategory, Msdyn_quotelineanalyticsbreakdown, Msdyn_quotelinetransaction, Msdyn_quotelinetransactioncategory, Msdyn_resourcecategorymarkuppricelevel, Msdyn_resourcecategorypricelevel, Msdyn_timeentry, Msdyn_transactioncategoryclassification, Msdyn_transactioncategoryhierarchyelement, Msdyn_transactioncategorypricelevel, Organization, Principalobjectattributeaccess, Processsession, Product, Syncerror, Systemuser, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_transactioncategory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_defaultunit_value?: string | undefined;
    private __msdyn_unitgroup_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_DefaultUnit?: Uom | undefined;
    private _msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory?: Bookableresourcecategory[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory?: Msdyn_actual[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory?: Msdyn_estimateline[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_expensecatego?: Msdyn_expensecategory[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory?: Msdyn_fact[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory?: Msdyn_journalline[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory?: Msdyn_opportunitylinetransaction[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory?: Msdyn_opportunitylinetransactioncategory[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory?: Msdyn_orderlinetransaction[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory?: Msdyn_orderlinetransactioncategory[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory?: Msdyn_projectapproval[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory?: Msdyn_projecttask[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory?: Msdyn_projecttransactioncategory[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory?: Msdyn_quotelineanalyticsbreakdown[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory?: Msdyn_quotelinetransaction[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory?: Msdyn_quotelinetransactioncategory[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory?: Msdyn_resourcecategorymarkuppricelevel[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory?: Msdyn_resourcecategorypricelevel[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory?: Msdyn_timeentry[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory?: Msdyn_transactioncategoryclassification[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory?: Msdyn_transactioncategoryhierarchyelement[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory?: Msdyn_transactioncategoryhierarchyelement[] | undefined;
    private _msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory?: Msdyn_transactioncategorypricelevel[] | undefined;
    private _msdyn_msdyn_transactioncategory_product_TransactionCategory?: Product[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_transactioncategory_Annotations?: Annotation[] | undefined;
    private _msdyn_transactioncategory_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_transactioncategory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_transactioncategory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_transactioncategory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_transactioncategory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_transactioncategory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_transactioncategory_ProcessSession?: Processsession[] | undefined;
    private _msdyn_transactioncategory_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_transactioncategoryid?: string | undefined;
    private _msdyn_UnitGroup?: Uomschedule | undefined;
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
     * Gets the _msdyn_defaultunit_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultunit_value() {
        return this.__msdyn_defaultunit_value;
    };
    /**
     * Sets the _msdyn_defaultunit_value property value. 
     * @param value Value to set for the _msdyn_defaultunit_value property.
     */
    public set _msdyn_defaultunit_value(value: string | undefined) {
        this.__msdyn_defaultunit_value = value;
    };
    /**
     * Gets the _msdyn_unitgroup_value property value. 
     * @returns a string
     */
    public get _msdyn_unitgroup_value() {
        return this.__msdyn_unitgroup_value;
    };
    /**
     * Sets the _msdyn_unitgroup_value property value. 
     * @param value Value to set for the _msdyn_unitgroup_value property.
     */
    public set _msdyn_unitgroup_value(value: string | undefined) {
        this.__msdyn_unitgroup_value = value;
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
     * Instantiates a new msdyn_transactioncategory and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_transactioncategory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_transactioncategory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_transactioncategory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_transactioncategory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_defaultunit_value": (o, n) => { (o as unknown as Msdyn_transactioncategory)._msdyn_defaultunit_value = n.getStringValue(); },
            "_msdyn_unitgroup_value": (o, n) => { (o as unknown as Msdyn_transactioncategory)._msdyn_unitgroup_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_transactioncategory)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_transactioncategory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_transactioncategory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_transactioncategory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_transactioncategory).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_transactioncategory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_transactioncategory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_transactioncategory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_DefaultUnit": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_DefaultUnit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory = n.getCollectionOfObjectValues<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_estimateline>(createMsdyn_estimatelineFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_expensecatego": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_expensecatego = n.getCollectionOfObjectValues<Msdyn_expensecategory>(createMsdyn_expensecategoryFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_fact>(createMsdyn_factFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_opportunitylinetransaction>(createMsdyn_opportunitylinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_opportunitylinetransactioncategory>(createMsdyn_opportunitylinetransactioncategoryFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_orderlinetransaction>(createMsdyn_orderlinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_orderlinetransactioncategory>(createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_projectapproval>(createMsdyn_projectapprovalFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory = n.getCollectionOfObjectValues<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_projecttransactioncategory>(createMsdyn_projecttransactioncategoryFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_quotelineanalyticsbreakdown>(createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_quotelinetransaction>(createMsdyn_quotelinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_quotelinetransactioncategory>(createMsdyn_quotelinetransactioncategoryFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory = n.getCollectionOfObjectValues<Msdyn_resourcecategorymarkuppricelevel>(createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory = n.getCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>(createMsdyn_resourcecategorypricelevelFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory = n.getCollectionOfObjectValues<Msdyn_timeentry>(createMsdyn_timeentryFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory = n.getCollectionOfObjectValues<Msdyn_transactioncategoryclassification>(createMsdyn_transactioncategoryclassificationFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory = n.getCollectionOfObjectValues<Msdyn_transactioncategoryhierarchyelement>(createMsdyn_transactioncategoryhierarchyelementFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory = n.getCollectionOfObjectValues<Msdyn_transactioncategoryhierarchyelement>(createMsdyn_transactioncategoryhierarchyelementFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory = n.getCollectionOfObjectValues<Msdyn_transactioncategorypricelevel>(createMsdyn_transactioncategorypricelevelFromDiscriminatorValue); },
            "msdyn_msdyn_transactioncategory_product_TransactionCategory": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_msdyn_transactioncategory_product_TransactionCategory = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_name = n.getStringValue(); },
            "msdyn_transactioncategory_Annotations": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_transactioncategory_AsyncOperations": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_transactioncategory_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_transactioncategory_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_transactioncategory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_transactioncategory_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_transactioncategory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_transactioncategory_ProcessSession": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_transactioncategory_SyncErrors": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_transactioncategoryid": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_transactioncategoryid = n.getStringValue(); },
            "msdyn_UnitGroup": (o, n) => { (o as unknown as Msdyn_transactioncategory).msdyn_UnitGroup = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_transactioncategory).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_transactioncategory).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_transactioncategory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_transactioncategory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_transactioncategory).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_transactioncategory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_transactioncategory).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_billingtype property value. 
     * @returns a integer
     */
    public get msdyn_billingtype() {
        return this._msdyn_billingtype;
    };
    /**
     * Sets the msdyn_billingtype property value. 
     * @param value Value to set for the msdyn_billingtype property.
     */
    public set msdyn_billingtype(value: number | undefined) {
        this._msdyn_billingtype = value;
    };
    /**
     * Gets the msdyn_DefaultUnit property value. 
     * @returns a uom
     */
    public get msdyn_DefaultUnit() {
        return this._msdyn_DefaultUnit;
    };
    /**
     * Sets the msdyn_DefaultUnit property value. 
     * @param value Value to set for the msdyn_DefaultUnit property.
     */
    public set msdyn_DefaultUnit(value: Uom | undefined) {
        this._msdyn_DefaultUnit = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory(value: Bookableresourcecategory[] | undefined) {
        this._msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory(value: Msdyn_actual[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory property value. 
     * @returns a msdyn_estimateline
     */
    public get msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory(value: Msdyn_estimateline[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_expensecatego property value. 
     * @returns a msdyn_expensecategory
     */
    public get msdyn_msdyn_transactioncategory_msdyn_expensecatego() {
        return this._msdyn_msdyn_transactioncategory_msdyn_expensecatego;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_expensecatego property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_expensecatego property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_expensecatego(value: Msdyn_expensecategory[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_expensecatego = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory property value. 
     * @returns a msdyn_fact
     */
    public get msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory(value: Msdyn_fact[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory(value: Msdyn_journalline[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory property value. 
     * @returns a msdyn_opportunitylinetransaction
     */
    public get msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory(value: Msdyn_opportunitylinetransaction[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory property value. 
     * @returns a msdyn_opportunitylinetransactioncategory
     */
    public get msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory(value: Msdyn_opportunitylinetransactioncategory[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory property value. 
     * @returns a msdyn_orderlinetransaction
     */
    public get msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory(value: Msdyn_orderlinetransaction[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory property value. 
     * @returns a msdyn_orderlinetransactioncategory
     */
    public get msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory(value: Msdyn_orderlinetransactioncategory[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory property value. 
     * @returns a msdyn_projectapproval
     */
    public get msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory(value: Msdyn_projectapproval[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory(value: Msdyn_projecttask[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory property value. 
     * @returns a msdyn_projecttransactioncategory
     */
    public get msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory(value: Msdyn_projecttransactioncategory[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory property value. 
     * @returns a msdyn_quotelineanalyticsbreakdown
     */
    public get msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory(value: Msdyn_quotelineanalyticsbreakdown[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory property value. 
     * @returns a msdyn_quotelinetransaction
     */
    public get msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory(value: Msdyn_quotelinetransaction[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory property value. 
     * @returns a msdyn_quotelinetransactioncategory
     */
    public get msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory(value: Msdyn_quotelinetransactioncategory[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory property value. 
     * @returns a msdyn_resourcecategorymarkuppricelevel
     */
    public get msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory(value: Msdyn_resourcecategorymarkuppricelevel[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory property value. 
     * @returns a msdyn_resourcecategorypricelevel
     */
    public get msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory(value: Msdyn_resourcecategorypricelevel[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory property value. 
     * @returns a msdyn_timeentry
     */
    public get msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory(value: Msdyn_timeentry[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory property value. 
     * @returns a msdyn_transactioncategoryclassification
     */
    public get msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory(value: Msdyn_transactioncategoryclassification[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory property value. 
     * @returns a msdyn_transactioncategoryhierarchyelement
     */
    public get msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory(value: Msdyn_transactioncategoryhierarchyelement[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory property value. 
     * @returns a msdyn_transactioncategoryhierarchyelement
     */
    public get msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory(value: Msdyn_transactioncategoryhierarchyelement[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory property value. 
     * @returns a msdyn_transactioncategorypricelevel
     */
    public get msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory(value: Msdyn_transactioncategorypricelevel[] | undefined) {
        this._msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_msdyn_transactioncategory_product_TransactionCategory property value. 
     * @returns a product
     */
    public get msdyn_msdyn_transactioncategory_product_TransactionCategory() {
        return this._msdyn_msdyn_transactioncategory_product_TransactionCategory;
    };
    /**
     * Sets the msdyn_msdyn_transactioncategory_product_TransactionCategory property value. 
     * @param value Value to set for the msdyn_msdyn_transactioncategory_product_TransactionCategory property.
     */
    public set msdyn_msdyn_transactioncategory_product_TransactionCategory(value: Product[] | undefined) {
        this._msdyn_msdyn_transactioncategory_product_TransactionCategory = value;
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
     * Gets the msdyn_transactioncategory_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_transactioncategory_Annotations() {
        return this._msdyn_transactioncategory_Annotations;
    };
    /**
     * Sets the msdyn_transactioncategory_Annotations property value. 
     * @param value Value to set for the msdyn_transactioncategory_Annotations property.
     */
    public set msdyn_transactioncategory_Annotations(value: Annotation[] | undefined) {
        this._msdyn_transactioncategory_Annotations = value;
    };
    /**
     * Gets the msdyn_transactioncategory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_transactioncategory_AsyncOperations() {
        return this._msdyn_transactioncategory_AsyncOperations;
    };
    /**
     * Sets the msdyn_transactioncategory_AsyncOperations property value. 
     * @param value Value to set for the msdyn_transactioncategory_AsyncOperations property.
     */
    public set msdyn_transactioncategory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_transactioncategory_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_transactioncategory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_transactioncategory_BulkDeleteFailures() {
        return this._msdyn_transactioncategory_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_transactioncategory_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_transactioncategory_BulkDeleteFailures property.
     */
    public set msdyn_transactioncategory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_transactioncategory_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_transactioncategory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_transactioncategory_DuplicateBaseRecord() {
        return this._msdyn_transactioncategory_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_transactioncategory_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_transactioncategory_DuplicateBaseRecord property.
     */
    public set msdyn_transactioncategory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_transactioncategory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_transactioncategory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_transactioncategory_DuplicateMatchingRecord() {
        return this._msdyn_transactioncategory_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_transactioncategory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_transactioncategory_DuplicateMatchingRecord property.
     */
    public set msdyn_transactioncategory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_transactioncategory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_transactioncategory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_transactioncategory_MailboxTrackingFolders() {
        return this._msdyn_transactioncategory_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_transactioncategory_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_transactioncategory_MailboxTrackingFolders property.
     */
    public set msdyn_transactioncategory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_transactioncategory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_transactioncategory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_transactioncategory_PrincipalObjectAttributeAccesses() {
        return this._msdyn_transactioncategory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_transactioncategory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_transactioncategory_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_transactioncategory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_transactioncategory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_transactioncategory_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_transactioncategory_ProcessSession() {
        return this._msdyn_transactioncategory_ProcessSession;
    };
    /**
     * Sets the msdyn_transactioncategory_ProcessSession property value. 
     * @param value Value to set for the msdyn_transactioncategory_ProcessSession property.
     */
    public set msdyn_transactioncategory_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_transactioncategory_ProcessSession = value;
    };
    /**
     * Gets the msdyn_transactioncategory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_transactioncategory_SyncErrors() {
        return this._msdyn_transactioncategory_SyncErrors;
    };
    /**
     * Sets the msdyn_transactioncategory_SyncErrors property value. 
     * @param value Value to set for the msdyn_transactioncategory_SyncErrors property.
     */
    public set msdyn_transactioncategory_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_transactioncategory_SyncErrors = value;
    };
    /**
     * Gets the msdyn_transactioncategoryid property value. 
     * @returns a string
     */
    public get msdyn_transactioncategoryid() {
        return this._msdyn_transactioncategoryid;
    };
    /**
     * Sets the msdyn_transactioncategoryid property value. 
     * @param value Value to set for the msdyn_transactioncategoryid property.
     */
    public set msdyn_transactioncategoryid(value: string | undefined) {
        this._msdyn_transactioncategoryid = value;
    };
    /**
     * Gets the msdyn_UnitGroup property value. 
     * @returns a uomschedule
     */
    public get msdyn_UnitGroup() {
        return this._msdyn_UnitGroup;
    };
    /**
     * Sets the msdyn_UnitGroup property value. 
     * @param value Value to set for the msdyn_UnitGroup property.
     */
    public set msdyn_UnitGroup(value: Uomschedule | undefined) {
        this._msdyn_UnitGroup = value;
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
        writer.writeStringValue("_msdyn_defaultunit_value", this._msdyn_defaultunit_value);
        writer.writeStringValue("_msdyn_unitgroup_value", this._msdyn_unitgroup_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeObjectValue<Uom>("msdyn_DefaultUnit", this.msdyn_DefaultUnit);
        writer.writeCollectionOfObjectValues<Bookableresourcecategory>("msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory", this.msdyn_msdyn_transactioncategory_bookableresourcecategory_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_actual_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_estimateline>("msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_estimateline_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_expensecategory>("msdyn_msdyn_transactioncategory_msdyn_expensecatego", this.msdyn_msdyn_transactioncategory_msdyn_expensecatego);
        writer.writeCollectionOfObjectValues<Msdyn_fact>("msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_fact_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_invoicelinetransaction_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_journalline_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_opportunitylinetransaction>("msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransaction_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_opportunitylinetransactioncategory>("msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_opportunitylinetransactioncategory_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransaction>("msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_orderlinetransaction_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransactioncategory>("msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_orderlinetransactioncategory_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_projectapproval>("msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_projectapproval_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_projecttask>("msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory", this.msdyn_msdyn_transactioncategory_msdyn_projecttask_transactioncategory);
        writer.writeCollectionOfObjectValues<Msdyn_projecttransactioncategory>("msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_projecttransactioncategory_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_quotelineanalyticsbreakdown>("msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_quotelineanalyticsbreakdown_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransaction>("msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_quotelinetransaction_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransactioncategory>("msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_quotelinetransactioncategory_TransactionCategory);
        writer.writeCollectionOfObjectValues<Msdyn_resourcecategorymarkuppricelevel>("msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory", this.msdyn_msdyn_transactioncategory_msdyn_resourcecategorymarkuppricelevel_transactioncategory);
        writer.writeCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>("msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory", this.msdyn_msdyn_transactioncategory_msdyn_resourcecategorypricelevel_transactioncategory);
        writer.writeCollectionOfObjectValues<Msdyn_timeentry>("msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory", this.msdyn_msdyn_transactioncategory_msdyn_timeentry_transactioncategory);
        writer.writeCollectionOfObjectValues<Msdyn_transactioncategoryclassification>("msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory", this.msdyn_msdyn_transactioncategory_msdyn_transactioncategoryclassification_transactioncategory);
        writer.writeCollectionOfObjectValues<Msdyn_transactioncategoryhierarchyelement>("msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory", this.msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ChildCategory);
        writer.writeCollectionOfObjectValues<Msdyn_transactioncategoryhierarchyelement>("msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory", this.msdyn_msdyn_transactioncategory_msdyn_transactioncategoryhierarchyelement_ParentCategory);
        writer.writeCollectionOfObjectValues<Msdyn_transactioncategorypricelevel>("msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory", this.msdyn_msdyn_transactioncategory_msdyn_transactioncategorypricelevel_TransactionCategory);
        writer.writeCollectionOfObjectValues<Product>("msdyn_msdyn_transactioncategory_product_TransactionCategory", this.msdyn_msdyn_transactioncategory_product_TransactionCategory);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_transactioncategory_Annotations", this.msdyn_transactioncategory_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_transactioncategory_AsyncOperations", this.msdyn_transactioncategory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_transactioncategory_BulkDeleteFailures", this.msdyn_transactioncategory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_transactioncategory_DuplicateBaseRecord", this.msdyn_transactioncategory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_transactioncategory_DuplicateMatchingRecord", this.msdyn_transactioncategory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_transactioncategory_MailboxTrackingFolders", this.msdyn_transactioncategory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_transactioncategory_PrincipalObjectAttributeAccesses", this.msdyn_transactioncategory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_transactioncategory_ProcessSession", this.msdyn_transactioncategory_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_transactioncategory_SyncErrors", this.msdyn_transactioncategory_SyncErrors);
        writer.writeStringValue("msdyn_transactioncategoryid", this.msdyn_transactioncategoryid);
        writer.writeObjectValue<Uomschedule>("msdyn_UnitGroup", this.msdyn_UnitGroup);
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
