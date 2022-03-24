import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBookableresourcecategoryassnFromDiscriminatorValue} from './createBookableresourcecategoryassnFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_estimatelineFromDiscriminatorValue} from './createMsdyn_estimatelineFromDiscriminatorValue';
import {createMsdyn_factFromDiscriminatorValue} from './createMsdyn_factFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_journalFromDiscriminatorValue} from './createMsdyn_journalFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_opportunitylineresourcecategoryFromDiscriminatorValue} from './createMsdyn_opportunitylineresourcecategoryFromDiscriminatorValue';
import {createMsdyn_opportunitylinetransactionFromDiscriminatorValue} from './createMsdyn_opportunitylinetransactionFromDiscriminatorValue';
import {createMsdyn_orderlineresourcecategoryFromDiscriminatorValue} from './createMsdyn_orderlineresourcecategoryFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionFromDiscriminatorValue} from './createMsdyn_orderlinetransactionFromDiscriminatorValue';
import {createMsdyn_projectapprovalFromDiscriminatorValue} from './createMsdyn_projectapprovalFromDiscriminatorValue';
import {createMsdyn_projectparameterFromDiscriminatorValue} from './createMsdyn_projectparameterFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_projectteamFromDiscriminatorValue} from './createMsdyn_projectteamFromDiscriminatorValue';
import {createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue} from './createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue';
import {createMsdyn_quotelineresourcecategoryFromDiscriminatorValue} from './createMsdyn_quotelineresourcecategoryFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionFromDiscriminatorValue} from './createMsdyn_quotelinetransactionFromDiscriminatorValue';
import {createMsdyn_requirementresourcecategoryFromDiscriminatorValue} from './createMsdyn_requirementresourcecategoryFromDiscriminatorValue';
import {createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue} from './createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue';
import {createMsdyn_resourcecategorypricelevelFromDiscriminatorValue} from './createMsdyn_resourcecategorypricelevelFromDiscriminatorValue';
import {createMsdyn_resourcerequestFromDiscriminatorValue} from './createMsdyn_resourcerequestFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createMsdyn_rolecompetencyrequirementFromDiscriminatorValue} from './createMsdyn_rolecompetencyrequirementFromDiscriminatorValue';
import {createMsdyn_roleutilizationFromDiscriminatorValue} from './createMsdyn_roleutilizationFromDiscriminatorValue';
import {createMsdyn_timeentryFromDiscriminatorValue} from './createMsdyn_timeentryFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bookableresourcecategoryassn, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_actual, Msdyn_estimateline, Msdyn_fact, Msdyn_invoicelinetransaction, Msdyn_journal, Msdyn_journalline, Msdyn_opportunitylineresourcecategory, Msdyn_opportunitylinetransaction, Msdyn_orderlineresourcecategory, Msdyn_orderlinetransaction, Msdyn_projectapproval, Msdyn_projectparameter, Msdyn_projecttask, Msdyn_projectteam, Msdyn_quotelineanalyticsbreakdown, Msdyn_quotelineresourcecategory, Msdyn_quotelinetransaction, Msdyn_requirementresourcecategory, Msdyn_resourcecategorymarkuppricelevel, Msdyn_resourcecategorypricelevel, Msdyn_resourcerequest, Msdyn_resourcerequirement, Msdyn_rolecompetencyrequirement, Msdyn_roleutilization, Msdyn_timeentry, Msdyn_transactioncategory, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bookableresourcecategory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _bookableresourcecategory_AsyncOperations?: Asyncoperation[] | undefined;
    private _bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory?: Bookableresourcecategoryassn[] | undefined;
    private _bookableresourcecategory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bookableresourcecategory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcecategory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcecategory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bookableresourcecategory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bookableresourcecategory_ProcessSession?: Processsession[] | undefined;
    private _bookableResourceCategory_SyncErrors?: Syncerror[] | undefined;
    private _bookableresourcecategoryid?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid?: Bookableresourcebooking[] | undefined;
    private _msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid?: Bookableresourcebookingheader[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory?: Msdyn_actual[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory?: Msdyn_estimateline[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory?: Msdyn_fact[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory?: Msdyn_journal[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory?: Msdyn_journalline[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory?: Msdyn_opportunitylineresourcecategory[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory?: Msdyn_opportunitylinetransaction[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory?: Msdyn_orderlineresourcecategory[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory?: Msdyn_orderlinetransaction[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory?: Msdyn_projectapproval[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole?: Msdyn_projectparameter[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole?: Msdyn_projectparameter[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory?: Msdyn_projecttask[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension?: Msdyn_projecttask[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory?: Msdyn_projectteam[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory?: Msdyn_quotelineanalyticsbreakdown[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory?: Msdyn_quotelineresourcecategory[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory?: Msdyn_quotelinetransaction[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory?: Msdyn_resourcecategorymarkuppricelevel[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory?: Msdyn_resourcecategorypricelevel[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid?: Msdyn_resourcerequest[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory?: Msdyn_rolecompetencyrequirement[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_roleutilization_role?: Msdyn_roleutilization[] | undefined;
    private _msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory?: Msdyn_timeentry[] | undefined;
    private _msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory?: Msdyn_requirementresourcecategory[] | undefined;
    private _msdyn_bookableresourcecategory_resourcerequirement?: Msdyn_resourcerequirement[] | undefined;
    private _msdyn_targetutilization?: number | undefined;
    private _msdyn_TransactionCategory?: Msdyn_transactioncategory | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_transactioncategory_value property value. 
     * @returns a string
     */
    public get _msdyn_transactioncategory_value() {
        return this.__msdyn_transactioncategory_value;
    };
    /**
     * Sets the _msdyn_transactioncategory_value property value. 
     * @param value Value to set for the _msdyn_transactioncategory_value property.
     */
    public set _msdyn_transactioncategory_value(value: string | undefined) {
        this.__msdyn_transactioncategory_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
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
     * Gets the bookableresourcecategory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bookableresourcecategory_AsyncOperations() {
        return this._bookableresourcecategory_AsyncOperations;
    };
    /**
     * Sets the bookableresourcecategory_AsyncOperations property value. 
     * @param value Value to set for the bookableresourcecategory_AsyncOperations property.
     */
    public set bookableresourcecategory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bookableresourcecategory_AsyncOperations = value;
    };
    /**
     * Gets the bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory property value. 
     * @returns a bookableresourcecategoryassn
     */
    public get bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory() {
        return this._bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory;
    };
    /**
     * Sets the bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory property value. 
     * @param value Value to set for the bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory property.
     */
    public set bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory(value: Bookableresourcecategoryassn[] | undefined) {
        this._bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory = value;
    };
    /**
     * Gets the bookableresourcecategory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bookableresourcecategory_BulkDeleteFailures() {
        return this._bookableresourcecategory_BulkDeleteFailures;
    };
    /**
     * Sets the bookableresourcecategory_BulkDeleteFailures property value. 
     * @param value Value to set for the bookableresourcecategory_BulkDeleteFailures property.
     */
    public set bookableresourcecategory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bookableresourcecategory_BulkDeleteFailures = value;
    };
    /**
     * Gets the bookableresourcecategory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcecategory_DuplicateBaseRecord() {
        return this._bookableresourcecategory_DuplicateBaseRecord;
    };
    /**
     * Sets the bookableresourcecategory_DuplicateBaseRecord property value. 
     * @param value Value to set for the bookableresourcecategory_DuplicateBaseRecord property.
     */
    public set bookableresourcecategory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcecategory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the bookableresourcecategory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcecategory_DuplicateMatchingRecord() {
        return this._bookableresourcecategory_DuplicateMatchingRecord;
    };
    /**
     * Sets the bookableresourcecategory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the bookableresourcecategory_DuplicateMatchingRecord property.
     */
    public set bookableresourcecategory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcecategory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the bookableresourcecategory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bookableresourcecategory_MailboxTrackingFolders() {
        return this._bookableresourcecategory_MailboxTrackingFolders;
    };
    /**
     * Sets the bookableresourcecategory_MailboxTrackingFolders property value. 
     * @param value Value to set for the bookableresourcecategory_MailboxTrackingFolders property.
     */
    public set bookableresourcecategory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bookableresourcecategory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bookableresourcecategory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bookableresourcecategory_PrincipalObjectAttributeAccesses() {
        return this._bookableresourcecategory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bookableresourcecategory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bookableresourcecategory_PrincipalObjectAttributeAccesses property.
     */
    public set bookableresourcecategory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bookableresourcecategory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bookableresourcecategory_ProcessSession property value. 
     * @returns a processsession
     */
    public get bookableresourcecategory_ProcessSession() {
        return this._bookableresourcecategory_ProcessSession;
    };
    /**
     * Sets the bookableresourcecategory_ProcessSession property value. 
     * @param value Value to set for the bookableresourcecategory_ProcessSession property.
     */
    public set bookableresourcecategory_ProcessSession(value: Processsession[] | undefined) {
        this._bookableresourcecategory_ProcessSession = value;
    };
    /**
     * Gets the bookableResourceCategory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bookableResourceCategory_SyncErrors() {
        return this._bookableResourceCategory_SyncErrors;
    };
    /**
     * Sets the bookableResourceCategory_SyncErrors property value. 
     * @param value Value to set for the BookableResourceCategory_SyncErrors property.
     */
    public set bookableResourceCategory_SyncErrors(value: Syncerror[] | undefined) {
        this._bookableResourceCategory_SyncErrors = value;
    };
    /**
     * Gets the bookableresourcecategoryid property value. 
     * @returns a string
     */
    public get bookableresourcecategoryid() {
        return this._bookableresourcecategoryid;
    };
    /**
     * Sets the bookableresourcecategoryid property value. 
     * @param value Value to set for the bookableresourcecategoryid property.
     */
    public set bookableresourcecategoryid(value: string | undefined) {
        this._bookableresourcecategoryid = value;
    };
    /**
     * Instantiates a new bookableresourcecategory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Bookableresourcecategory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcecategory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bookableresourcecategory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcecategory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Bookableresourcecategory)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bookableresourcecategory)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bookableresourcecategory)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bookableresourcecategory)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bookableresourcecategory)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Bookableresourcecategory)._transactioncurrencyid_value = n.getStringValue(); },
            "bookableresourcecategory_AsyncOperations": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory = n.getCollectionOfObjectValues<Bookableresourcecategoryassn>(createBookableresourcecategoryassnFromDiscriminatorValue); },
            "bookableresourcecategory_BulkDeleteFailures": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bookableresourcecategory_DuplicateBaseRecord": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcecategory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcecategory_MailboxTrackingFolders": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bookableresourcecategory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bookableresourcecategory_ProcessSession": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "bookableResourceCategory_SyncErrors": (o, n) => { (o as unknown as Bookableresourcecategory).bookableResourceCategory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bookableresourcecategoryid": (o, n) => { (o as unknown as Bookableresourcecategory).bookableresourcecategoryid = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Bookableresourcecategory).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bookableresourcecategory).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcecategory).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Bookableresourcecategory).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Bookableresourcecategory).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bookableresourcecategory).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Bookableresourcecategory).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bookableresourcecategory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcecategory).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid = n.getCollectionOfObjectValues<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid = n.getCollectionOfObjectValues<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_estimateline>(createMsdyn_estimatelineFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_fact>(createMsdyn_factFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_journal>(createMsdyn_journalFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_opportunitylineresourcecategory>(createMsdyn_opportunitylineresourcecategoryFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_opportunitylinetransaction>(createMsdyn_opportunitylinetransactionFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_orderlineresourcecategory>(createMsdyn_orderlineresourcecategoryFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_orderlinetransaction>(createMsdyn_orderlinetransactionFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_projectapproval>(createMsdyn_projectapprovalFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole = n.getCollectionOfObjectValues<Msdyn_projectparameter>(createMsdyn_projectparameterFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole = n.getCollectionOfObjectValues<Msdyn_projectparameter>(createMsdyn_projectparameterFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory = n.getCollectionOfObjectValues<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension = n.getCollectionOfObjectValues<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory = n.getCollectionOfObjectValues<Msdyn_projectteam>(createMsdyn_projectteamFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_quotelineanalyticsbreakdown>(createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_quotelineresourcecategory>(createMsdyn_quotelineresourcecategoryFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_quotelinetransaction>(createMsdyn_quotelinetransactionFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory = n.getCollectionOfObjectValues<Msdyn_resourcecategorymarkuppricelevel>(createMsdyn_resourcecategorymarkuppricelevelFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>(createMsdyn_resourcecategorypricelevelFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid = n.getCollectionOfObjectValues<Msdyn_resourcerequest>(createMsdyn_resourcerequestFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory = n.getCollectionOfObjectValues<Msdyn_rolecompetencyrequirement>(createMsdyn_rolecompetencyrequirementFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_roleutilization_role": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_roleutilization_role = n.getCollectionOfObjectValues<Msdyn_roleutilization>(createMsdyn_roleutilizationFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory = n.getCollectionOfObjectValues<Msdyn_timeentry>(createMsdyn_timeentryFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory = n.getCollectionOfObjectValues<Msdyn_requirementresourcecategory>(createMsdyn_requirementresourcecategoryFromDiscriminatorValue); },
            "msdyn_bookableresourcecategory_resourcerequirement": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_bookableresourcecategory_resourcerequirement = n.getCollectionOfObjectValues<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_targetutilization": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_targetutilization = n.getNumberValue(); },
            "msdyn_TransactionCategory": (o, n) => { (o as unknown as Bookableresourcecategory).msdyn_TransactionCategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Bookableresourcecategory).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bookableresourcecategory).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Bookableresourcecategory).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bookableresourcecategory).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Bookableresourcecategory).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bookableresourcecategory).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Bookableresourcecategory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bookableresourcecategory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bookableresourcecategory).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Bookableresourcecategory).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bookableresourcecategory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bookableresourcecategory).versionnumber = n.getNumberValue(); },
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
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
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
     * Gets the msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid() {
        return this._msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid property.
     */
    public set msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid(value: Bookableresourcebooking[] | undefined) {
        this._msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid property value. 
     * @returns a bookableresourcebookingheader
     */
    public get msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid() {
        return this._msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid property.
     */
    public set msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid(value: Bookableresourcebookingheader[] | undefined) {
        this._msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory(value: Msdyn_actual[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory property value. 
     * @returns a msdyn_estimateline
     */
    public get msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory(value: Msdyn_estimateline[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory property value. 
     * @returns a msdyn_fact
     */
    public get msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory(value: Msdyn_fact[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory property value. 
     * @returns a msdyn_journal
     */
    public get msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory(value: Msdyn_journal[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory(value: Msdyn_journalline[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory property value. 
     * @returns a msdyn_opportunitylineresourcecategory
     */
    public get msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory(value: Msdyn_opportunitylineresourcecategory[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory property value. 
     * @returns a msdyn_opportunitylinetransaction
     */
    public get msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory(value: Msdyn_opportunitylinetransaction[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory property value. 
     * @returns a msdyn_orderlineresourcecategory
     */
    public get msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory(value: Msdyn_orderlineresourcecategory[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory property value. 
     * @returns a msdyn_orderlinetransaction
     */
    public get msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory(value: Msdyn_orderlinetransaction[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory property value. 
     * @returns a msdyn_projectapproval
     */
    public get msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory(value: Msdyn_projectapproval[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole property value. 
     * @returns a msdyn_projectparameter
     */
    public get msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole() {
        return this._msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole property.
     */
    public set msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole(value: Msdyn_projectparameter[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole property value. 
     * @returns a msdyn_projectparameter
     */
    public get msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole() {
        return this._msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole property.
     */
    public set msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole(value: Msdyn_projectparameter[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory() {
        return this._msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory(value: Msdyn_projecttask[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension() {
        return this._msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension property.
     */
    public set msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension(value: Msdyn_projecttask[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory property value. 
     * @returns a msdyn_projectteam
     */
    public get msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory() {
        return this._msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory(value: Msdyn_projectteam[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory property value. 
     * @returns a msdyn_quotelineanalyticsbreakdown
     */
    public get msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory(value: Msdyn_quotelineanalyticsbreakdown[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory property value. 
     * @returns a msdyn_quotelineresourcecategory
     */
    public get msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory(value: Msdyn_quotelineresourcecategory[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory property value. 
     * @returns a msdyn_quotelinetransaction
     */
    public get msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory(value: Msdyn_quotelinetransaction[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory property value. 
     * @returns a msdyn_resourcecategorymarkuppricelevel
     */
    public get msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory() {
        return this._msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory(value: Msdyn_resourcecategorymarkuppricelevel[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory property value. 
     * @returns a msdyn_resourcecategorypricelevel
     */
    public get msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory(value: Msdyn_resourcecategorypricelevel[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid property value. 
     * @returns a msdyn_resourcerequest
     */
    public get msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid() {
        return this._msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid property.
     */
    public set msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid(value: Msdyn_resourcerequest[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory property value. 
     * @returns a msdyn_rolecompetencyrequirement
     */
    public get msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory() {
        return this._msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory(value: Msdyn_rolecompetencyrequirement[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_roleutilization_role property value. 
     * @returns a msdyn_roleutilization
     */
    public get msdyn_bookableresourcecategory_msdyn_roleutilization_role() {
        return this._msdyn_bookableresourcecategory_msdyn_roleutilization_role;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_roleutilization_role property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_roleutilization_role property.
     */
    public set msdyn_bookableresourcecategory_msdyn_roleutilization_role(value: Msdyn_roleutilization[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_roleutilization_role = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory property value. 
     * @returns a msdyn_timeentry
     */
    public get msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory() {
        return this._msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory property.
     */
    public set msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory(value: Msdyn_timeentry[] | undefined) {
        this._msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory property value. 
     * @returns a msdyn_requirementresourcecategory
     */
    public get msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory() {
        return this._msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory property.
     */
    public set msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory(value: Msdyn_requirementresourcecategory[] | undefined) {
        this._msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_bookableresourcecategory_resourcerequirement property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_bookableresourcecategory_resourcerequirement() {
        return this._msdyn_bookableresourcecategory_resourcerequirement;
    };
    /**
     * Sets the msdyn_bookableresourcecategory_resourcerequirement property value. 
     * @param value Value to set for the msdyn_bookableresourcecategory_resourcerequirement property.
     */
    public set msdyn_bookableresourcecategory_resourcerequirement(value: Msdyn_resourcerequirement[] | undefined) {
        this._msdyn_bookableresourcecategory_resourcerequirement = value;
    };
    /**
     * Gets the msdyn_targetutilization property value. 
     * @returns a integer
     */
    public get msdyn_targetutilization() {
        return this._msdyn_targetutilization;
    };
    /**
     * Sets the msdyn_targetutilization property value. 
     * @param value Value to set for the msdyn_targetutilization property.
     */
    public set msdyn_targetutilization(value: number | undefined) {
        this._msdyn_targetutilization = value;
    };
    /**
     * Gets the msdyn_TransactionCategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_TransactionCategory() {
        return this._msdyn_TransactionCategory;
    };
    /**
     * Sets the msdyn_TransactionCategory property value. 
     * @param value Value to set for the msdyn_TransactionCategory property.
     */
    public set msdyn_TransactionCategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_TransactionCategory = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bookableresourcecategory_AsyncOperations", this.bookableresourcecategory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresourcecategoryassn>("bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory", this.bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bookableresourcecategory_BulkDeleteFailures", this.bookableresourcecategory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcecategory_DuplicateBaseRecord", this.bookableresourcecategory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcecategory_DuplicateMatchingRecord", this.bookableresourcecategory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bookableresourcecategory_MailboxTrackingFolders", this.bookableresourcecategory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bookableresourcecategory_PrincipalObjectAttributeAccesses", this.bookableresourcecategory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("bookableresourcecategory_ProcessSession", this.bookableresourcecategory_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("bookableResourceCategory_SyncErrors", this.bookableResourceCategory_SyncErrors);
        writer.writeStringValue("bookableresourcecategoryid", this.bookableresourcecategoryid);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeCollectionOfObjectValues<Bookableresourcebooking>("msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid", this.msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid);
        writer.writeCollectionOfObjectValues<Bookableresourcebookingheader>("msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid", this.msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_actual_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_estimateline>("msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_estimateline_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_fact>("msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_fact_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_invoicelinetransaction_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_journal>("msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_journal_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_journalline_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_opportunitylineresourcecategory>("msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_opportunitylineresourcecategory_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_opportunitylinetransaction>("msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_opportunitylinetransaction_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_orderlineresourcecategory>("msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_orderlineresourcecategory_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransaction>("msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_orderlinetransaction_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_projectapproval>("msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_projectparameter>("msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole", this.msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole);
        writer.writeCollectionOfObjectValues<Msdyn_projectparameter>("msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole", this.msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole);
        writer.writeCollectionOfObjectValues<Msdyn_projecttask>("msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory", this.msdyn_bookableresourcecategory_msdyn_projecttask_resourcecategory);
        writer.writeCollectionOfObjectValues<Msdyn_projecttask>("msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension", this.msdyn_bookableresourcecategory_msdyn_projecttask_ResourceCategoryPricingDimension);
        writer.writeCollectionOfObjectValues<Msdyn_projectteam>("msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory", this.msdyn_bookableresourcecategory_msdyn_projectteam_resourcecategory);
        writer.writeCollectionOfObjectValues<Msdyn_quotelineanalyticsbreakdown>("msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_quotelineresourcecategory>("msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_quotelineresourcecategory_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransaction>("msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_quotelinetransaction_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_resourcecategorymarkuppricelevel>("msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory", this.msdyn_bookableresourcecategory_msdyn_resourcecategorymarkuppricelevel_resourcecategory);
        writer.writeCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>("msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory", this.msdyn_bookableresourcecategory_msdyn_resourcecategorypricelevel_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequest>("msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid", this.msdyn_bookableresourcecategory_msdyn_resourcerequest_roleid);
        writer.writeCollectionOfObjectValues<Msdyn_rolecompetencyrequirement>("msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory", this.msdyn_bookableresourcecategory_msdyn_rolecompetencyrequirement_resourcecategory);
        writer.writeCollectionOfObjectValues<Msdyn_roleutilization>("msdyn_bookableresourcecategory_msdyn_roleutilization_role", this.msdyn_bookableresourcecategory_msdyn_roleutilization_role);
        writer.writeCollectionOfObjectValues<Msdyn_timeentry>("msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory", this.msdyn_bookableresourcecategory_msdyn_timeentry_resourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_requirementresourcecategory>("msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory", this.msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirement>("msdyn_bookableresourcecategory_resourcerequirement", this.msdyn_bookableresourcecategory_resourcerequirement);
        writer.writeNumberValue("msdyn_targetutilization", this.msdyn_targetutilization);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_TransactionCategory", this.msdyn_TransactionCategory);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
